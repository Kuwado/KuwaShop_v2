import { useState } from 'react';
import classNames from 'classnames/bind';
import PropTypes from 'prop-types';

import Tippy from '@tippyjs/react/headless';
import styles from './Notifications.module.scss';
import NotificationBox from './NotificationBox';
import IconButton from '../Button/Icon/IconButton';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBell } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);

const NotificationWithIcon = ({ items = [], classnameButton }) => {
    const [visible, setVisible] = useState(false);
    const classes = cx({
        active: visible,
        [classnameButton]: classnameButton,
    });

    return (
        <div>
            <Tippy
                visible={visible}
                interactive
                placement="bottom-end"
                delay={[0, 700]}
                offset={[10, 5]}
                onClickOutside={() => setVisible(false)}
                render={(attrs) => (
                    <div className={cx('container')} tabIndex="-1" {...attrs}>
                        <NotificationBox items={items} />
                    </div>
                )}
            >
                <IconButton
                    classname={classes}
                    icon={<FontAwesomeIcon icon={faBell} />}
                    content="Thông báo"
                    onClick={() => setVisible(!visible)}
                    active={visible}
                />
            </Tippy>
        </div>
    );
};

NotificationWithIcon.propTypes = {
    items: PropTypes.array.isRequired,
    classnameButton: PropTypes.string,
};

export default NotificationWithIcon;
