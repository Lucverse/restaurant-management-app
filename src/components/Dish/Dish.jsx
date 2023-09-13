import "./Dish.css";
import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchItems } from "../../actions/itemsActions";
import { Link, useParams } from "react-router-dom";
import Loading from "../Loading/Loading";
import ItemCard from "../Items/ItemCard";

function Dish() {
    const dispatch = useDispatch();
    const items = useSelector(state => state.item.items);
    const isLoading = useSelector(state => state.item.loading);
    const userType = "customer";
    console.log(userType);

    useEffect(() => {
        dispatch(fetchItems());
    }, []);

    function getRandomItems(array, count) {
        const shuffledArray = array.slice();
        for (let i = shuffledArray.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
        }
        return shuffledArray.slice(0, count);
    }

    if (isLoading) {
        return <Loading />;
    }
    const randomItems = getRandomItems(items, 4);
    return (
        <div className="dish-main">
            <h1>Dish</h1>
            <div className="dish-grid-container">
                {randomItems.map(item => (
                    <Link to={`/restaurants/${item.restaurantName}`}><ItemCard
                        key={item._id}
                        id={item._id}
                        name={item.itemName}
                        imageUrl={item.itemImage}
                        price={item.itemPrice}
                        description={item.itemDescription}
                        type={item.type}
                        userType={userType}
                    /></Link>
                ))}

            </div>
        </div>
    );
}

export default Dish;
