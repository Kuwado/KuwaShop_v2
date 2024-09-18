import classNames from 'classnames/bind';

import styles from './AdminProductCreate.module.scss';
import Content from '~/common/Content/Content';
import config from '~/config';
import { Input } from '~/components/Input';
import { RadioBox } from '~/components/Radio';
import { Fragment, useState } from 'react';
import Price from './Price';

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
    const [product, setProduct] = useState({
        name: '',
        sku: '',
        type: '',
        original_price: '',
        price: '',
        intro: '',
        detail: '',
        preserve: '',
        sale: '',
    });

    const resetSale = () => {
        setProduct({
            ...product,
            sale: '',
        });
    };

    const setPrice = (value) => {
        setProduct({
            ...product,
            price: value,
        });
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setProduct({
            ...product,
            [name]: value,
        });
    };

    const DISCOUNT = [
        {
            id: 1,
            title: 'Không giảm',
            content: <Fragment></Fragment>,
        },
        {
            id: 2,
            title: 'Giảm theo phần trăm',
            content: (
                <Input
                    name="sale"
                    label="Phần trăm giảm (%)"
                    type="number"
                    value={product.sale}
                    onChange={handleInputChange}
                />
            ),
        },
        // {
        //     id: 3,
        //     title: 'Giảm theo giá trị',
        //     content: (
        //         <Input
        //             name="sale"
        //             label="Giá trị giảm (đ)"
        //             type="number"
        //             value={product.sale}
        //             onChange={handleInputChange}
        //         />
        //     ),
        // },
    ];

    console.log(product);

    return (
        <Content breadcrumb={BREADCRUMB}>
            <form className={cx('product-create')}>
                <div className={cx('left')}>
                    <Input
                        name="name"
                        label="Tên sản phẩm"
                        required
                        value={product.name}
                        onChange={handleInputChange}
                    />

                    <Price
                        sale={product.sale}
                        original_price={product.original_price}
                        price={product.price}
                        onChange={handleInputChange}
                        resetSale={resetSale}
                        setPrice={setPrice}
                    />
                </div>
                <div className={cx('right')}></div>
            </form>
        </Content>
    );
};

export default AdminProductCreate;
