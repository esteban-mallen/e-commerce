import "./OrderView.css"
import {useLocation, Link} from "react-router-dom";
import {useEffect, useState} from "react";
import {getOrder} from "../../services/orders.js";
import LoadingSpinner from "../LoadingSpinner/LoadingSpinner.jsx";

const OrderView = () => {
    const location = useLocation();
    const orderId = location.state?.orderId;
    const [order, setOrder] = useState({});
    const [isError, setIsError] = useState(false);

    useEffect(() => {
        if (!orderId) return;
        getOrder(orderId)
            .then((order) => setOrder(order))
            .catch(() => setIsError(true));
    }, [orderId]);

    if (!orderId) {
        return (
            <div className="order">
                <h3>No order found.</h3>
                <Link to="/">Return to shop</Link>
            </div>
        );
    }

    if (isError) {
        return (
            <div className="order">
                <h3>Could not load order.</h3>
                <p>Order ID: {orderId}</p>
                <Link to="/">Return to shop</Link>
            </div>
        );
    }

    if (!order.firebaseId) return (<div><LoadingSpinner/></div>)

    return (
        <div className="order">
            <h3>Thank you for shopping with us!</h3>
            <p>Order ID: {order.firebaseId}</p>
            <p>Name: {order.name}</p>
            <p>Email: {order.email}</p>
            <p>Address: {order.address}</p>
            <p>Status: {order.status}</p>
            <Link to="/">Continue shopping</Link>
        </div>
    )
}

export default OrderView;
