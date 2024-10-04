import { useCallback, useState } from 'react';

const useProduct = () => {
    const [product, setProduct] = useState({
        name: '',
        category_id: '',
        original_price: '',
        price: '',
        image: '',
        avatar: '',
        intro: '',
        detail: '',
        preserve: '',
        sale: '',
    });
    const [categoryName, setCategoryName] = useState('');
    const [saleType, setSaleType] = useState('not');

    const resetProduct = useCallback(() => {
        setProduct({
            name: '',
            category_id: '',
            original_price: '',
            price: '',
            image: '',
            avatar: '',
            intro: '',
            detail: '',
            preserve: '',
            sale: '',
        });
        setSaleType('not');
        setCategoryName('');
    });

    return { product, setProduct, categoryName, setCategoryName, saleType, setSaleType, resetProduct };
};

export default useProduct;
