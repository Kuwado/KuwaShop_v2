import classNames from 'classnames/bind';
import PropTypes from 'prop-types';

import styles from 'prop-types';
import Breadcrumb from '~/components/Breadcrumb';

const cx = classNames.bind(styles);

const Content = ({ children, breadcrumb }) => {
    return (
        <>
            <Breadcrumb items={breadcrumb} />
            <div className={cx('content')}>{children}</div>
        </>
    );
};

Content.propTypes = {
    children: PropTypes.node.isRequired,
    breadcrumb: PropTypes.array,
};

export default Content;
