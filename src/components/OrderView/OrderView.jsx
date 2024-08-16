import "./OrderView.css"
import {useLocation} from "react-router-dom";
import {useEffect, useState} from "react";
import {getOrder} from "../../services/orders.js";
import LoadingSpinner from "../LoadingSpinner/LoadingSpinner.jsx";

const OrderView = () => {
    const location = useLocation();
    const [order, setOrder] = useState({});

    useEffect(() => {
        getOrder(location.state.orderId)
            .then((order) => {
                setOrder(order);
            })
    }, [location.state.orderId]);

    if (!order.firebaseId) return (<div><LoadingSpinner/></div>)

    return (
        <>
            <div className="order">
                <h3>Thank you for shopping with us!</h3>
                <p>Order ID: {order.firebaseId}</p>
                <p>Name: {order.name}</p>
                <p>Email: {order.email}</p>
                <p>Address: {order.address}</p>
                <p>Status: {order.status}</p>
            </div>
        </>
    )
}

export default OrderView;
