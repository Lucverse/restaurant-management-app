import { API_URL } from "../../types/types";
import { useEffect, useState } from "react";
import RestaurantCard from "../RestaurantCard/RestaurantCard";
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
            <h1>Restaurants For You</h1>
            {restaurant.map((item) => (
                <RestaurantCard
                    key={item.id}
                    restaurantName={item.restaurantName} />
            ))}
        </div>
    )
}
export default CustomerHomePage;