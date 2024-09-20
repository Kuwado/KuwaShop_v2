import { useState } from 'react';
import classNames from 'classnames/bind';

import styles from './Dropdown.module.scss';

const cx = classNames.bind(styles);

const TYPES = [
    {
        id: 1,
        name: 'Áo',
        children: [
            {
                id: 4,
                name: 'Áo mùa hè',
                children: [
                    {
                        id: 6,
                        name: 'Áo polo',
                    },
                    {
                        id: 7,
                        name: 'Áo phông',
                    },
                ],
            },
            {
                id: 5,
                name: 'Áo mùa đông',
            },
        ],
    },
    {
        id: 2,
        name: 'Quần',
        children: [
            {
                id: 3,
                name: 'Quần dài',
            },
        ],
    },
];

const Dropdown = ({ title = 'Loại sản phẩm', items = TYPES, onClick }) => {
    const [selectedOption, setSelectedOption] = useState('');
    const [currenItems, setCurrentItems] = useState(items);
    const [history, setHistory] = useState();

    return (
        <div className={cx('dropdown')}>
            <div className={cx('title')}>{title}</div>
            <div className={cx('options')}>
                <select>
                    {items.map((item) => (
                        <option key={item.id} value={item.name}>
                            {item.name}
                        </option>
                    ))}
                </select>
            </div>
        </div>
    );
};

export default Dropdown;
