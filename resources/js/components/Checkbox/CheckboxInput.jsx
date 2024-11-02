import classNames from 'classnames/bind';

import styles from './Checkbox.module.scss';

const cx = classNames.bind(styles);

const CheckboxInput = ({ name, title, id, checked, onChange }) => {
    return (
        <div className={cx('checkbox-input', { checked: checked })}>
            <label htmlFor={id}>
                <span className={cx('title')}>{title}</span>
                <input type="checkbox" name={name} id={id} checked={checked} onChange={onChange} />
                <span className={cx('square')}></span>
            </label>
        </div>
    );
};

export default CheckboxInput;
