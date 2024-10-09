import axios from 'axios';
import { UploadImage } from './uploadService';

export const createProduct = async (product) => {
    try {
        if (product.sale === '') product.sale_type = 'not';

        if (product.sale_type === 'percent') {
            product.sale = `${product.sale}%`;
        } else if (product.sale_type === 'value') {
            product.sale = `${product.sale}đ`;
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

export const updateProduct = async (product) => {
    try {
        if (product.image_file && product.image_file !== '') {
            console.log('upload image');
            const imageResponse = await UploadImage(product.image_file);
            product.avatar = imageResponse.image;
        }

        const response = await axios.put(`/api/product/update/${product.id}`, product);
        if (response.status === 200) {
            return response.data;
        } else {
            throw new Error(`Lỗi cập nhật sản phẩm: ${response.statusText}`);
        }
    } catch (error) {
        console.log('Lỗi cập nhật sản phẩm: ', error);
    }
};

export const deleteProduct = async (id) => {
    try {
        await axios.delete(`/api/product/delete/${id}`);
    } catch (error) {
        console.log('Lỗi xóa sản phẩm: ', error);
    }
};
