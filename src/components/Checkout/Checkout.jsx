import "./Checkout.css"
import Button from "../Button/Button.jsx";
import {useContext, useState} from "react";
import {createOrder} from "../../services/orders.js";
import {cartContext} from "../../context/contexts.js";
import TextInput from "../TextInput/TextInput.jsx";
import LoadingSpinner from "../LoadingSpinner/LoadingSpinner.jsx";
import {useNavigate} from "react-router-dom";

const Checkout = (props) => {
    const navigate = useNavigate();
    const { cart, emptyCart, getCartTotal } = useContext(cartContext);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [address, setAddress] = useState("");

    const handleSubmit = (e) => {
        setIsSubmitting(true);
        e.preventDefault();
        const order = {
            name,
            email,
            address,
            cart: [...cart.entries()].map(([itemId, item]) => item),
            status: 'pending'
        }
        createOrder(order)
            .then((id) => {
                emptyCart();
                setIsSubmitting(false);
                navigate("/order", { state: { orderId: id } });
            });
    };

    return (
        <>
            <div className="checkout">
                <h2>Your total is ${getCartTotal()}</h2>
                <h3>Enter your contact information below:</h3>
                <form className="checkout-form" onSubmit={handleSubmit}>
                    <TextInput label={"Name"} onChange={(e) => setName(e.target.value)}/>
                    <TextInput label={"Email"} onChange={(e) => setEmail(e.target.value)} type="email"/>
                    <TextInput label={"Address"} onChange={(e) => setAddress(e.target.value)}/>
                    {isSubmitting ? <LoadingSpinner/> : <Button type="submit">Finish checkout</Button>}
                </form>
            </div>
        </>
    )
}

export default Checkout;
