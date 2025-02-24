import { createContext, useEffect, useState } from 'react';
import { useAuth } from '~/hooks/useAuth';
import { addToCart, deleteCart, getCarts, udpateCart } from '~/services/cartService';

const CartContext = createContext();

const CartProvider = ({ children }) => {
    const { userId } = useAuth();
    const [cartData, setCartData] = useState({});
    const [cartItem, setCartItem] = useState({
        variant_id: '',
        size: '',
        quantity: '',
        user_id: '',
    });

    const fetchCarts = async () => {
        const response = await getCarts(userId);
        setCartData(response.data);
    };

    useEffect(() => {
        if (userId) {
            fetchCarts();
        } else {
            setCartData({});
        }
    }, [userId]);

    const handleAddToCart = async (variantId, size, quantity) => {
        const cartItem = {
            variant_id: variantId,
            size: size,
            quantity: quantity,
            user_id: userId,
        };
        await addToCart(cartItem);
        await fetchCarts();
    };

    const handleUpdateCart = async (cartId, quantity) => {
        await udpateCart(cartId, quantity);
        await fetchCarts();
    };

    const handleDeleteCart = async (cartId) => {
        await deleteCart(cartId);
        await fetchCarts();
    };

    return (
        <CartContext.Provider
            value={{ cartData, cartItem, setCartItem, handleAddToCart, handleUpdateCart, handleDeleteCart }}
        >
            {children}
        </CartContext.Provider>
    );
};

export { CartContext, CartProvider };
