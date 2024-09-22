import { useState } from 'react';
import classNames from 'classnames/bind';

import styles from './StepThree.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);

const StepThree = ({ messages = [], loading }) => {
    return (
        <div className={cx('step-three')}>
            <div className={cx('loading', { active: loading })}>
                <FontAwesomeIcon icon={faSpinner} />
            </div>

            <div className={cx('messages')}>
                {messages.map((mess, index) => (
                    <div key={index}>{mess}</div>
                ))}
            </div>
        </div>
    );
};

export default StepThree;
