import { useSelector} from "react-redux";
function RestaurantOrders(){    
    const items = useSelector(state => state.item.items);
    console.log(items);
    return(
        <div>
            <h1>Restaurant Orders</h1>
        </div>
    )
}
export default RestaurantOrders;