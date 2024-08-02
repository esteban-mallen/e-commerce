import {useContext} from "react";
import {cartContext} from "../../context/contexts.js";
import cartLogo from "../../assets/cart.svg";
import './CartWidget.css'

const CartWidget = () => {
    const { totalQuantity } = useContext(cartContext);

    return (
        <>
            <div className={"cart"}>
                <img src={cartLogo} className={"cartLogo"}/>
                <span className="cartBadge">{totalQuantity}</span>
            </div>
        </>
    )
}

export default CartWidget
