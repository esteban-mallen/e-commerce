import { cartContext } from "./contexts.js";
import {useState} from "react";

const CartContextProvider = ({ children }) => {
    const [totalQuantity, setTotalQuantity] = useState(0);
    const [cart, setCart] = useState(new Map());
    const addItemToCart = (item) => {
        const { id: itemId, quantity } = item;
        const itemInCart = cart.get(itemId) || { quantity: 0 };
        const { quantity: itemQuantityInCart } = itemInCart;
        item.quantity = itemQuantityInCart + quantity;

        console.log(itemId, totalQuantity, quantity, item);
        setCart(cart.set(itemId, item));
        setTotalQuantity(totalQuantity + quantity);
    }

    const getTotalPrice = () => {
        let total = 0;

        Array.from(cart.values()).forEach((item) => {
            total += item.price * item.quantity;
        })

        return total;
    }

    const emptyCart = () => {
        setCart(new Map());
        setTotalQuantity(0);
    }

    return(
        <cartContext.Provider value={{ cart, totalQuantity, addItemToCart, getTotalPrice, emptyCart }}>
            {children}
        </cartContext.Provider>
    )
}

export default CartContextProvider;
