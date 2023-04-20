import React, { useState } from "react";
import "./ItemCard.css";

const ItemCard = ({ name, imageUrl, description, price, onEditClick }) => {
    const [isEditing, setIsEditing] = useState(false);
    const [editedName, setEditedName] = useState(name);
    const [editedDescription, setEditedDescription] = useState(description);
    const [editedPrice, setEditedPrice] = useState(price);
    const [editedImage, setEditedImage] = useState(imageUrl);
    // console.log(name, imageUrl, description, price);
    const handleEditClick = () => {
        setIsEditing(true);
    };
    const handleCancel = () => {
        setIsEditing(false);
    };
    const handleSaveClick = () => {
        onEditClick(editedName, editedDescription, editedPrice);
        setIsEditing(false);
    };

    return (
        <div className="item-card">
            <img className="item-card-image"
                src={imageUrl}
                alt={name}
            ></img>
            <div className="item-card-content">
                {isEditing ? (
                    <>
                        <input
                            type="text"
                            value={editedName}
                            onChange={(e) => setEditedName(e.target.value)}
                            className="item-card-input"
                        />
                        <input
                            type="text"
                            value={editedDescription}
                            onChange={(e) => setEditedDescription(e.target.value)}
                            className="item-card-input"
                        />
                        <input
                            type="number"
                            value={editedPrice}
                            onChange={(e) => setEditedPrice(e.target.value)}
                            className="item-card-input"
                        />
                        <input
                            type="text"
                            value={editedImage}
                            onChange={(e) => setEditedImage(e.target.value)}
                            className="item-card-input"
                        />
                    </>
                ) : (
                    <>
                        <p className="item-card-name">{name}</p>
                        <p className="item-card-description">{description}</p>
                        <p className="item-card-price">${price}</p>
                    </>
                )}
                {isEditing ? (
                    <div className="save-cancel-div">
                        <button
                            className="item-card-button"
                            onClick={handleSaveClick}
                        >
                            Save
                        </button>
                        <button
                            className="item-card-button"
                            onClick={handleCancel}
                        >
                            Cancel
                        </button>
                    </div>
                ) : (
                    <button
                        className="item-card-button"
                        onClick={handleEditClick}
                    >
                        Edit
                    </button>
                )}
            </div>
        </div>
    );
};

export default ItemCard;
