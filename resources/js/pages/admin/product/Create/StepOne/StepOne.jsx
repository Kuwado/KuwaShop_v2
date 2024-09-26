import classNames from 'classnames/bind';

import styles from './StepOne.module.scss';
import { Input, UploadImage } from '~/components/Input';
import { useCallback, useEffect } from 'react';
import Price from './Price';
import Categories from './Categories';
import Informations from './Informations';
import { Button } from '~/components/Button';

const cx = classNames.bind(styles);

const StepOne = ({ product, categoryName, saleType, setProduct, setCategoryName, setSaleType }) => {
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
                    <Input name="name" label="Tên sản phẩm" required value={product.name} onChange={setName} />
                    <Categories
                        categoryId={product.category_id}
                        categoryName={categoryName}
                        setCategoryId={setCategoryId}
                        setCategoryName={setCategoryName}
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
                />

                <UploadImage id="product-image" image={product.image} setImage={setImage} />
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
