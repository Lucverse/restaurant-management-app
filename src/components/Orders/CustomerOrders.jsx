import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { API_URL } from '../../types/types';
import OrderCard from './OrderCard';
import Loading from '../Loading/Loading';

function CustomerOrders() {
    const [orders, setOrders] = useState([]);
    const [items, setItems] = useState([]);
    const userId = useSelector((state) => state.auth.user._id);

    useEffect(() => {
        const fetchOrders = async () => {
            try {
                const response = await fetch(`${API_URL}/orders`);
                const data = await response.json();
                const userOrders = data.filter((order) => order.userId === userId);
                setOrders(userOrders);
            } catch (error) {
                console.log(error);
            }
        };
        fetchOrders();
    }, [userId]);

    useEffect(() => {
        const fetchItems = async () => {
            try {
                const response = await fetch(`${API_URL}/items`);
                const data = await response.json();
                const orderedItemIds = orders.flatMap((order) =>
                    order.itemArray.map((item) => item.id)
                );
                const orderedItems = data.filter((item) =>
                    orderedItemIds.includes(item._id)
                );
                setItems(orderedItems);
            } catch (error) {
                console.log(error);
            }
        };
        fetchItems();
    }, [orders]);

    if (!items.length) {
        return <Loading />;
    }

    return (
        <div className='orders-main-div'>
            <h1>Your Orders</h1>
            {orders.map((order) => (
                <div key={order._id} className='order-card-div'>
                    <p className='ordered-time-date'><span> Ordered On:</span> {new Date(order.createdAt).toLocaleDateString()}<span> At :</span> {new Date(order.createdAt).toLocaleTimeString()}</p>

                    {order.itemArray.map((item) => {
                        const itemData = items.find((i) => i._id === item.id);
                        return (
                            <OrderCard item={itemData} quantity={item.quantity} key={item.id} />
                        );
                    })}
                </div>
            ))}
        </div>
    );
}

export default CustomerOrders;

