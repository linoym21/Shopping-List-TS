import React from 'react';
import { useSelector } from 'react-redux';
import { ListState } from "../types/types";



const TotalItems: React.FC = () => {
    const totalItems = useSelector((state: ListState) => state.totalItems);

    return (
        <div>
            Total Items: {totalItems}
        </div>
    );
};

export default TotalItems;
