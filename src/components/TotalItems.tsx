import React from 'react';
import { useSelector } from 'react-redux';

// Define the shape of the Redux state
interface TotalItemsProps {
    totalItems: number;
}

const TotalItems: React.FC = () => {
    const totalItems = useSelector((state: TotalItemsProps) => state.totalItems);

    return (
        <div>
            Total Items: {totalItems}
        </div>
    );
};

export default TotalItems;
