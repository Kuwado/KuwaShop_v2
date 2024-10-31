import classNames from 'classnames/bind';

import styles from './SizeTable.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRuler, faXmark } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';
import Popup from '~/components/Popup';
import MenContent from './MenContent';
import WomenContent from './WomenContent';
import KidContent from './KidContent';

const cx = classNames.bind(styles);

const SizeTable = () => {
    const [show, setShow] = useState(false);
    const [content, setContent] = useState('men'); //women, kid

    return (
        <>
            <div className={cx('size-table-btn')} onClick={() => setShow(true)}>
                <FontAwesomeIcon icon={faRuler} />
                <span>Kiểm tra size của bạn</span>
            </div>
            <Popup isOpen={show}>
                <div className={cx('size-table')}>
                    <div className={cx('overlay')} onClick={() => setShow(false)}></div>
                    <div className={cx('content')}>
                        <button type="button" className={cx('close-btn')} onClick={() => setShow(false)}>
                            <FontAwesomeIcon icon={faXmark} />
                        </button>

                        <div className={cx('header')}>
                            <div className={cx('title')}>Bảng tư vấn size</div>
                            <div className={cx('options')}>
                                <div
                                    className={cx('option-item', { active: content === 'men' })}
                                    onClick={() => setContent('men')}
                                >
                                    Nam
                                </div>
                                <div
                                    className={cx('option-item', { active: content === 'women' })}
                                    onClick={() => setContent('women')}
                                >
                                    Nữ
                                </div>
                                <div
                                    className={cx('option-item', { active: content === 'kid' })}
                                    onClick={() => setContent('kid')}
                                >
                                    Trẻ em
                                </div>
                            </div>
                        </div>

                        <div className={cx('body')}>
                            {content === 'men' && <MenContent />}
                            {content === 'women' && <WomenContent />}
                            {content === 'kid' && <KidContent />}
                        </div>
                    </div>
                </div>
            </Popup>
        </>
    );
};

export default SizeTable;
