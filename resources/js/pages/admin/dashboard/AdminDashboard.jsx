import React from 'react';
import config from '~/config';
import classNames from 'classnames/bind';
import styles from './AdminDashboard.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleArrowLeft } from '@fortawesome/free-solid-svg-icons';
import Button from '~/components/Button';

const cx = classNames.bind(styles);

function AdminDashboard() {
    return (
        <div className={cx('wrapper')}>
            <div>AdminDashboard</div>
        </div>
    );
}

export default AdminDashboard;
