import {useContext} from "react";
import {cartContext} from "../../context/contexts.js";
import cartLogo from "../../assets/cart.svg";
import './CartWidget.css'
import {Link} from "react-router-dom";

const CartWidget = () => {
    const { totalQuantity } = useContext(cartContext);
    const label = totalQuantity === 1
        ? "View cart (1 item)"
        : `View cart (${totalQuantity} items)`;

    return (
        <Link to="/cart" className="cart-link" aria-label={label}>
            <div className={"cart"}>
                <img src={cartLogo} className={"cartLogo"} alt="" aria-hidden="true"/>
                {totalQuantity > 0 && (
                    <span className="cartBadge" aria-hidden="true">{totalQuantity}</span>
                )}
            </div>
        </Link>
    )
}

export default CartWidget
