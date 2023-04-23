import { FaShoppingCart } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { addToCart } from "../../actions/cartActions";
function AddToCart({ name, imageUrl, description, price, type }) {
    const dispatch = useDispatch();

    const handleAddToCart = () => {
        const item = {
            name,
            imageUrl,
            description,
            price,
            type,
        };
        dispatch(addToCart(item));
    };
    return (
        <button className="card-buttons" onClick={handleAddToCart}>
            <FaShoppingCart /> Add To Cart
        </button>
    )
}
export default AddToCart;