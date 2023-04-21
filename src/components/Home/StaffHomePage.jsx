import React, { useState, useEffect } from "react";
import AddItem from "../AddItem/AddItem";
import ItemCard from "../Items/ItemCard";
import './StaffHomePage.css'
import { API_URL } from "../../types/types";
import { useSelector } from "react-redux";

function StaffHomePage() {
    const [showAddItem, setShowAddItem] = useState(false);
    const [items, setItems] = useState([]);
    const restaurantName = useSelector(state => state.auth.user.restaurantName);

    useEffect(() => {
        const fetchItemsData = async () => {
            try {
                const response = await fetch(`${API_URL}/items`);
                const data = await response.json();
                const filteredData = data.filter(item => item.restaurantName === restaurantName);
                setItems(filteredData);
            } catch (error) {
                console.error("Error fetching items data: ", error);
            }
        };
        fetchItemsData();
    }, [restaurantName]);


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
        <div>
            <h1>Staff Home Page</h1>
            <button onClick={handleAddItemClick}>Add a new item</button>
            <div className="item-card-container">
                {items.map((item) => (
                    <ItemCard
                        key={item.id}
                        name={item.itemName}
                        imageUrl={item.itemImage}
                        price={item.itemPrice}
                        description={item.itemDescription}
                        onEditClick={(name, description, price) => handleEditClick(item.id, name, description, price)}
                    />
                ))}
            </div>
            {showAddItem && <AddItem onCancel={handleCancel} />}
        </div>
    );
}

export default StaffHomePage;
