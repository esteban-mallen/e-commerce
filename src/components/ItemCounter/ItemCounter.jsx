import Button from "../Button/Button.jsx";
import {useContext, useState} from "react";
import "./ItemCounter.css"
import {cartContext} from "../../context/contexts.js";

const ItemCounter = ({ item }) => {
    const { id: itemId, stock: itemStock, price: itemPrice } = item;
    const { cart, addItemToCart } = useContext(cartContext);
    const itemsInCart = cart.get(itemId) || 0;
    const inStock = itemStock > 0 && itemStock > itemsInCart;
    const [quantity, setQuantity] = useState(inStock ? 1 : 0);
    const handleAddToCart = () => {
        item.quantity = quantity;
        addItemToCart(item);
    }

    return (
        <>
            <div className="add-item">
                <span className={"item-counter"}>
                    <Button disabled={quantity <= 0} onClick={() => setQuantity(quantity-1)}>-</Button>
                    {quantity}
                    <Button disabled={quantity >= itemStock} onClick={() => setQuantity(quantity+1)}>+</Button>
                </span>
                <Button onClick={handleAddToCart} disabled={!inStock || quantity <= 0}>{inStock ? `Add to cart ($${quantity * itemPrice})` : 'Out of stock'}</Button>
            </div>
        </>
    )
}

export default ItemCounter
