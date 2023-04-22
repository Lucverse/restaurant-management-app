import React from "react";
import "./ItemCard.css";
import { FaPencilAlt } from "react-icons/fa";

const ItemCard = ({ name, imageUrl, description, price, type }) => {
    const isVegetarian = type === "vegetarian";
    return (
        <div className="item-card">
            {isVegetarian ? (
                <img src="https://upload.wikimedia.org/wikipedia/commons/7/78/Indian-vegetarian-mark.svg" className="item-card-type" alt="veg"/>
            ) : (
                <img src="https://foodsafetyhelpline.com/wp-content/uploads/2013/05/non-veg-300x259.jpg" className="item-card-type" alt="non-veg"/>
            )}
            <img
                className="item-card-image"
                src={imageUrl}
                alt={name}
            ></img>
            <div className="item-card-content">
                <p className="item-card-name">{name}</p>
                <p className="item-card-description">{description}</p>
                <p className="item-card-price">₹{price}</p>
                <div className="item-card-edit-container">
                    <button className="item-card-edit-button">
                        <FaPencilAlt />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ItemCard;
