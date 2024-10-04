import { UploadImages } from './uploadService';

export const createVariant = async (variant, productId) => {
    try {
        if (variant.images.length > 0) {
            const imagesResponse = await UploadImages(variant.images);
            variant.image_paths = imagesResponse.image_paths;
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
