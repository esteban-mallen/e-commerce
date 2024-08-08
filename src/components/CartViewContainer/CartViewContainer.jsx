import './CartViewContainer.css'
import {useContext} from "react";
import {cartContext} from "../../context/contexts.js";
import CartView from "../CartView/CartView.jsx";

const CartViewContainer = (props) => {
    const { cart, totalQuantity, getTotalPrice, emptyCart } = useContext(cartContext);

    return (
        <>
            <div className={"cart-view-container"}>
                <CartView cart={cart} totalQuantity={totalQuantity} getTotalPrice={getTotalPrice} emptyCart={emptyCart} />
            </div>
        </>
    )
}

export default CartViewContainer;
