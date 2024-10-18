import { faSnowflake } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styles from './Snow.module.scss';

import classNames from 'classnames/bind';
import Image from '~/components/Image';
import images from '~/assets/images';
import { useContext, useEffect } from 'react';
import { EffectContext } from '~/context/EffectContext';

const cx = classNames.bind(styles);

const Snow = ({ count = 300, blurs = ['0', '5px'] }) => {
    // const { changeEffect } = useContext(EffectContext);
    const snows = [<FontAwesomeIcon icon={faSnowflake} />, ''];
    // document.addEventListener('click', changeEffect(''));

    const snowflakes = Array.from({ length: count }, (_, i) => {
        const index = Math.floor(Math.random() * 2);
        const size = Math.floor(Math.random() * 10 + 14);
        const snowStyles =
            index === 1
                ? {
                      backgroundColor: '#fafafa',
                      width: `${size - 4}px`,
                      height: `${size - 4}px`,
                      borderRadius: '50%',
                  }
                : {};

        return (
            <div
                key={`snow-${i}`}
                className={cx('snowflake')}
                style={{
                    left: `${Math.random() * 100}vw`,
                    top: `${Math.random() * -100}vh`,
                    animation: `${cx('snowFall')} ${Math.floor(Math.random() * 10 + 8)}s ease-in infinite`,
                    filter: `blur(${blurs[Math.floor(Math.random() * 2)]})`,
                    fontSize: `${size}px`,
                    ...snowStyles,
                }}
            >
                {snows[index]}
            </div>
        );
    });

    return (
        <div className={cx('snow')}>
            <div className={cx('snowflakes')}>{snowflakes}</div>
            <div className={cx('snow-man')}>
                <Image src={images.snowMan} width="100%" />
            </div>
        </div>
    );
};

export default Snow;
