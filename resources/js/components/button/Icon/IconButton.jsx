import { forwardRef, useState } from 'react';
import classNames from 'classnames/bind';
import PropTypes from 'prop-types';

import styles from './IconButton.module.scss';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';

const cx = classNames.bind(styles);

const IconButton = forwardRef(
    ({ icon, children, content = '', type = 'button', onClick, classname, small, large, active, number }, ref) => {
        const classes = cx('medium', {
            [classname]: classname,
            small,
            large,
            active,
        });

        return (
            <div>
                <Tippy delay={[0, 50]} content={content} placement="bottom">
                    <button className={classes} ref={ref} type={type} onClick={onClick}>
                        {icon}
                        {number && <div className={cx('number')}>{number}</div>}
                        {children}
                    </button>
                </Tippy>
            </div>
        );
    },
);

IconButton.propTypes = {
    icon: PropTypes.node.isRequired,
    children: PropTypes.node,
    content: PropTypes.string.isRequired,
    type: PropTypes.string,
    onClick: PropTypes.func,
    classname: PropTypes.string,
    small: PropTypes.bool,
    large: PropTypes.bool,
    active: PropTypes.bool,
    number: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    click: PropTypes.bool,
};

export default IconButton;
