import "./CartItem.css"
import {Link} from "react-router-dom";

const CartItem = ({ item }) => {
    const { id, name, quantity, price } = item;
    return (
        <tr className={"cart-item"} key={id}>
            <td>
                <Link to={`/cart/${id}`}>
                    <img src={`https://res.cloudinary.com/dsx9cbedb/image/upload/c_thumb,w_80/${id}.png`}/>
                </Link>
            </td>
            <td>
                <Link to={`/cart/${id}`}>
                    {name}
                </Link>
            </td>
            <td>{quantity}</td>
            <td>${price}</td>
            <td>${price * quantity}</td>
        </tr>
    );
}

export default CartItem;
