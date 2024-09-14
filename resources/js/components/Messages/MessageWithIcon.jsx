import { useState } from 'react';
import classNames from 'classnames/bind';
import PropTypes from 'prop-types';

import Tippy from '@tippyjs/react/headless';
import styles from './Messages.module.scss';
import MessageBox from './MessageBox';
import IconButton from '../Button/Icon/IconButton';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMessage } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);

const MessageWithIcon = ({ items = [], classnameButton }) => {
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
                        <MessageBox items={items} />
                    </div>
                )}
            >
                <IconButton
                    classname={classes}
                    icon={<FontAwesomeIcon icon={faMessage} />}
                    content="Tin nhắn"
                    onClick={() => setVisible(!visible)}
                    active={visible}
                    number={items.length}
                />
            </Tippy>
        </div>
    );
};

MessageWithIcon.propTypes = {
    items: PropTypes.array.isRequired,
    classnameButton: PropTypes.string,
};

export default MessageWithIcon;
