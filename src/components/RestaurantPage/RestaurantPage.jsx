import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchItems } from "../../actions/itemsActions";
import { Link, useParams } from "react-router-dom";
import CustomerItemCard from "../Items/CustomerItemCard";
import { FaShoppingCart } from "react-icons/fa";
import Loading from "../Loading/Loading";

function RestaurantPage() {
    const { restaurantName } = useParams();
    const dispatch = useDispatch();
    const items = useSelector(state => state.item.items);
    const isLoading = useSelector(state => state.item.loading);
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 4;
    const restNameStyle = {
        textAlign: "center",
        fontWeight: 'normal',
        fontStyle: 'oblique',
        textDecoration: 'dotted underline',
    }

    useEffect(() => {
        dispatch(fetchItems(restaurantName));
    }, [dispatch, restaurantName]);

    const filteredItems = items.filter(item => item.restaurantName === restaurantName);
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = filteredItems.slice(indexOfFirstItem, indexOfLastItem);
    const paginate = (pageNumber) => setCurrentPage(pageNumber);

    if (isLoading) {
        return <Loading />;
    }

    return (
        <div>
            <h1 style={restNameStyle}>{restaurantName}</h1>
            <div className="item-card-container">
                {currentItems.map((item) => (
                    <CustomerItemCard
                        name={item.itemName}
                        imageUrl={item.itemImage}
                        price={item.itemPrice}
                        description={item.itemDescription}
                        type={item.type}
                    />
                ))}
            </div>
            <div className="pagination">
                <button onClick={() => paginate(currentPage - 1)} disabled={currentPage === 1}>Previous</button>
                <span>Page {currentPage} of {Math.ceil(filteredItems.length / itemsPerPage)}</span>
                <button onClick={() => paginate(currentPage + 1)} disabled={currentPage === Math.ceil(filteredItems.length / itemsPerPage)}>Next</button>
            </div>
            <Link to='/cart' style={{ color: 'white' }}>
                <div className="cart-button-div">
                    <button className="cart-button">
                        <FaShoppingCart />
                    </button>
                </div>
            </Link>
        </div>
    )
}

export default RestaurantPage;
