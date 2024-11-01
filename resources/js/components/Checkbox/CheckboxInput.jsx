import classNames from 'classnames/bind';

import styles from './Checkbox.module.scss';

const cx = classNames.bind(styles);

const CheckboxInput = ({ name, title, id, checked, onClick }) => {
    console.log(checked);
    return (
        <div className={cx('checkbox-input', { checked: checked })}>
            <label htmlFor={id}>
                <span className={cx('title')}>{title}</span>
                <input type="checkbox" name={name} id={id} checked={checked} onClick={onClick} />
                <span className={cx('square')}></span>
            </label>
        </div>
    );
};

export default CheckboxInput;
