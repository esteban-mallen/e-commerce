import { cartContext } from "./contexts.js";
import { useState } from "react";

const CartContextProvider = ({ children }) => {
    const [cart, setCart] = useState(new Map());

    const totalQuantity = Array.from(cart.values()).reduce(
        (sum, item) => sum + item.quantity,
        0
    );

    const addItemToCart = (item) => {
        const { id: itemId, quantity } = item;
        const existing = cart.get(itemId);
        const newQuantity = (existing?.quantity || 0) + quantity;
        const next = new Map(cart);
        next.set(itemId, { ...item, quantity: newQuantity });
        setCart(next);
    };

    const getCartTotal = () =>
        Array.from(cart.values()).reduce(
            (total, item) => total + item.price * item.quantity,
            0
        );

    const emptyCart = () => {
        setCart(new Map());
    };

    const removeItem = (itemId) => {
        const next = new Map(cart);
        next.delete(itemId);
        setCart(next);
    };

    const setItemQuantity = (item, quantity) => {
        const next = new Map(cart);
        next.set(item.id, { ...item, quantity });
        setCart(next);
    };

    return (
        <cartContext.Provider
            value={{
                cart,
                totalQuantity,
                addItemToCart,
                emptyCart,
                removeItem,
                setItemQuantity,
                getCartTotal,
            }}
        >
            {children}
        </cartContext.Provider>
    );
};

export default CartContextProvider;
