import axios from 'axios';

export const createUser = async (user) => {
    try {
        const response = await axios.post('/api/user/create', user);
        if (response.status === 201) {
            return response.data;
        } else {
            return { ...response.data, error: true };
        }
    } catch (error) {
        console.log('Lỗi tạo tài khoản: ', error);
    }
};

export const createProfile = async (profile) => {
    try {
        const response = await axios.post('/api/profile/create', profile);
        if (response.status === 201) {
            return response.data;
        }
    } catch (error) {
        console.log('Lỗi tạo thông tin: ', error);
    }
};

export const getProfile = async (userId) => {
    try {
        const response = await axios.get('/api/profile', { params: { user_id: userId } });
        if (response.status === 200) {
            return response.data;
        }
    } catch (error) {
        console.log('Lỗi lấy thông tin: ', error);
    }
};