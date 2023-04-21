import React from "react";
import "./ItemCard.css";
import { FaPencilAlt } from "react-icons/fa";

const ItemCard = ({ name, imageUrl, description, price }) => {
    return (
        <div className="item-card">
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
