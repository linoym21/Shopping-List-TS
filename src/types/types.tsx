export interface Item {
    id?: string;
    text: string;
    quantity: number;
    category: string;
}

export interface ListState {
    list: {
        [key: string]: Item[];
    };
    totalItems: number;
}


export interface ItemsList {
    items: Item[];
}

export interface ItemsProps {
    data: Item;
}

export interface CategoriesProps {
    data: {
      category: string;
    };
  }