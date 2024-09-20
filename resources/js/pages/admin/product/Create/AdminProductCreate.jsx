import classNames from 'classnames/bind';

import styles from './AdminProductCreate.module.scss';
import Content from '~/common/Content/Content';
import config from '~/config';
import { Input } from '~/components/Input';
import { useCallback, useState } from 'react';
import Price from './Price';
import Categories from './Categories';
import TextArea from '~/components/TextArea';

const cx = classNames.bind(styles);

const BREADCRUMB = [
    {
        title: 'Trang chủ',
        link: config.routes.admin.dashboard,
    },
    {
        title: 'Sản phẩm - Thêm mới',
        link: config.routes.admin.productCreate,
    },
];

const AdminProductCreate = () => {
    const [saleType, setSaleType] = useState('');
    const [product, setProduct] = useState({
        name: '',
        sku: '',
        category_id: '',
        original_price: '',
        price: '',
        intro: '',
        detail: '',
        preserve: '',
        sale: '',
    });

    const setField = useCallback((field, value) => {
        setProduct((prev) => ({ ...prev, [field]: value }));
    }, []);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setProduct({
            ...product,
            [name]: value,
        });
    };

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

    const setSale = useCallback((value) => {
        setField('sale', value);
    }, []);

    const setIntro = useCallback((value) => {
        setField('intro', value);
    }, []);

    const setDetail = useCallback((value) => {
        setField('detail', value);
    }, []);

    const setPreserve = useCallback(() => {
        setField('preserve', value);
    }, []);

    console.log(product);

    return (
        <Content breadcrumb={BREADCRUMB}>
            <form className={cx('product-create')}>
                <div className={cx('left')}>
                    <div className={cx('name-and-category')}>
                        <Input name="name" label="Tên sản phẩm" required value={product.name} onChange={setName} />
                        <Categories categoryId={product.category_id} onClick={setCategoryId} />
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
                </div>
                <div className={cx('right')}>
                    <TextArea text={product.intro} onChange={setIntro} />
                    <TextArea text={product.detail} onChange={setDetail} />
                    <TextArea text={product.preserve} onChange={setPreserve} />
                </div>
            </form>
        </Content>
    );
};

export default AdminProductCreate;
