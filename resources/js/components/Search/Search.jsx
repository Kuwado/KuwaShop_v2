import { useRef, useState } from 'react';
import classNames from 'classnames/bind';
import PropTypes from 'prop-types';

import Tippy from '@tippyjs/react/headless';
import styles from './Search.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass, faSpinner, faXmarkCircle } from '@fortawesome/free-solid-svg-icons';
import images from '~/assets/images';
import SearchBox from './SearchBox';

const cx = classNames.bind(styles);

const SEARCH = {
    account: {
        title: 'Tài khoản',
        type: 'account',
        data: [
            {
                id: 1,
                avatar: images.avatarTest,
                full_name:
                    'Con mèo con con ha j fsdbfd hdhd jdj dkdk jfjf kfk ksdkidu jdhf ncb bcb hdgd dff ghh jjj dsg fdg',
            },
            {
                id: 2,
                avatar: images.avatar,
                full_name: 'Lưu Việt Hoàn',
            },
            {
                id: 3,
                avatar: images.avatarTest,
                full_name:
                    'Con mèo con con ha j fsdbfd hdhd jdj dkdk jfjf kfk ksdkidu jdhf ncb bcb hdgd dff ghh jjj dsg fdg',
            },
            {
                id: 4,
                avatar: images.avatar,
                full_name: 'Lưu Việt Hoàn',
            },
            {
                id: 5,
                avatar: images.avatarTest,
                full_name:
                    'Con mèo con con ha j fsdbfd hdhd jdj dkdk jfjf kfk ksdkidu jdhf ncb bcb hdgd dff ghh jjj dsg fdg',
            },
            {
                id: 6,
                avatar: images.avatar,
                full_name: 'Lưu Việt Hoàn',
            },
            {
                id: 7,
                avatar: images.avatarTest,
                full_name:
                    'Con mèo con con ha j fsdbfd hdhd jdj dkdk jfjf kfk ksdkidu jdhf ncb bcb hdgd dff ghh jjj dsg fdg',
            },
            {
                id: 8,
                avatar: images.avatar,
                full_name: 'Lưu Việt Hoàn',
            },
        ],
    },

    product: {
        title: 'Sản phẩm',
        type: 'product',
        data: [
            {
                id: 1,
                avatar: images.productTest,
                product_name: 'Con mèo con con',
            },
            {
                id: 2,
                avatar: images.productTest,
                product_name: 'Lưu Việt Hoàn',
            },
        ],
    },

    order: {
        title: 'Đơn hàng',
        type: 'order',
        data: [
            {
                id: 1,
                order_id: '#123456',
            },
            {
                id: 2,
                order_id: '#050723',
            },
        ],
    },
};

const Search = ({ account, product, order }) => {
    const [searchValue, setSearchValue] = useState('');
    const [showResults, setShowResults] = useState(false);
    const [accountResults, setAccountResults] = useState(SEARCH.account.data);
    const [productResults, setProductResults] = useState(SEARCH.product.data);
    const [orderResults, setOrderResults] = useState(SEARCH.order.data);
    const [loading, setLoading] = useState(false);

    const inputRef = useRef();

    const renderSearch = () => {
        return (
            <div className={cx('search-content')}>
                <input
                    className={cx('input')}
                    type="text"
                    value={searchValue}
                    ref={inputRef}
                    placeholder="Bạn muốn tìm gì?"
                    spellCheck="false"
                    onChange={handleChange}
                    onFocus={handleFocus}
                />
                <div className={cx('actions')}>
                    {!!searchValue && !loading && (
                        <FontAwesomeIcon className={cx('clear')} onClick={handleClear} icon={faXmarkCircle} />
                    )}
                    {loading && <FontAwesomeIcon className={cx('loading')} icon={faSpinner} />}{' '}
                </div>
                <div className={cx('search-btn')}>
                    <FontAwesomeIcon icon={faMagnifyingGlass} />
                </div>
            </div>
        );
    };

    const renderResults = (attrs) => (
        <div className={cx('container')} tabIndex="-1" {...attrs}>
            <SearchBox accounts={accountResults} products={productResults} orders={orderResults} />
        </div>
    );

    const handleClear = () => {
        setSearchValue('');
        inputRef.current.focus();
    };

    const handleChange = (e) => {
        const searchInput = e.target.value;

        if (!searchInput.startsWith(' ')) {
            setSearchValue(searchInput);
        }
    };

    const handleFocus = () => setShowResults(true);

    const handleHideResults = () => {
        setShowResults(false);
    };

    return (
        <div className={cx('search')}>
            <Tippy
                interactive
                visible={
                    showResults && (accountResults.length > 0 || productResults.length > 0 || orderResults.length > 0)
                }
                placement="bottom-end"
                offset={[0, 8]}
                render={renderResults}
                onClickOutside={handleHideResults}
            >
                {renderSearch()}
            </Tippy>
        </div>
    );
};

Search.propTypes = {
    account: PropTypes.bool,
    product: PropTypes.bool,
    order: PropTypes.bool,
};

export default Search;
