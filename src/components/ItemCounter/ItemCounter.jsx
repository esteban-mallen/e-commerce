import Button from "../Button/Button.jsx";
import {useContext, useState} from "react";
import "./ItemCounter.css"
import {cartContext} from "../../context/contexts.js";

const ItemCounter = ({ item }) => {
    const { id: itemId, stock: itemStock, price: itemPrice } = item;
    const { cart, addItemToCart } = useContext(cartContext);
    const { quantity: itemsInCart = 0 } = cart.get(itemId) || {};
    const maxAvailable = Math.max(itemStock - itemsInCart, 0);
    const inStock = maxAvailable > 0;
    const [quantity, setQuantity] = useState(inStock ? 1 : 0);
    const [feedback, setFeedback] = useState(null);

    const handleAddToCart = () => {
        addItemToCart({ ...item, quantity });
        setFeedback(`Added ${quantity} to cart`);
        setQuantity(1);
    };

    return (
        <div className="add-item">
            {inStock && (
                <p className="stock-indicator">{maxAvailable} in stock</p>
            )}
            <span className={"item-counter"}>
                <Button
                    disabled={quantity <= 1}
                    onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                    ariaLabel="Decrease quantity"
                >
                    -
                </Button>
                <span className="item-counter-value" aria-live="polite">{quantity}</span>
                <Button
                    disabled={quantity >= maxAvailable}
                    onClick={() => setQuantity((q) => Math.min(maxAvailable, q + 1))}
                    ariaLabel="Increase quantity"
                >
                    +
                </Button>
            </span>
            <Button onClick={handleAddToCart} disabled={!inStock || quantity <= 0}>
                {inStock ? `Add to cart ($${(quantity * itemPrice).toFixed(2)})` : 'Out of stock'}
            </Button>
            {feedback && <span className="sr-only" role="status">{feedback}</span>}
        </div>
    )
}

export default ItemCounter
