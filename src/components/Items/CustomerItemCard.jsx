import React, { useState } from "react";
import "./CustomerItemCard.css";

const CustomerItemCard = ({ name, imageUrl, description, price }) => {
    return (
        <div className="item-card">
            <img className="item-card-image"
                src={imageUrl}
                alt={name}
            ></img>

            <div className="item-card-content">
                <p className="item-card-name">{name}</p>
                <p className="item-card-description">{description}</p>
                <p className="item-card-price">₹{price}</p>
                <button className="item-card-button">
                    Add To Cart
                </button>
            </div>
        </div >
    );
};

export default CustomerItemCard;
