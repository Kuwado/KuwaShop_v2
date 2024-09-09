import React from 'react';
import { Link } from 'react-router-dom';
import config from '../../../config';
import classNames from 'classnames/bind';
import styles from './AdminDashboard.module.scss';

const cx = classNames.bind(styles);

function AdminDashboard() {
    return (
        <div className={cx('wrapper')}>
            <Link to={config.routes.admin.productDetail}>Detail</Link>
            <Link to={config.routes.admin.productList}>List</Link>
        </div>
    );
}

export default AdminDashboard;
