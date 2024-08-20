import { createSlice, nanoid, PayloadAction } from '@reduxjs/toolkit';
import { deleteItemFromServer, decreaseItemQuantity, increaseItemQuantity, addItemToServer } from '../utils/updateServer';
import { Item,ListState,ItemsList } from "../types/types";

const initialState: ListState = {
    list: {
        'Vegetables And Fruits': [],
        'Cheeses': [],
        'Cleaning Products': [],
        'Meat And Fish': [],
        'Pastries': [],
    },
    totalItems: 0,
};

export const listSlice = createSlice({
    name: 'listAction',
    initialState,
    reducers: {
        addItem: (state, action: PayloadAction<Item>) => {
            const categoryList = state.list[action.payload.category];
            const existingItem = categoryList.find(item => item.text === action.payload.text);

            if (existingItem) {
                if( existingItem.quantity){
                    existingItem.quantity += 1;
                }
            } else {
                state.list[action.payload.category].push({
                    id: nanoid(),
                    text: action.payload.text,
                    quantity: 1,
                    category: action.payload.category,
                });
            }

            state.totalItems = Object.values(state.list).reduce((total, categoryItems) => {
                categoryItems.forEach(item => {
                    if(item.quantity){
                        total += item.quantity;
                    }
                });
                return total;
            }, 0);
            
            addItemToServer(action.payload.text, action.payload.category);
        },
        removeItem: (state, action: PayloadAction<Item>) => {
            const { category } = action.payload;
            const categoryList = state.list[category];
            if (!categoryList) {
                console.error(`Category ${category} not found`);
                return;
            }
            state.list[category] = categoryList.filter(item => item.id !== action.payload.id);
            state.totalItems = Object.values(state.list).reduce((total, categoryItems) => {
                categoryItems.forEach(item => {
                    if(item.quantity){
                     total += item.quantity; 
                    }
                 
                });
                return total;
            }, 0);

            deleteItemFromServer(action.payload.text, action.payload.category);
        },
        decrementItem: (state, action: PayloadAction<Item>) => {
            const categoryList = state.list[action.payload.category];
            const existingItem = categoryList.find(todo => todo.id === action.payload.id);
            if(existingItem){
                if(existingItem.quantity){
                    if (existingItem && existingItem.quantity > 0) {
                        if (existingItem.quantity === 1) {
                            state.list[action.payload.category] = categoryList.filter(todo => todo.id !== action.payload.id);
                            deleteItemFromServer(action.payload.text, action.payload.category);
                        } else {
                            decreaseItemQuantity(action.payload.text, action.payload.category);
                            existingItem.quantity -= 1;
                        }
                }
                }}
           
            state.totalItems = Object.values(state.list).reduce((total, categoryItems) => {
                categoryItems.forEach(item => {
                    if( item.quantity){
                        total += item.quantity;
                    }
                });
                return total;
            }, 0);
        },
        incrementItem: (state, action: PayloadAction<Item>) => {
            const categoryList = state.list[action.payload.category];
            const existingItem = categoryList.find(todo => todo.id === action.payload.id);
            if (existingItem) {
                if( existingItem.quantity){
                    existingItem.quantity += 1;
                } 
            }
            state.totalItems = Object.values(state.list).reduce((total, categoryItems) => {
                categoryItems.forEach(item => {
                    if(item.quantity){
                      total += item.quantity;  
                    }
                    
                });
                return total;
            }, 0);
            increaseItemQuantity(action.payload.text, action.payload.category);
        },
        updateList: (state, action: PayloadAction<ItemsList>) => {
            const { items } = action.payload;
            items.forEach(item => {
                const categoryTitle = item.category;
                state.list[categoryTitle].push({
                    id: item.id,
                    text: item.text,
                    quantity: item.quantity,
                    category: categoryTitle,
                });
            });

            state.totalItems = items.reduce((total, item) => {
                return total + item.quantity;
            }, 0);
        },
    },
});

export const { addItem, removeItem, decrementItem, incrementItem, updateList } = listSlice.actions;
export default listSlice.reducer;
