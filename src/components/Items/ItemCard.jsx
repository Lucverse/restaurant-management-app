import React from "react";
import "./ItemCard.css";
import EditItem from "./EditItem";
import AddToCart from "./AddToCard";
const ItemCard = ({ name, imageUrl, description, price, type, userType }) => {
    const isVegetarian = type === "vegetarian";
    const isStaff = userType ==="staff";
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
                {
                    isStaff ? <EditItem/> : <AddToCart/>
                }
            </div>
        </div>
    );
};

export default ItemCard;
