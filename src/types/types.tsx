export interface Item {
    id?: string;
    text: string;
    quantity: number;
    category: string;
    categoryId?:{
        title: string;
    }
}
export interface ItemsFromDB {
    _id: string;
    title: string;
    quantity: number;
    category: string;
    categoryId:{
        title: string;
    }
}

export interface ListState {
    list: {
        [key: string]: Item[];
    };
    totalItems: number;
}


export interface ItemsList {
    items: ItemsFromDB[];
}

export interface ItemsProps {
    data: Item;
}

export interface CategoriesProps {
    data: {
      category: string;
    };
  }