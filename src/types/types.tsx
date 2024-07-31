export interface ItemList {
    id?: string;
    text: string;
    quantity?: number;
    category: string;
}

export interface ListState {
    list: {
        [key: string]: ItemList[];
    };
    totalItems: number;
}

export interface SingleItem {
    _id: string;
    categoryId:{
        title: string
    }
    title: string,
    text: string;
    quantity: number;
    category: string;
}

export interface ItemsProps {
    items: SingleItem[];
}

