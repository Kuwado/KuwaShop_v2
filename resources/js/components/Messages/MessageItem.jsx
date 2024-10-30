import classNames from 'classnames/bind';
import PropTypes from 'prop-types';

import styles from './Messages.module.scss';
import { useState } from 'react';
import { Image } from '../Image';

const cx = classNames.bind(styles);

const MessageItem = ({ item }) => {
    const [read, setRead] = useState(item.read);

    const handleClickItem = () => {
        if (!read) {
            // update database
            setRead(true);
        }
    };

    return (
        <div className={cx('item')} onClick={handleClickItem}>
            <Image classname={cx('item-avatar')} src={item.avatar} alt={item.from} />
            <div className={cx('item-content')}>
                <span className={cx('item-content-header')}>{item.from}</span>
                <div className={cx('item-content-body', read ? 'read' : '')}>
                    <span className={cx('item-content-text')}>{item.content}</span>
                    <span className={cx('item-content-time')}>{item.created_at}</span>
                </div>
            </div>
        </div>
    );
};

MessageItem.propTypes = {
    item: PropTypes.object.isRequired,
};

export default MessageItem;
