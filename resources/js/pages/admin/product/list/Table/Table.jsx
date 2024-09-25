import classNames from 'classnames/bind';

import styles from './Table.module.scss';

const cx = classNames.bind(styles);

const Table = ({ products }) => {
    return (
        <div className={cx('product-table')}>
            <div className={cx('head')}>
                <div className={cx('id')}>STT</div>
                <div className={cx('avatar')}>Ảnh đại diện</div>
                <div className={cx('name')}>Tên sản phẩm</div>
                <div className={cx('price')}>Giá sản phẩm</div>
                <div className={cx('sold-quantity')}>Đã bán</div>
                <div className={cx('view')}>Chi tiết</div>
                <div className={cx('delete')}>Xóa</div>
            </div>
            {products.length > 0 &&
                products.map((product, index) => (
                    <div className={cx('row')} key={index}>
                        <div className={cx('id')}>{index + 1}</div>
                        <div className={cx('avatar')}></div>
                        <div className={cx('name')}></div>
                        <div className={cx('price')}></div>
                        <div className={cx('sold-quantity')}></div>
                        <div className={cx('view')}></div>
                        <div className={cx('delete')}></div>
                    </div>
                ))}
        </div>
    );
};

export default Table;
