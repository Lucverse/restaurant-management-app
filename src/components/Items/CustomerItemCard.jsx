import React from "react";
import "./CustomerItemCard.css";
import { useDispatch } from "react-redux";
import { addToCart } from "../../actions/cartActions";
import { FaShoppingCart } from "react-icons/fa";

const CustomerItemCard = ({ name, imageUrl, description, price, type }) => {
    const isVegetarian = type === "vegetarian";
    const dispatch = useDispatch();

    const handleAddToCart = () => {
        const item = {
            name,
            imageUrl,
            description,
            price,
            type,
        };
        dispatch(addToCart(item));
    };

    return (
        <div className="item-card">
            {isVegetarian ? (
                <img
                    src="https://upload.wikimedia.org/wikipedia/commons/7/78/Indian-vegetarian-mark.svg"
                    className="item-card-type"
                    alt="veg"
                />
            ) : (
                <img
                    src="https://foodsafetyhelpline.com/wp-content/uploads/2013/05/non-veg-300x259.jpg"
                    className="item-card-type"
                    alt="non-veg"
                />
            )}
            <img src={imageUrl} alt={name} className="card-item-image" />
            <div className="card-item-content">
                <h3 className="card-item-name">{name}</h3>
                <p className="card-item-description">{description}</p>
                <div className="card-item-details">
                    <p className="card-item-price">₹{price}</p>
                    <button className="card-item-button" onClick={handleAddToCart}>
                        <FaShoppingCart /> Add To Cart
                    </button>
                </div>
            </div>
        </div>
    );
};

export default CustomerItemCard;
