import { useState, createContext } from "react";

export const CartContext = createContext();

const CartContextProvider = ({ children }) => {
    const [cart, setCart] = useState([]);

    const isInCart = (id) => {
        return cart.some(x => x.id === id);
    }

    const addItem = (item, quantity) => {
        if (isInCart(item.id)) {
            let position = cart.findIndex(x => x.id === item.id);
            cart[position].quantity += quantity;
            setCart([...cart]);
        } else {
            setCart([...cart, { ...item, quantity: quantity }])
        }
    }

    const removeItem = (id) => {
        const products = cart.filter(x => x.id !== id);
        setCart([...products]);
    }

    const clear = () => {
        setCart([]);
    }

    return (
        <CartContext.Provider value={{ cart, addItem, removeItem, clear }}>
            {children}
        </CartContext.Provider>
    )
}

export default CartContextProvider;