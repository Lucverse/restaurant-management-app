import React, { useState, useEffect } from "react";
import AddItem from "../AddItem/AddItem";
import ItemCard from "../Items/ItemCard";
import './StaffHomePage.css'
import { useSelector, useDispatch } from "react-redux";
import { fetchItems } from "../../actions/itemsActions";

function StaffHomePage() {
    const dispatch = useDispatch();
    const [showAddItem, setShowAddItem] = useState(false);
    const items = useSelector(state => state.item.items);
    const restaurantName = useSelector(state => state.auth.user.restaurantName);
    const totalItems = items.length;
    useEffect(() => {
        dispatch(fetchItems(restaurantName));
    }, [dispatch, restaurantName]);

    const handleAddItemClick = () => {
        setShowAddItem(true);
    };

    const handleCancel = () => {
        setShowAddItem(false);
    };

    const handleEditClick = async (id, name, description, price) => {
        // console.log(id,name);
    };

    return (
        <div className="staff-home-main">
            <h1>{restaurantName}</h1>
            <p>Total Items : {totalItems}</p>
            {showAddItem ? null : (
                <div className="add-item-button">
                    <button onClick={handleAddItemClick}>Add a new item</button>
                </div>
            )}
            <div className="item-card-container">
                {items.map((item) => (
                    <ItemCard
                        key={item.itemName}
                        name={item.itemName}
                        imageUrl={item.itemImage}
                        price={item.itemPrice}
                        description={item.itemDescription}
                        type={item.type}
                        onEditClick={(name, description, price) => handleEditClick(item.id, name, description, price)}
                    />
                ))}
            </div>
            {showAddItem && <AddItem onCancel={handleCancel} />}
        </div>
    );
}

export default StaffHomePage;
