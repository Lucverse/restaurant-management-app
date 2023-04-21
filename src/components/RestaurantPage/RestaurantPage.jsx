import { useEffect, useState } from "react";
import { API_URL } from "../../types/types";
import { useParams } from "react-router-dom";
import CustomerItemCard from "../Items/CustomerItemCard";
function RestaurantPage() {

    const { restaurantName } = useParams();
    const [items, setItems] = useState([]);
    useEffect(() => {
        const fetchItemsData = async () => {
            try {
                const response = await fetch(`${API_URL}/items`);
                const data = await response.json();
                const filteredData = data.filter(item => item.restaurantName === restaurantName);
                setItems(filteredData);
            } catch (error) {
                console.error("Error fetching items data: ", error);
            }
        };
        fetchItemsData();
    }, [restaurantName]);
    return (
        <div>
            <h1>Restaurant Page</h1>
            <div className="item-card-container">
                {items.map((item) => (
                    <CustomerItemCard
                        key={item.id}
                        name={item.itemName}
                        imageUrl={item.itemImage}
                        price={item.itemPrice}
                        description={item.itemDescription}
                    />
                ))}
            </div>
        </div>
    )
}
export default RestaurantPage;