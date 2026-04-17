import "./OrderView.css"
import {Link, Navigate, useLocation} from "react-router-dom";
import {useEffect, useState} from "react";
import {getOrder} from "../../services/orders.js";
import LoadingSpinner from "../LoadingSpinner/LoadingSpinner.jsx";

const OrderView = () => {
    const location = useLocation();
    const orderId = location.state?.orderId;
    const [order, setOrder] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [isError, setIsError] = useState(false);

    useEffect(() => {
        if (!orderId) return;
        setIsLoading(true);
        getOrder(orderId)
            .then((fetched) => setOrder(fetched))
            .catch(() => setIsError(true))
            .finally(() => setIsLoading(false));
    }, [orderId]);

    if (!orderId) return <Navigate to="/" replace/>
    if (isLoading) return <div><LoadingSpinner/></div>
    if (isError || !order) {
        return (
            <div className="order">
                <h3>We couldn&apos;t load your order</h3>
                <p>There was a problem retrieving your order details. Please contact support with your order ID: {orderId}</p>
                <Link to="/">Back to shop</Link>
            </div>
        )
    }

    return (
        <div className="order">
            <h3>Thank you for shopping with us!</h3>
            <p><span>Order ID:</span> {order.firebaseId}</p>
            <p><span>Name:</span> {order.name}</p>
            <p><span>Email:</span> {order.email}</p>
            <p><span>Address:</span> {order.address}</p>
            <p><span>Status:</span> {order.status}</p>
            <Link to="/" className="order-back-link">Continue shopping</Link>
        </div>
    )
}

export default OrderView;
