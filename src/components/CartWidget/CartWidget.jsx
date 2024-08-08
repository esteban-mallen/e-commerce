import {useContext} from "react";
import {cartContext} from "../../context/contexts.js";
import cartLogo from "../../assets/cart.svg";
import './CartWidget.css'
import {Link} from "react-router-dom";

const CartWidget = () => {
    const { totalQuantity } = useContext(cartContext);

    return (
        <>
            <Link to="/cart">
                <div className={"cart"}>
                    <img src={cartLogo} className={"cartLogo"}/>
                    <span className="cartBadge">{totalQuantity}</span>
                </div>
            </Link>
        </>
    )
}

export default CartWidget
