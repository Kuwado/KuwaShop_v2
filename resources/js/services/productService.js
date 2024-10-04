import { UploadImage } from './uploadService';

export const createProduct = async (productData, saleTypeData) => {
    try {
        if (saleTypeData === 'percent') {
            productData.sale = `${productData.sale}%`;
        }

        if (productData.image !== '') {
            const imageResponse = await UploadImage(productData.image);
            productData.avatar = imageResponse.image;
        }

        const response = await axios.post('/api/product/create', productData);
        if (response.status === 201) {
            return response.data;
        } else {
            throw new Error(`Lỗi thêm sản phẩm: ${response.statusText}`);
        }
    } catch (error) {
        console.log('Lỗi tạo sản phẩm: ', error);
    }
};
