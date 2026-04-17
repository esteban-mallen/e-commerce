import './CartViewContainer.css'
import {useContext} from "react";
import {cartContext} from "../../context/contexts.js";
import CartView from "../CartView/CartView.jsx";
import {Link} from "react-router-dom";

const CartViewContainer = () => {
    const { cart, totalQuantity, getCartTotal, emptyCart } = useContext(cartContext);
    const hasItems = cart.size > 0;

    return (
        <div className={"cart-view-container"}>
            {hasItems ? (
                <CartView
                    cart={cart}
                    totalQuantity={totalQuantity}
                    getCartTotal={getCartTotal}
                    emptyCart={emptyCart}
                />
            ) : (
                <div className={"empty-cart"}>
                    <p>Your cart is empty.</p>
                    <Link to={"/"}>Go shop a little...</Link>
                </div>
            )}
        </div>
    )
}

export default CartViewContainer;
