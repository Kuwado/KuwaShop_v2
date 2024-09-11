import { useState } from 'react';
import classNames from 'classnames/bind';
import PropTypes from 'prop-types';
import Tippy from '@tippyjs/react/headless';

import styles from './Menu.module.scss';
import MenuItem from './MenuItem';
import Header from './Header';

const cx = classNames.bind(styles);

const defaultFunction = () => {};

const Menu = ({ children, items = [], hideOnClick = false, onChange = defaultFunction }) => {
    const [history, setHistory] = useState([{ data: items }]);
    const current = history[history.length - 1];

    const renderItems = () => {
        return current.data.map((item, index) => {
            const isParent = !!item.children;
            return (
                <MenuItem
                    key={index}
                    data={item}
                    onClick={() => {
                        if (isParent) {
                            setHistory((prev) => [...prev, item.children]);
                        } else {
                            onChange(item);
                        }
                    }}
                />
            );
        });
    };

    const renderResults = (attrs) => (
        <div className={cx('menu')} tabIndex="-1" {...attrs}>
            {current.title && <Header title={current.title} icon={current.icon} onClick={handleBack} />}
            <div className={cx('menu-body')}>{renderItems()}</div>
        </div>
    );

    const handleBack = () => {
        setHistory((prev) => prev.slice(0, prev.length - 1));
    };

    const handleBackToFirst = () => {
        setHistory((prev) => prev.slice(0, 1));
    };

    return (
        <Tippy
            interactive
            placement="bottom-end"
            delay={[0, 700]}
            offset={[10, 5]}
            hideOnClick={hideOnClick}
            render={renderResults}
            onHide={handleBackToFirst}
        >
            {children}
        </Tippy>
    );
};

Menu.propTypes = {
    children: PropTypes.node.isRequired,
    items: PropTypes.array,
    hideOnClick: PropTypes.bool,
    onChange: PropTypes.func,
};

export default Menu;
