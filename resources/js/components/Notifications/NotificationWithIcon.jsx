import { useState } from 'react';
import classNames from 'classnames/bind';
import PropTypes from 'prop-types';

import Tippy from '@tippyjs/react/headless';
import styles from './Notifications.module.scss';
import NotificationBox from './NotificationBox';
import NotificationButton from './NotificationButton';

const cx = classNames.bind(styles);

const NotificationWithIcon = ({ items = [], classnameButton }) => {
    const [visible, setVisible] = useState(false);

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
                <NotificationButton
                    classname={cx(classnameButton, { 'icon-active': visible })}
                    onClick={() => setVisible(!visible)}
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
