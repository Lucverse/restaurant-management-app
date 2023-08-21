import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './card.css';
import backgroundImage from '../../media/restaurant-building.png';
import GetIcon from './getIcon.jsx';

function RestaurantCard({ restaurantName, rating, type, openhours, description }) {
    const [isHovered, setIsHovered] = useState(false);
    const icon = GetIcon(type);

    const handleTouchStart = () => {
        setIsHovered(true);
    };

    const handleTouchEnd = () => {
        setIsHovered(false);
    };

    return (
        <Link to={`/restaurants/${restaurantName}`}>
            <div
                className={`col ${isHovered ? 'hover' : ''}`}
                onTouchStart={handleTouchStart}
                onTouchEnd={handleTouchEnd}
            >
                <div className="container">
                    <div className="front" style={{ backgroundImage: `url(${backgroundImage})` }}>
                        <div className="inner">
                            {/* {icon} */}
                            <p>{restaurantName}</p>
                            <span>Rating: {rating}</span>
                        </div>
                    </div>
                    <div className="back">
                        <div className="inner">
                            <p>{description}</p>
                        </div>
                    </div>
                </div>
            </div>
        </Link>
    );
}

export default RestaurantCard;
