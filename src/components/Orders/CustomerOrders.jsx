import { useState, useEffect } from 'react';
import { API_URL } from '../../types/types';
import { useSelector } from 'react-redux';

function CustomerOrders() {
    const [orders, setOrders] = useState([]);
    const userId = useSelector(state => state.auth.user._id);
    useEffect(() => {
        const fetchOrders = async () => {
            try {
                const response = await fetch(`${API_URL}/orders`);
                const data = await response.json();
                const userOrders = data.filter(order => order.userId === userId);
                setOrders(userOrders);
            } catch (error) {
                console.log(error);
            }
        };
        fetchOrders();
    }, [userId]);
    

    return (
        <div>
            <h1>Customer Orders</h1>
            {orders.map(order => (
                <div key={order._id}>
                    <p>Order ID: {order._id}</p>
                    <p>Created At: {order.createdAt}</p>
                    <ul>
                        {order.itemArray.map(item => (
                            <li key={item.id}>
                                Item ID: {item.id}, Quantity: {item.quantity}
                                owner : {order.userId}
                            </li>
                        ))}
                    </ul>
                </div>
            ))}
        </div>
    );
}

export default CustomerOrders;
