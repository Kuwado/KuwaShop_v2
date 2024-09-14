import classNames from 'classnames/bind';
import PropTypes from 'prop-types';

import styles from './Search.module.scss';
import Image from '../Image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClipboard } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);

const twoLine = {
    display: '-webkit-box',
    WebkitBoxOrient: 'vertical',
    WebkitLineClamp: 2,
};

const SearchItem = ({ avatar, name }) => {
    return (
        <div className={cx('item')}>
            <div className={cx('item-left')}>
                {avatar ? (
                    <Image src={avatar} alt={name} />
                ) : (
                    <FontAwesomeIcon className={cx('item-icon')} icon={faClipboard} />
                )}
            </div>
            <div className={cx('item-right')} style={twoLine}>
                {name}
            </div>
        </div>
    );
};

SearchItem.propTypes = {
    avatar: PropTypes.string,
    name: PropTypes.string,
};

export default SearchItem;
