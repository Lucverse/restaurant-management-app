import { Link } from 'react-router-dom';
import './restaurantcard.css';

function RestaurantCard({ restaurantName }) {
    return (
        <div className="restaurant-card">
            <Link to={`/restaurants/${restaurantName}`} state={{ name: restaurantName }}>
                <h1>{restaurantName}</h1>
            </Link>

        </div>
    );
}

export default RestaurantCard;
