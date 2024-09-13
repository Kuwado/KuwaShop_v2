import { forwardRef } from 'react';
import classNames from 'classnames/bind';
import PropTypes from 'prop-types';

import styles from './IconButton.module.scss';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';

const cx = classNames.bind(styles);

const IconButton = forwardRef(
    ({ icon, content = '', onClick, classname, small, large, active, number = '50' }, ref) => {
        const classes = cx('medium', {
            [classname]: classname,
            small,
            large,
            active,
        });

        return (
            <Tippy delay={[0, 50]} content={content} placement="bottom">
                <button className={classes} ref={ref} onClick={onClick}>
                    {icon}
                    {number && <div className={cx('number')}>{number}</div>}
                </button>
            </Tippy>
        );
    },
);

IconButton.propTypes = {
    icon: PropTypes.node.isRequired,
    content: PropTypes.string,
    onClick: PropTypes.func,
    classname: PropTypes.string,
    small: PropTypes.bool,
    large: PropTypes.bool,
    active: PropTypes.bool,
    number: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

export default IconButton;
