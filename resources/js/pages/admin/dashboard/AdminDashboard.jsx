import React from 'react';
import config from '../../../config';
import classNames from 'classnames/bind';
import styles from './AdminDashboard.module.scss';
import Button from '../../../components/button/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleArrowLeft } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);

function AdminDashboard() {
    return (
        <div className={cx('wrapper')}>
            <Button
                to={config.routes.admin.productDetail}
                leftIcon={<FontAwesomeIcon icon={faCircleArrowLeft} />}
                primaryBorder
                small
                curved
                shadow
            >
                Detail
            </Button>
            <Button to={config.routes.admin.productList} outline large curved>
                List
            </Button>
        </div>
    );
}

export default AdminDashboard;
