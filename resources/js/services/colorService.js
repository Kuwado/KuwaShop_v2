import axios from 'axios';

export const getColors = async () => {
    try {
        const response = await axios.get('/api/colors');
        if (response.status === 200) {
            return response.data;
        } else {
            throw new Error(`Lỗi khi lấy danh sách màu: ${response.statusText}`);
        }
    } catch (error) {
        console.log('Không thể lấy được danh sách màu');
    }
};

export const getColor = async (id) => {
    try {
        const response = await axios.get('/api/color', { params: id });
        if (response.status === 200) {
            return response.data;
        } else {
            throw new Error(`Lỗi khi lấy màu: ${response.statusText}`);
        }
    } catch (error) {
        console.log('Không thể lấy được màu');
    }
};
