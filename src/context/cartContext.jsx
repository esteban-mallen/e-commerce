import { cartContext } from "./contexts.js";
import {useState} from "react";
import item from "../components/Item/Item.jsx";

const CartContextProvider = ({ children }) => {
    const [totalQuantity, setTotalQuantity] = useState(0);
    const [cart, setCart] = useState(new Map());
    const addItemToCart = (item) => {
        const { id: itemId, quantity } = item;
        const itemInCart = cart.get(itemId) || { quantity: 0 };
        const { quantity: itemQuantityInCart } = itemInCart;
        item.quantity = itemQuantityInCart + quantity;

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

    const removeItem = (itemId) => {
        const { quantity } = cart.get(itemId);
        cart.delete(itemId);
        setTotalQuantity(totalQuantity - quantity);
    }

    const setItemQuantity = (item, quantity) => {
        const { currentQuantity } = cart.get(item.id) || { quantity: 0 };
        item.quantity = quantity;
        cart.set(item.id, item)
        setTotalQuantity(totalQuantity - currentQuantity + quantity);
    }

    const getCartTotal = () => {
        let cartTotal = 0;
        Array.from(cart.values()).forEach((item) => {
            cartTotal += item.quantity * item.price;
        });
        return cartTotal;
    }

    return(
        <cartContext.Provider value={{ cart, totalQuantity, addItemToCart, getTotalPrice, emptyCart, removeItem, setItemQuantity, getCartTotal }}>
            {children}
        </cartContext.Provider>
    )
}

export default CartContextProvider;
