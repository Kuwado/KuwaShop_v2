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

const Sidebar = ({ items }) => {
    const [currentItem, setCurrentItem] = useState(items[0]);
    const [currentChildren, setCurrentChildren] = useState({});
    const [shrink, setShrink] = useState(false);

    useEffect(() => {
        setCurrentChildren({});
    }, [currentItem]);

    const handleShrink = () => {
        setShrink(!shrink);
    };

    return (
        <div className={cx('sidebar', { shrink: shrink })}>
            {items.map((item) => (
                <SidebarItem
                    key={item.type}
                    title={item.title}
                    to={item.to}
                    icon={makeIcon(item.type)}
                    onclick={() => setCurrentItem(item)}
                    active={item.type === currentItem.type}
                >
                    <>
                        {item.children &&
                            item.children.map((child) => (
                                <SidebarItem
                                    key={child.type}
                                    title={child.title}
                                    to={child.to}
                                    icon={makeIcon(child.type)}
                                    onclick={() => setCurrentChildren(child)}
                                    active={child.type === currentChildren.type}
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
