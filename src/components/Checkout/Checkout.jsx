import "./Checkout.css"
import Button from "../Button/Button.jsx";
import {useContext, useState} from "react";
import {createOrder} from "../../services/orders.js";
import {cartContext} from "../../context/contexts.js";
import TextInput from "../TextInput/TextInput.jsx";
import LoadingSpinner from "../LoadingSpinner/LoadingSpinner.jsx";
import {useNavigate, Link} from "react-router-dom";

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const Checkout = () => {
    const navigate = useNavigate();
    const { cart, emptyCart, getCartTotal } = useContext(cartContext);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitError, setSubmitError] = useState("");
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [address, setAddress] = useState("");
    const [errors, setErrors] = useState({});

    if (cart.size === 0) {
        return (
            <div className="checkout">
                <h2>Your cart is empty.</h2>
                <Link to="/">Go back to the shop</Link>
            </div>
        );
    }

    const validate = () => {
        const newErrors = {};
        if (!name.trim()) newErrors.name = "Name is required.";
        if (!email.trim()) {
            newErrors.email = "Email is required.";
        } else if (!emailRegex.test(email)) {
            newErrors.email = "Please enter a valid email address.";
        }
        if (!address.trim()) newErrors.address = "Address is required.";
        return newErrors;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setSubmitError("");
        const validationErrors = validate();
        if (Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors);
            return;
        }
        setErrors({});
        setIsSubmitting(true);
        const order = {
            name: name.trim(),
            email: email.trim(),
            address: address.trim(),
            cart: [...cart.values()],
            status: 'pending'
        };
        createOrder(order)
            .then((id) => {
                emptyCart();
                navigate("/order", { state: { orderId: id } });
            })
            .catch(() => {
                setIsSubmitting(false);
                setSubmitError("Failed to place order. Please try again.");
            });
    };

    return (
        <div className="checkout">
            <h2>Your total is ${getCartTotal()}</h2>
            <h3>Enter your contact information below:</h3>
            <form className="checkout-form" onSubmit={handleSubmit} noValidate>
                <TextInput
                    label="Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    error={errors.name}
                />
                <TextInput
                    label="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    type="email"
                    error={errors.email}
                />
                <TextInput
                    label="Address"
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                    error={errors.address}
                />
                {submitError && <p className="checkout-error">{submitError}</p>}
                {isSubmitting ? <LoadingSpinner/> : <Button type="submit">Finish checkout</Button>}
            </form>
        </div>
    );
};

export default Checkout;
