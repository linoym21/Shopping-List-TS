import axios from 'axios';

const url = "https://shopping-list-backend-a6vl.onrender.com";

const decreaseItemQuantity = async (title: string, categoryTitle: string): Promise<void> => {
    try {
        const response = await fetch(`${url}/items/decreaseQuantity`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                title: title,
                categoryTitle: categoryTitle
            })
        });
        await response.json();
    } catch (error) {
        console.error(error);
    }
};

const increaseItemQuantity = async (title: string, categoryTitle: string): Promise<void> => {
    try {
        const response = await fetch(`${url}/items/increaseQuantity`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                title: title,
                categoryTitle: categoryTitle
            })
        });
        const data = await response.json();
    } catch (error) {
        console.error(error);
    }
};

const deleteItemFromServer = async (title: string, categoryTitle: string): Promise<void> => {
    try {
        const requestOptions = {
            method: 'DELETE',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                title: title,
                categoryTitle: categoryTitle
            })
        };

        await fetch(`${url}/items`, requestOptions);
    } catch (error) {
        console.error(error);
    }
};

const addItemToServer = async (inputValue: string, category: string): Promise<string | void> => {
    try {
        const response = await axios.post(`${url}/items`, {
            title: inputValue,
            categoryTitle: category,
            quantity: 1
        });

        return response.data.item._id;
    } catch (error: any) {
        console.error(error.response?.data?.error);
    }
};

export { addItemToServer, deleteItemFromServer, increaseItemQuantity, decreaseItemQuantity };
