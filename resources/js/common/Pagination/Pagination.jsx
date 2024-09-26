import classNames from 'classnames/bind';

import styles from './Pagination.module.scss';

const cx = classNames.bind(styles);

const Pagination = ({ current, total }) => {
    return <div className={cx('pagination')}>Pagination</div>;
};

export default Pagination;
