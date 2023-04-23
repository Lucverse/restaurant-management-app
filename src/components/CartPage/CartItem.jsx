import "./CartItem.css";
import React, { useState } from "react";
import { FaTrash } from 'react-icons/fa';
import { useDispatch } from "react-redux";
import { removeFromCart, updateCartItemQuantity } from "../../actions/cartActions";

const CartItem = ({ item, itemquantity }) => {
    const [quantity, setQuantity] = useState(itemquantity);
    const dispatch = useDispatch();

    const handleRemoveItem = () => {
        dispatch(removeFromCart(item));
    };

    const handleIncreaseQuantity = () => {
        setQuantity((prevQuantity) => prevQuantity + 1);
        dispatch(updateCartItemQuantity(item, quantity + 1));

    };

    const handleDecreaseQuantity = () => {
        setQuantity((prevQuantity) => prevQuantity - 1);
        dispatch(updateCartItemQuantity(item, quantity - 1));
    };

    return (
        <div className="item-card">
            <img src={item.imageUrl} alt={item.name} className="item-card-image" />
            <div className="cart-item-content">
                <h3 className="cart-item-name">{item.name}</h3>
                <p className="cart-item-description">{item.description}</p>
                <div className="cart-item-details">
                    <p className="cart-item-price">₹{item.price}</p>
                    <div className="cart-item-quantity">
                        <label>Quantity:</label>
                        <button onClick={handleDecreaseQuantity} disabled={quantity <= 1} className="quantity-button">
                            -
                        </button>
                        <p>{quantity}</p>
                        <button onClick={handleIncreaseQuantity} disabled={quantity >= 9} className="quantity-button">
                            +
                        </button>
                    </div>
                    <button className="cart-item-remove-button" onClick={handleRemoveItem}>
                        <FaTrash />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default CartItem;
