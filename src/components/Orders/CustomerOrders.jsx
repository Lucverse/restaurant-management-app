import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { API_URL } from '../../types/types';
import OrderCard from './OrderCard';
import Loading from '../Loading/Loading';
import DoughnutChart from './DoughnutChart.jsx';

function CustomerOrders() {
    const [orders, setOrders] = useState([]);
    const [items, setItems] = useState([]);
    const userId = useSelector((state) => state.auth.user._id);

    const [toshow, setToShow] = useState(false);
    const [chartOption, setChartOption] = useState('quantity');

    useEffect(() => {
        const fetchOrders = async () => {
            try {
                const response = await fetch(`${API_URL}/orders?userId=${userId}`);
                const data = await response.json();
                setOrders(data);
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
                setItems(data);
            } catch (error) {
                console.log(error);
            }
        };
        fetchItems();
    }, []);

    if (!items.length) {
        return <Loading />;
    }

    const itemsData = orders.map((order) => {
        const orderItems = order.itemArray.map((item) => {
            const itemData = items.find((i) => i._id === item.id);
            return {
                id: item.id,
                name: itemData.itemName,
                image: itemData.itemImage,
                price: itemData.itemPrice,
                restaurantName: itemData.restaurantName,
                quantity: item.quantity,
            };
        });
        return {
            orderId: order._id,
            items: orderItems,
            createdAt: order.createdAt,
        };
    });
    return (
        <div className='orders-main-div'>
            <h1>Your Orders</h1>
            <div className='order-dropdown-menu'>
                <select value={chartOption} onChange={(e) => setChartOption(e.target.value)}>
                    <option value='quantity'>By Quantity</option>
                    <option value='price'>By Price</option>
                </select>
            </div>
            <button className='float-toggle-switch' onClick={() => setToShow(!toshow)}>
                {toshow ? 'Show Orders' : 'Show Chart'}
            </button>
            {itemsData.map((order) => (
                <div key={order.orderId} className='order-card-div'>
                    <p className='ordered-time-date'>
                        <span>On:</span> {new Date(order.createdAt).toLocaleDateString()}
                        <span> At :</span> {new Date(order.createdAt).toLocaleTimeString()}
                    </p>
                    {toshow ? (
                        <DoughnutChart
                            data={{
                                labels: order.items.map((item) => item.name),
                                datasets: [
                                    {
                                        label: chartOption === 'quantity' ? 'Order Items Quantity' : 'Order Items Total Price',
                                        data: order.items.map((item) => chartOption === 'quantity' ? item.quantity : item.price * item.quantity),
                                        backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
                                    },
                                ],
                            }}
                            title={`Order ID: ${order.orderId}`}
                        />
                    ) : (
                        <>
                            {order.items.map((item) => (
                                <OrderCard item={item} quantity={item.quantity} key={item.id} />
                            ))}
                        </>
                    )}
                </div>
            ))}
        </div>
    );
}


export default CustomerOrders;