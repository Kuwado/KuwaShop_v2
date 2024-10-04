import { useCallback } from 'react';
import classNames from 'classnames/bind';

import styles from './StepOne.module.scss';
import { Input } from '~/components/Input';
import Price from './Price';
import Informations from './Informations';
import { UploadImage } from '~/constants/UploadImages';
import Categories from '~/constants/Categories';

const cx = classNames.bind(styles);

const StepOne = ({ product, saleType, errors, setProduct, setSaleType, setErrors }) => {
    const setField = useCallback((field, value) => {
        setProduct((prev) => ({ ...prev, [field]: value }));
    }, []);

    const setName = useCallback((e) => {
        const { name, value } = e.target;
        setField(name, value);
    }, []);

    const setCategoryId = useCallback((value) => {
        setField('category_id', value);
    }, []);

    const setOriginalPrice = useCallback((value) => {
        setField('original_price', value);
    }, []);

    const setPrice = useCallback((value) => {
        setField('price', value);
    }, []);

    const setImage = useCallback((value) => {
        if (product.avatar) {
            setField('avatar', '');
        }
        setField('image', value);
    }, []);

    const setSale = useCallback((value) => {
        setField('sale', value);
    }, []);

    const setIntro = useCallback((value) => {
        setField('intro', value);
    }, []);

    const setDetail = useCallback((value) => {
        setField('detail', value);
    }, []);

    const setPreserve = useCallback((value) => {
        setField('preserve', value);
    }, []);

    return (
        <div className={cx('step-one')}>
            <div className={cx('left')}>
                <div className={cx('name-and-category')}>
                    <Input
                        name="name"
                        label="Tên sản phẩm"
                        required
                        value={product.name}
                        onChange={setName}
                        error={errors.productName}
                        clearError={() => setErrors((prev) => ({ ...prev, productName: '' }))}
                    />
                    <Categories
                        categoryId={product.category_id}
                        setCategoryId={setCategoryId}
                        error={errors.productCategory}
                        clearError={() => setErrors((prev) => ({ ...prev, productCategory: '' }))}
                    />
                </div>

                <Price
                    original_price={product.original_price}
                    price={product.price}
                    sale={product.sale}
                    saleType={saleType}
                    setOriginalPrice={setOriginalPrice}
                    setPrice={setPrice}
                    setSale={setSale}
                    setSaleType={setSaleType}
                    error={errors.productPrice}
                    clearError={() => setErrors((prev) => ({ ...prev, productPrice: '' }))}
                />

                <UploadImage
                    id="product-image"
                    image={product.avatar ? product.avatar : product.image}
                    setImage={setImage}
                    showImage={!!product.avatar}
                />
            </div>
            <div className={cx('right')}>
                <Informations
                    intro={product.intro}
                    detail={product.detail}
                    preserve={product.preserve}
                    setIntro={setIntro}
                    setDetail={setDetail}
                    setPreserve={setPreserve}
                />
            </div>
        </div>
    );
};

export default StepOne;
