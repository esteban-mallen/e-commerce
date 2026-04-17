import "./CartView.css"
import CartItem from "../CartItem/CartItem.jsx";
import ButtonLink from "../ButtonLink/ButtonLink.jsx";
import Button from "../Button/Button.jsx";

const CartView = ({ cart, getCartTotal, emptyCart }) => {
    const isEmpty = cart.size === 0;

    return (
        <>
            <table className={"cart-view"}>
                <thead>
                    <tr>
                        <th colSpan={2}>Item description</th>
                        <th>Quantity</th>
                        <th>Unit price</th>
                        <th>Total</th>
                        <th aria-label="Actions"></th>
                    </tr>
                </thead>
                <tbody>
                    {Array.from(cart).map(([itemId, item]) => (
                        <CartItem key={itemId} item={item} />
                    ))}
                    <tr className={"total-row"}>
                        <td colSpan={4}>Total:</td>
                        <td colSpan={2}>${getCartTotal().toFixed(2)}</td>
                    </tr>
                </tbody>
            </table>
            <div className={"cart-controller"}>
                <Button onClick={emptyCart} disabled={isEmpty}>Empty cart</Button>
                <ButtonLink to={"/checkout"}>Checkout</ButtonLink>
            </div>
        </>
    )
}

export default CartView;
