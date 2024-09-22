import { memo } from 'react';
import classNames from 'classnames/bind';

import styles from './StepTwo.module.scss';
import { Input } from '~/components/Input';

const cx = classNames.bind(styles);

const Size = ({ s, m, l, xl, xxl, setS, setM, setL, setXL, setXXL }) => {
    return (
        <div className={cx('size')}>
            <Input name="s" label="Số lượng size S" type="number" value={s} onChange={setS} />
            <Input name="m" label="Số lượng size M" type="number" value={m} onChange={setM} />
            <Input name="l" label="Số lượng size L" type="number" value={l} onChange={setL} />
            <Input name="xl" label="Số lượng size XL" type="number" value={xl} onChange={setXL} />
            <Input name="xxl" label="Số lượng size XXL" type="number" value={xxl} onChange={setXXL} />
        </div>
    );
};

export default memo(Size);
