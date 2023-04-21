import './restaurantcard.css'
function RestaurantCard({restaurantName}){
    return(
        <div className="restaurant-card">
            <h1>{restaurantName}</h1>
        </div>
    )
}
export default RestaurantCard;