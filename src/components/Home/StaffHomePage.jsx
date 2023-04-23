import React, { useState, useEffect } from "react";
import AddItem from "../AddItem/AddItem";
import ItemCard from "../Items/ItemCard";
import './StaffHomePage.css'
import { API_URL } from "../../types/types";
import { useSelector } from "react-redux";

function StaffHomePage() {
    const [showAddItem, setShowAddItem] = useState(false);
    const [items, setItems] = useState([]);
    const [totalItems, setTotalItems] = useState([]);
    const user = useSelector(state => state.auth.user.username);
    const [restaurantName, setRestaurantName] = useState('');

    useEffect(() => {
        const fetchRestaurants = async () => {
            try {
                const response = await fetch(`${API_URL}/restaurants`);
                const data = await response.json();
                setRestaurantName(data.filter(item => item.staff.includes(user))[0].restaurantName);
            } catch (error) {
                console.error("Error fetching items data: ", error);
            }
        }
        const fetchItemsData = async () => {
            try {
                const response = await fetch(`${API_URL}/items`);
                const data = await response.json();
                const filteredData = data.filter(item => item.restaurantName === restaurantName);
                setItems(filteredData);
                setTotalItems(filteredData.length);
            } catch (error) {
                console.error("Error fetching items data: ", error);
            }
        };
        fetchRestaurants();
        fetchItemsData();
    }, [user, restaurantName]);


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
                        key={item.id}
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
