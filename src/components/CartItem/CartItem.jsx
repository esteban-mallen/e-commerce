import "./CartItem.css"
import {Link} from "react-router-dom";
import {useContext} from "react";
import {cartContext} from "../../context/contexts.js";
import Button from "../Button/Button.jsx";

const CartItem = ({ item }) => {
    const { removeItem } = useContext(cartContext);
    const { id, firebaseId, name, quantity, price } = item;
    const detailPath = firebaseId ? `/item/${firebaseId}` : `/`;
    return (
        <tr className={"cart-item"} key={id}>
            <td data-label="Image">
                <Link to={detailPath} aria-label={`View ${name}`}>
                    <img
                        src={`https://res.cloudinary.com/dsx9cbedb/image/upload/c_thumb,w_80/${id}.png`}
                        alt={name}
                        loading="lazy"
                    />
                </Link>
            </td>
            <td data-label="Item">
                <Link to={detailPath}>{name}</Link>
            </td>
            <td data-label="Quantity">{quantity}</td>
            <td data-label="Unit price">${price.toFixed(2)}</td>
            <td data-label="Total">${(price * quantity).toFixed(2)}</td>
            <td className="remove-item-td">
                <Button
                    onClick={() => removeItem(item.id)}
                    title={`Remove ${name} from cart`}
                >
                    <span aria-hidden="true">X</span>
                    <span className="sr-only">Remove {name}</span>
                </Button>
            </td>
        </tr>
    );
}

export default CartItem;
