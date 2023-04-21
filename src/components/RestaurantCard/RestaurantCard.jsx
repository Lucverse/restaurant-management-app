import { Link } from 'react-router-dom';
import './restaurantcard.css';

function RestaurantCard({ restaurantName, rating, type , openhours}) {
    return (
        <div className="restaurant-card">
            <Link to={`/restaurants/${restaurantName}`} state={{ name: restaurantName }}>
                <h1>{restaurantName}</h1>
                <div className='restaurant-card-info'>
                    <p>Rating: {rating}</p>
                    <p>Type: {type}</p>
                    <p>Open hours: {openhours}</p>
                </div>
            </Link>

        </div>
    );
}

export default RestaurantCard;
