import axios from 'axios';

export const createProduct = async (product) => {
    try {
        const formData = new FormData();
        Object.entries(product).forEach(([key, value]) => {
            if (value !== null && value !== undefined) {
                formData.append(key, value);
            }
        });

        console.log('FormData:', Array.from(formData.entries()));

        const response = await axios.post('/api/product/create', formData, {
            headers: {
                'Content-Type': 'multipart/form-data',
            },
        });
        if (response.status === 201) {
            return response.data;
        } else {
            throw new Error(`Lỗi thêm sản phẩm: ${response.statusText}`);
        }
    } catch (error) {
        console.log('Lỗi tạo sản phẩm: ', error);
    }
};

export const updateProduct = async (product) => {
    try {
        const formData = new FormData();
        Object.entries(product).forEach(([key, value]) => {
            if (value !== null && value !== undefined) {
                formData.append(key, value);
            }
        });

        const response = await axios.post(`/api/product/update/${product.id}`, formData, {
            headers: {
                'Content-Type': 'multipart/form-data',
            },
        });

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
        const response = await axios.delete(`/api/product/delete/${id}`);
        return response.data;
    } catch (error) {
        console.log('Lỗi xóa sản phẩm: ', error);
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

export const getProducts = async (type, page) => {
    try {
        const response = await axios.get('/api/products', { params: { type: type, page: page } });
        if (response.status === 200) {
            return response.data;
        } else {
            throw new Error(`Lỗi lấy ds sản phẩm: ${response.statusText}`);
        }
    } catch (error) {
        console.log('Lỗi lấy ds sản phẩm: ', error);
    }
};
