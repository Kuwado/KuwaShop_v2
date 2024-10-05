import axios from 'axios';
import { UploadImages } from './uploadService';

export const createVariant = async (variant, productId) => {
    try {
        if (variant.image_files.length > 0) {
            const imagesResponse = await UploadImages(variant.image_files);
            variant.images = imagesResponse.image_paths;
        }

        const response = await axios.post(`/api/product/variant/create/${productId}`, variant);
        if (response.status === 201) {
            return response.data;
        } else {
            throw new Error(`Lỗi thêm các biến thể: ${response.statusText}`);
        }
    } catch (error) {
        console.log('Lỗi tạo các biến thể: ', error);
    }
};

export const getVariants = async (productId) => {
    try {
        const response = await axios.get('/api/variants', { params: { product_id: productId } });
        if (response.status === 200) {
            return response.data;
        } else {
            throw new Error(`Lỗi tìm các biến thể: ${response.statusText}`);
        }
    } catch (error) {
        console.log('Lỗi tìm các biến thể: ', error);
    }
};
