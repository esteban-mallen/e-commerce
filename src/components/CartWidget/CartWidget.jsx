import {useState} from "react";
import cartLogo from "../../assets/cart.svg";
import './CartWidget.css'

const CartWidget = () => {
    const [itemCount, setItemCount] = useState(0);
    return (
        <>
            <div className={"cart"}>
                <img src={cartLogo} className={"cartLogo"}/>
                <span className="cartBadge">{itemCount}</span>
            </div>
        </>
    )
}

export default CartWidget
