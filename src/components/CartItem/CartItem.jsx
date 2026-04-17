import "./CartItem.css"
import {Link} from "react-router-dom";
import {useContext} from "react";
import {cartContext} from "../../context/contexts.js";
import Button from "../Button/Button.jsx";
import ItemCounter from "../ItemCounter/ItemCounter.jsx";

const CartItem = ({ item }) => {
    const { removeItem, setItemQuantity } = useContext(cartContext);
    const { id, name, quantity, price } = item;
    return (
        <tr className={"cart-item"} key={id}>
            <td>
                <Link to={`/item/${id}`}>
                    <img src={`https://res.cloudinary.com/dsx9cbedb/image/upload/c_thumb,w_80/${id}.png`} alt={name}/>
                </Link>
            </td>
            <td>
                <Link to={`/item/${id}`}>
                    {name}
                </Link>
            </td>
            <td>{quantity}</td>
            <td>${price}</td>
            <td>${price * quantity}</td>
            <td className="remove-item-td"><Button onClick={() => removeItem(item.id)}>X</Button></td>
        </tr>
    );
}

export default CartItem;
