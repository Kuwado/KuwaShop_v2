import classNames from 'classnames/bind';

import styles from './AdminCustomers.module.scss';

const cx = classNames.bind(styles);

const AdminCustomers = () => {
    return (
        <div className={cx('wrapper')}>
            <div>AdminCustomers</div>
        </div>
    );
};

export default AdminCustomers;
