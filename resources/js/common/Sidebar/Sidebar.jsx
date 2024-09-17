import { useEffect, useState } from 'react';
import classNames from 'classnames/bind';
import PropTypes from 'prop-types';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faBoxOpen,
    faChevronLeft,
    faChevronRight,
    faDashboard,
    faDollarSign,
    faTachometerAlt,
    faUsers,
} from '@fortawesome/free-solid-svg-icons';
import styles from './Sidebar.module.scss';
import SidebarItem from './SidebarItem';
import { useLocation } from 'react-router-dom';

const cx = classNames.bind(styles);

const makeIcon = (type) => {
    switch (type) {
        case 'dashboard':
            return <FontAwesomeIcon icon={faTachometerAlt} />;
        case 'product':
            return <FontAwesomeIcon icon={faBoxOpen} />;
        case 'product_create':
            return <FontAwesomeIcon icon={faBoxOpen} />;
        case 'product_list':
            return <FontAwesomeIcon icon={faDashboard} />;
        case 'customers':
            return <FontAwesomeIcon icon={faUsers} />;
        case 'revenue':
            return <FontAwesomeIcon icon={faDollarSign} />;
    }
};

const findItemByPath = (items, path) => {
    for (let item of items) {
        if (item.to === path) {
            return item;
        }
        if (item.children) {
            for (let child of item.children) {
                if (child.to === path) return child;
            }
        }
    }
    return items[0];
};

const checkChildrenActive = (children, item) => {
    for (let child of children) {
        if (child === item) {
            return true;
        }
    }
    return false;
};

const Sidebar = ({ items }) => {
    const location = useLocation();
    const [currentItem, setCurrentItem] = useState(findItemByPath(items, location.pathname));
    const [shrink, setShrink] = useState(false);

    useEffect(() => {
        const matchedItem = findItemByPath(items, location.pathname);
        setCurrentItem(matchedItem);
    }, [location.pathname]);

    const handleShrink = () => {
        setShrink(!shrink);
    };

    const checkActive = (item) => {
        if (item.children) {
            if (checkChildrenActive(item.children, currentItem)) {
                return true;
            } else return false;
        } else {
            return item.type === currentItem.type;
        }
    };

    return (
        <div className={cx('sidebar', { shrink: shrink })}>
            {items.map((item) => (
                <SidebarItem
                    key={item.type}
                    title={item.title}
                    to={item.to}
                    icon={makeIcon(item.type)}
                    onclick={() => setCurrentItem((prev) => (item.children ? prev : item))}
                    active={checkActive(item)}
                >
                    <>
                        {item.children &&
                            item.children.map((child) => (
                                <SidebarItem
                                    key={child.type}
                                    title={child.title}
                                    to={child.to}
                                    icon={makeIcon(child.type)}
                                    onclick={() => setCurrentItem(child)}
                                    active={child.type === currentItem.type}
                                />
                            ))}
                    </>
                </SidebarItem>
            ))}
            <div className={cx('shrink-btn')} onClick={handleShrink}>
                {!shrink ? <FontAwesomeIcon icon={faChevronLeft} /> : <FontAwesomeIcon icon={faChevronRight} />}
            </div>
        </div>
    );
};

Sidebar.propTypes = {
    items: PropTypes.array.isRequired,
};

export default Sidebar;
