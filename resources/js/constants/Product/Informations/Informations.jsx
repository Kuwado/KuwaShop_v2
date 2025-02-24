import classNames from 'classnames/bind';
import { memo, useState } from 'react';

import styles from './Informations.module.scss';
import TextArea from '~/components/TextArea';
import { OutInTransition } from '~/animations/Transition';

const cx = classNames.bind(styles);
const fn = () => {};

const Informations = ({ intro, detail, preserve, setIntro = fn, setDetail = fn, setPreserve = fn }) => {
    const [current, setCurrent] = useState('intro');

    return (
        <div className={cx('informations')}>
            <div className={cx('info-header')}>
                <button
                    className={cx('info-option', { active: current === 'intro' })}
                    type="button"
                    onClick={() => setCurrent('intro')}
                >
                    Giới thiệu
                </button>
                <button
                    className={cx('info-option', { active: current === 'detail' })}
                    type="button"
                    onClick={() => setCurrent('detail')}
                >
                    Chi tiết
                </button>
                <button
                    className={cx('info-option', { active: current === 'preserve' })}
                    type="button"
                    onClick={() => setCurrent('preserve')}
                >
                    Bảo quản
                </button>
            </div>

            <div className={cx('info-content')}>
                <OutInTransition state={current}>
                    <div className={cx('info-textarea')}>
                        {current === 'intro' ? (
                            <TextArea text={intro} onChange={setIntro} placeholder="Giới thiệu về sản phẩm" />
                        ) : current === 'detail' ? (
                            <TextArea text={detail} onChange={setDetail} placeholder="Chi tiết về sản phẩm" />
                        ) : (
                            <TextArea text={preserve} onChange={setPreserve} placeholder="Bảo quản sản phẩm" />
                        )}
                    </div>
                </OutInTransition>
            </div>
        </div>
    );
};

export default memo(Informations);
