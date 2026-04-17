import "./Checkout.css"
import Button from "../Button/Button.jsx";
import {useContext, useState} from "react";
import {createOrder} from "../../services/orders.js";
import {cartContext} from "../../context/contexts.js";
import TextInput from "../TextInput/TextInput.jsx";
import LoadingSpinner from "../LoadingSpinner/LoadingSpinner.jsx";
import {Navigate, useNavigate} from "react-router-dom";

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const validate = ({ name, email, address }) => {
    const errors = {};
    if (!name.trim()) errors.name = "Please enter your name";
    if (!email.trim()) errors.email = "Please enter your email";
    else if (!EMAIL_REGEX.test(email)) errors.email = "Please enter a valid email";
    if (!address.trim()) errors.address = "Please enter your shipping address";
    return errors;
};

const Checkout = () => {
    const navigate = useNavigate();
    const { cart, emptyCart, getCartTotal } = useContext(cartContext);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [address, setAddress] = useState("");
    const [errors, setErrors] = useState({});
    const [submitError, setSubmitError] = useState(null);

    if (cart.size === 0) return <Navigate to="/cart" replace/>

    const handleSubmit = (e) => {
        e.preventDefault();
        const validationErrors = validate({ name, email, address });
        setErrors(validationErrors);
        if (Object.keys(validationErrors).length > 0) return;

        setSubmitError(null);
        setIsSubmitting(true);
        const order = {
            name: name.trim(),
            email: email.trim(),
            address: address.trim(),
            cart: [...cart.values()],
            total: getCartTotal(),
            status: 'pending',
            createdAt: new Date().toISOString(),
        }
        createOrder(order)
            .then((id) => {
                emptyCart();
                navigate("/order", { state: { orderId: id } });
            })
            .catch(() => {
                setSubmitError("Something went wrong while placing your order. Please try again.");
                setIsSubmitting(false);
            });
    };

    return (
        <div className="checkout">
            <h2>Your total is ${getCartTotal().toFixed(2)}</h2>
            <h3>Enter your contact information below:</h3>
            <form className="checkout-form" onSubmit={handleSubmit} noValidate>
                <TextInput
                    label="Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                    autoComplete="name"
                    error={errors.name}
                />
                <TextInput
                    label="Email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    autoComplete="email"
                    error={errors.email}
                />
                <TextInput
                    label="Address"
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                    required
                    autoComplete="street-address"
                    error={errors.address}
                />
                {submitError && <p className="checkout-error" role="alert">{submitError}</p>}
                {isSubmitting ? <LoadingSpinner/> : <Button type="submit">Finish checkout</Button>}
            </form>
        </div>
    )
}

export default Checkout;
