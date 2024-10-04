import axios from 'axios';

export const UploadImage = async (image) => {
    const formData = new FormData();
    formData.append('image', image);

    try {
        const response = await axios.post('/api/upload/image', formData, {
            headers: { 'content-Type': 'multipart/form-data' },
        });

        if (response.status === 201) {
            return response.data;
        } else {
            throw new Error(`Lỗi thêm ảnh đại diện: ${response.statusText}`);
        }
    } catch (error) {
        console.log('Lỗi thêm ảnh đại diện: ', error);
    }
};

export const UploadImages = async (images) => {
    const formData = new FormData();
    images.forEach((image) => formData.append('images[]', image));

    try {
        const response = await axios.post('/api/upload/images', formData, {
            headers: { 'content-Type': 'multipart/form-data' },
        });
        if (response.status === 201) {
            return response.data;
        } else {
            throw new Error(`Lỗi thêm ảnh: ${response.statusText}`);
        }
    } catch (error) {
        console.log('Lỗi thêm ảnh: ', error);
    }
};
