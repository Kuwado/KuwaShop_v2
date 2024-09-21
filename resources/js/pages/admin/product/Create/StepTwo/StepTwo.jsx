import classNames from 'classnames/bind';

import styles from './StepTwo.module.scss';

import { Button } from '~/components/Button';

const cx = classNames.bind(styles);

const StepTwo = ({ onClick, onSubmit }) => {
    return (
        <div className={cx('step-two')}>
            <Button onClick={onClick} type="button">
                back
            </Button>
        </div>
    );
};

export default StepTwo;
