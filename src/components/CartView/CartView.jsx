import "./CartView.css"
import CartItem from "../CartItem/CartItem.jsx";
import ButtonLink from "../ButtonLink/ButtonLink.jsx";
import Button from "../Button/Button.jsx";

const CartView = ({ cart, totalQuantity, getTotalPrice, emptyCart }) => {
    return(
        <>
            <table className={"cart-view"}>
                <tbody>
                <tr>
                    <th colSpan={2}>Item description</th>
                    <th>Quantity</th>
                    <th>Unit price</th>
                    <th>Total</th>
                </tr>
                {Array.from(cart).map(([itemId, item]) => (<CartItem key={itemId} item={item}/>))}
                <tr className={"total-row"} >
                    <td colSpan={4}>Total:</td>
                    <td>${getTotalPrice()}</td>
                </tr>
                </tbody>
            </table>
            <div className={"cart-controller"}>
                <Button onClick={emptyCart} disabled={!Array.from(cart).length}>Empty cart</Button>
                <ButtonLink to={"/checkout"}>Checkout</ButtonLink>
            </div>
        </>
    )
}

export default CartView;
