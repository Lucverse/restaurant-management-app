import { useSelector } from 'react-redux';
import CartItem from './CartItem';
import './cartpage.css'
function CartPage() {
    const cartItems = useSelector(state => state.cart.cartItems);
    return (
        <div className='cart-main-page'>
            <h1>Cart</h1>
            <p>Total Items: {cartItems.length}</p>
            <div className='cart-item-container'>
                {cartItems.map(item => (
                    <CartItem key={item.id} item={item.item} itemquantity={item.quantity} />
                ))}
            </div>
        </div>
    );
}


export default CartPage;
