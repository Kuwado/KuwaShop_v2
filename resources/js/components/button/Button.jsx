import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';

import styles from './Button.module.scss';

const cx = classNames.bind(styles);

const Button = ({
    to,
    href,
    // css type, defult = text
    primary = false,
    secondary = false,
    primaryBorder = false,
    secondaryBorder = false,
    outline = false,
    shadow = false,
    disabled = false,
    // border type, default = cheo canh
    curved = false,
    // size, defult = medium
    small = false,
    large = false,
    // icon
    leftIcon,
    rightIcon,
    // others
    children,
    classname,
    onClick,
    ...passProps
}) => {
    let Comp = 'button';
    const props = {
        onClick,
        ...passProps,
    };

    if (disabled) {
        delete props.onClick;
        Object.keys(props).forEach((key) => {
            if (key.startsWith('on') && typeof props[key] === 'function') {
                delete props[key];
            }
        });
    }

    if (to) {
        props.to = to;
        Comp = Link;
    } else if (href) {
        props.href = href;
        Comp = 'a';
    }

    const classes = cx('wrapper', {
        [classname]: classname,
        primary,
        secondary,
        primaryBorder,
        secondaryBorder,
        outline,
        shadow,
        disabled,
        curved,
        small,
        large,
    });

    return (
        <Comp className={classes} {...props}>
            {leftIcon && <span className={cx('icon')}>{leftIcon}</span>}
            <span className={cx('content')}>{children}</span>
            {rightIcon && <span className={cx('icon')}>{rightIcon}</span>}{' '}
        </Comp>
    );
};

Button.propTypes = {
    to: PropTypes.string,
    href: PropTypes.string,
    // css type
    primary: PropTypes.bool,
    secondary: PropTypes.bool,
    primaryBorder: PropTypes.bool,
    secondaryBorder: PropTypes.bool,
    outline: PropTypes.bool,
    shadow: PropTypes.bool,
    disabled: PropTypes.bool,
    // border
    curved: PropTypes.bool,
    // size
    small: PropTypes.bool,
    large: PropTypes.bool,
    // icon
    leftIcon: PropTypes.node,
    rightIcon: PropTypes.node,
    // other
    children: PropTypes.node.isRequired,
    classname: PropTypes.string,
    onClick: PropTypes.func,
};

export default Button;
