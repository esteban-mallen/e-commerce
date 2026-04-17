import {useContext} from "react";
import {cartContext} from "../../context/contexts.js";
import cartLogo from "../../assets/cart.svg";
import './CartWidget.css'
import {Link} from "react-router-dom";

const CartWidget = () => {
    const { totalQuantity } = useContext(cartContext);

    return (
        <Link to="/cart" aria-label={`Shopping cart, ${totalQuantity} item${totalQuantity !== 1 ? 's' : ''}`}>
            <div className="cart">
                <img src={cartLogo} className="cartLogo" alt="Shopping cart"/>
                {totalQuantity > 0 && (
                    <span className="cartBadge" aria-hidden="true">{totalQuantity}</span>
                )}
            </div>
        </Link>
    );
};

export default CartWidget;
