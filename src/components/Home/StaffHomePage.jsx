import React, { useState, useEffect } from "react";
// import { useSelector } from "react-redux";
import AddItem from "../AddItem/AddItem";
import ItemCard from "../Items/ItemCard";
import './staffhome.css'

function StaffHomePage() {
    const [showAddItem, setShowAddItem] = useState(false);
    const [items, setItems] = useState([]);
    // const [tobeedited, settobeedited] = useState([]);
    // const username = useSelector(state => state.auth.user?.username || null);

    useEffect(() => {
        const fetchItemsData = async () => {
            try {
                const response = await fetch("http://localhost:5000/items");
                const data = await response.json();
                console.log(data);
                const filteredData = data.filter(item => item.restaurant === "Restaurant 1");
                setItems(filteredData);
            } catch (error) {
                console.error("Error fetching items data: ", error);
            }
        };
        fetchItemsData();
    }, []);
    

    const handleAddItemClick = () => {
        setShowAddItem(true);
    };

    const handleEditClick = async (id, name, description, price) => {
        try {
            const response = await fetch(`http://localhost:5000/items/:${id}`, {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ name, description, price }),
            });
            const updatedItem = await response.json();
            setItems((prevItems) =>
                prevItems.map((item) => {
                    if (item.id === updatedItem.id) {
                        return updatedItem;
                    } else {
                        return item;
                    }
                })
            );
        } catch (error) {
            console.error("Error updating item data: ", error);
        }
    };

    return (
        <div>
            <h1>Staff Home Page</h1>
            <div className="item-card-container">
                {items.map((item) => (
                    <ItemCard
                        key={item.id}
                        name={item.name}
                        imageUrl={item.image}
                        price={item.price}
                        description={item.description}
                        onEditClick={(name, description, price) => handleEditClick(item.id, name, description, price)}
                    />
                ))}
            </div>
            <button onClick={handleAddItemClick}>Add a new item</button>
            {showAddItem && <AddItem />}
        </div>
    );
}

export default StaffHomePage;
