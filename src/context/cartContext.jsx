import { cartContext } from "./contexts.js";
import {useState} from "react";

const CartContextProvider = ({ children }) => {
    const [totalQuantity, setTotalQuantity] = useState(0);
    const [cart, setCart] = useState(new Map());
    const addItemToCart = (itemId, quantity) => {
        const itemQuantityInCart = cart.get(itemId) || 0;
        setCart(cart.set(itemId, itemQuantityInCart + quantity));
        setTotalQuantity(totalQuantity + quantity);
    }

    return(
        <cartContext.Provider value={{ cart, totalQuantity, addItemToCart }}>
            {children}
        </cartContext.Provider>
    )
}

export default CartContextProvider;
