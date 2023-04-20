import "./additem.css";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addItem } from "../../actions/itemsActions";
import { API_URL } from "../../types/types";

function AddItem() {
    const dispatch = useDispatch();

    const [itemName, setItemName] = useState("");
    const [itemImage, setItemImage] = useState("");
    const [itemPrice, setItemPrice] = useState("");
    const [itemDescription, setItemDescription] = useState("");
    const [itemType, setItemType] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(
            addItem({
                itemName,
                itemImage,
                itemPrice,
                itemDescription,
                itemType,
            })
        );
        const newItem = {
            itemName,
            itemImage,
            itemPrice,
            itemDescription,
            itemType,
        };
        fetch(`http://localhost:5000/restaurants`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(newItem),
        })
            .then((response) => response.json())
            .then((data) => {
                console.log("Item added successfully to API:", data);
            })
            .catch((error) => {
                console.error("Error adding item to API:", error);
            });
        setItemName("");
        setItemImage("");
        setItemPrice("");
        setItemDescription("");
        setItemType("");
    };

    return (
        <div className="add-item-overlay">
            <div className="add-item-main">
                <h1>Add Item</h1>
                <form onSubmit={handleSubmit}>
                    <label htmlFor="itemName">Item Name</label>
                    <input
                        type="text"
                        id="itemName"
                        placeholder="Item Name"
                        value={itemName}
                        onChange={(e) => setItemName(e.target.value)}
                    />
                    <label htmlFor="itemImage">Item Image URL</label>
                    <input
                        type="text"
                        id="itemImage"
                        placeholder="Item Image URL"
                        value={itemImage}
                        onChange={(e) => setItemImage(e.target.value)}
                    />
                    <label htmlFor="itemPrice">Item Price</label>
                    <input
                        type="number"
                        id="itemPrice"
                        placeholder="Item Price"
                        value={itemPrice}
                        onChange={(e) => setItemPrice(e.target.value)}
                    />
                    <label htmlFor="itemDescription">Item Description</label>
                    <textarea
                        id="itemDescription"
                        placeholder="Item Description"
                        value={itemDescription}
                        onChange={(e) => setItemDescription(e.target.value)}
                    ></textarea>
                    <label htmlFor="itemType">Item Type</label>
                    <input
                        type="text"
                        id="itemType"
                        placeholder="Item Type"
                        value={itemType}
                        onChange={(e) => setItemType(e.target.value)}
                    />
                    <button type="submit">Add Item</button>
                </form>
            </div>
        </div>
    );
}

export default AddItem;
