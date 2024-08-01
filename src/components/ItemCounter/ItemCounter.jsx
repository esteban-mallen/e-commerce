import Button from "../Button/Button.jsx";
import {useState} from "react";
import "./ItemCounter.css"

const ItemCounter = ({ itemStock, itemPrice }) => {
    const inStock = itemStock > 0;
    const [quantity, setQuantity] = useState(inStock ? 1 : 0);


    return (
        <>
            <div className="add-item">
                <span className={"item-counter"}>
                    <Button disabled={quantity <= 0} onClick={() => setQuantity(quantity-1)}>-</Button>
                    {quantity}
                    <Button disabled={quantity >= itemStock} onClick={() => setQuantity(quantity+1)}>+</Button>
                </span>
                <Button disabled={!inStock || quantity <= 0}>{inStock ? `Add to cart ($${quantity * itemPrice})` : 'Out of stock'}</Button>
            </div>
        </>
    )
}

export default ItemCounter
