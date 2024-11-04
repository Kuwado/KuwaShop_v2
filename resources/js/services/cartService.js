import axios from 'axios';

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
