import { useEffect, useState } from "react";
import { API_URL } from "../../types/types";
import { useParams } from "react-router-dom";
import CustomerItemCard from "../Items/CustomerItemCard";

function RestaurantPage() {
    const { restaurantName } = useParams();
    const [items, setItems] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [itemsPerPage, setItemsPerPage] = useState(2);

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

    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = items.slice(indexOfFirstItem, indexOfLastItem);
    const paginate = (pageNumber) => setCurrentPage(pageNumber);

    return (
        <div>
            <h1 style={{ textAlign: "center", fontStyle: 'oblique', textDecoration: 'wavy underline' }}>{restaurantName}</h1>
            <div className="item-card-container">
                {currentItems.map((item) => (
                    <CustomerItemCard
                        key={item.id}
                        name={item.itemName}
                        imageUrl={item.itemImage}
                        price={item.itemPrice}
                        description={item.itemDescription}
                    />
                ))}
            </div>
            <div className="pagination">
                <button onClick={() => paginate(currentPage - 1)} disabled={currentPage === 1}>Previous</button>
                <span>Page {currentPage} of {Math.ceil(items.length / itemsPerPage)}</span>
                <button onClick={() => paginate(currentPage + 1)} disabled={currentPage === Math.ceil(items.length / itemsPerPage)}>Next</button>
            </div>
        </div>
    )
}

export default RestaurantPage;
