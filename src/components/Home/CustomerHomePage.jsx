import { API_URL } from "../../types/types";
import { useEffect, useState } from "react";
import RestaurantCard from "../RestaurantCard/RestaurantCard";
import "./CustomerHomePage.css";

function CustomerHomePage() {
    const [restaurant, setRestaurant] = useState([]);
    const [totalrest, setTotalRest] = useState(0);
    const [filteredRestaurants, setFilteredRestaurants] = useState([]);
    const [restaurantType, setRestaurantType] = useState("All");
    useEffect(() => {
        const fetchRestaurantsData = async () => {
            try {
                const response = await fetch(`${API_URL}/restaurants`);
                const data = await response.json();
                setRestaurant(data);
                setTotalRest(data.length);
                setFilteredRestaurants(data);
            } catch (error) {
                console.error("Error fetching restaurants data: ", error);
            }
        };
        fetchRestaurantsData();
    }, []);

    const handleTypeChange = (event) => {
        const selectedType = event.target.value;
        setRestaurantType(selectedType);
        if (selectedType === "All") {
            setFilteredRestaurants(restaurant);
        } else {
            const filteredData = restaurant.filter(
                (item) => item.type === selectedType
            );
            setFilteredRestaurants(filteredData);
        }
    };

    return (
        <div className="customer-home-main">
            <h1 className="rest-near-you">Restaurants Near You ({totalrest})</h1>
            <div className="filter-container">
                <label htmlFor="type">Filter by Type:</label>
                <select id="type" name="type" value={restaurantType} onChange={handleTypeChange}>
                    <option value="All">All</option>
                    <option value="vegetarian">Vegetarian</option>
                    <option value="non-vegetarian">Non-Vegetarian</option>
                </select>
            </div>
            <div className="restaurant-main-div">
                {filteredRestaurants.map((item) => (
                    <RestaurantCard
                        key={item.id}
                        restaurantName={item.restaurantName}
                        rating={item.rating}
                        type={item.type}
                        openhours={item.openhours}
                        id={item._id}
                    />
                ))}
            </div>
        </div>
    );
}

export default CustomerHomePage;