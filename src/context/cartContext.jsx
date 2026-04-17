import { cartContext } from "./contexts.js";
import {useState} from "react";

const CartContextProvider = ({ children }) => {
    const [totalQuantity, setTotalQuantity] = useState(0);
    const [cart, setCart] = useState(new Map());

    const addItemToCart = (item) => {
        const { id: itemId, quantity } = item;
        const itemInCart = cart.get(itemId) || { quantity: 0 };
        const newItem = { ...item, quantity: itemInCart.quantity + quantity };
        const newCart = new Map(cart);
        newCart.set(itemId, newItem);
        setCart(newCart);
        setTotalQuantity(totalQuantity + quantity);
    }

    const getTotalPrice = () => {
        let total = 0;
        Array.from(cart.values()).forEach((item) => {
            total += item.price * item.quantity;
        });
        return total;
    }

    const emptyCart = () => {
        setCart(new Map());
        setTotalQuantity(0);
    }

    const removeItem = (itemId) => {
        const { quantity } = cart.get(itemId);
        const newCart = new Map(cart);
        newCart.delete(itemId);
        setCart(newCart);
        setTotalQuantity(totalQuantity - quantity);
    }

    const setItemQuantity = (item, quantity) => {
        const existing = cart.get(item.id) || { quantity: 0 };
        const newCart = new Map(cart);
        newCart.set(item.id, { ...item, quantity });
        setCart(newCart);
        setTotalQuantity(totalQuantity - existing.quantity + quantity);
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
