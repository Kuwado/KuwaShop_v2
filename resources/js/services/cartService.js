import axios from 'axios';

export const addToCart = async (cart) => {
    try {
        const token = localStorage.getItem('token');
        const response = await axios.post('/api/cart/add', cart, {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        });

        if (response.status === 200) {
            return response.data;
        }
    } catch (error) {
        console.log('Lối thêm vào giỏ hàng', error);
    }
};

export const udpateCart = async (cartId, quantity) => {
    try {
        const token = localStorage.getItem('token');
        const response = await axios.post(
            `/api/cart/update/${cartId}`,
            { quantity: quantity },
            {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            },
        );

        if (response.status === 200) {
            return response.data;
        }
    } catch (error) {
        console.log('Lối cập nhật giỏ hàng', error);
    }
};

export const deleteCart = async (cartId) => {
    try {
        const token = localStorage.getItem('token');
        const response = await axios.delete(`/api/cart/delete/${cartId}`, {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        });

        if (response.status === 200) {
            return response.data;
        }
    } catch (error) {
        console.log('Lối lấy giỏ hàng', error);
    }
};

export const getCarts = async (userId) => {
    try {
        const token = localStorage.getItem('token');
        const response = await axios.get('/api/carts', {
            params: {
                user_id: userId,
            },
            headers: {
                Authorization: `Bearer ${token}`,
            },
        });

        if (response.status === 200) {
            return response.data;
        }
    } catch (error) {
        console.log('Lối lấy giỏ hàng', error);
    }
};
