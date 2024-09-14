import classNames from 'classnames/bind';
import PropTypes from 'prop-types';

import styles from './Search.module.scss';
import SearchItem from './SearchItem';

const cx = classNames.bind(styles);

const SearchBox = ({ accounts = [], products = [], orders = [], classname }) => {
    const classes = cx('wrapper', {
        [classname]: classname,
    });

    return (
        <div className={classes}>
            {accounts.length > 0 && (
                <div className={cx('accounts')}>
                    <h4>Tài khoản</h4>
                    <div className={cx('accounts-list')}>
                        {accounts.map((item) => (
                            <SearchItem key={`acc-${item.id}`} avatar={item.avatar} name={item.full_name} />
                        ))}
                    </div>
                </div>
            )}
            {products.length > 0 && (
                <div className={cx('products')}>
                    <h4>Sản phẩm</h4>
                    <div className={cx('products-list')}>
                        {products.map((item) => (
                            <SearchItem key={`prd-${item.id}`} avatar={item.avatar} name={item.product_name} />
                        ))}
                    </div>
                </div>
            )}
            {orders.length > 0 && (
                <div className={cx('orders')}>
                    <h4>Đơn hàng</h4>
                    <div className={cx('orders-list')}>
                        {orders.map((item) => (
                            <SearchItem key={`acc-${item.id}`} name={item.order_id} />
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
};

SearchBox.propTypes = {
    accounts: PropTypes.array,
    products: PropTypes.array,
    orders: PropTypes.array,
    classname: PropTypes.string,
};

export default SearchBox;
