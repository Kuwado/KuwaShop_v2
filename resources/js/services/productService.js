import { UploadImage } from './uploadService';

export const createProduct = async (product, saleType) => {
    try {
        if (saleType === 'percent') {
            product.sale = `${product.sale}%`;
        }

        if (product.image_file !== '') {
            const imageResponse = await UploadImage(product.image_file);
            product.avatar = imageResponse.image;
        }

        const response = await axios.post('/api/product/create', product);
        if (response.status === 201) {
            return response.data;
        } else {
            throw new Error(`Lỗi thêm sản phẩm: ${response.statusText}`);
        }
    } catch (error) {
        console.log('Lỗi tạo sản phẩm: ', error);
    }
};

export const getProduct = async (id) => {
    try {
        const response = await axios.get('/api/product', { params: { id: id } });
        if (response.status === 200) {
            return response.data;
        } else {
            throw new Error(`Lỗi lấy sản phẩm: ${response.statusText}`);
        }
    } catch (error) {
        console.log('Lỗi lấy sản phẩm: ', error);
    }
};
