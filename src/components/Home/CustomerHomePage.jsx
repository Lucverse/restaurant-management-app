import { API_URL } from "../../types/types";
import { useEffect, useState } from "react";
import RestaurantCard from "../RestaurantCard/RestaurantCard";
import "./customherhomepage.css"
function CustomerHomePage() {
    const [restaurant, setRestaurant] = useState([]);
    useEffect(() => {
        const fetchItemsData = async () => {
            try {
                const response = await fetch(`${API_URL}/restaurants`);
                const data = await response.json();
                setRestaurant(data);
            } catch (error) {
                console.error("Error fetching items data: ", error);
            }
        };
        fetchItemsData();
    }, []);
    return (
        <div>
            <h1>Restaurants Near You</h1>
            <div className="restaurant-main-div">
                {restaurant.map((item) => (
                    <RestaurantCard
                        key={item.id}
                        restaurantName={item.restaurantName}
                        rating={item.rating}
                        id={item._id} />
                ))}
            </div>
        </div>
    )
}
export default CustomerHomePage;