import { memo } from 'react';
import classNames from 'classnames/bind';

import styles from './Sizes.module.scss';
import { Input } from '~/components/Input';

const cx = classNames.bind(styles);

const Sizes = ({ s, m, l, xl, xxl, setS, setM, setL, setXL, setXXL, index = 1 }) => {
    return (
        <div className={cx('size')}>
            <Input name={`s-${index}`} label="Số lượng size S" type="number" value={s} onChange={setS} />
            <Input name={`m-${index}`} label="Số lượng size M" type="number" value={m} onChange={setM} />
            <Input name={`l-${index}`} label="Số lượng size L" type="number" value={l} onChange={setL} />
            <Input name={`xl-${index}`} label="Số lượng size XL" type="number" value={xl} onChange={setXL} />
            <Input name={`xxl-${index}`} label="Số lượng size XXL" type="number" value={xxl} onChange={setXXL} />
        </div>
    );
};

export default memo(Sizes);
