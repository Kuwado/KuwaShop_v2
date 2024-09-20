import classNames from 'classnames/bind';

import styles from './AdminProductCreate.module.scss';
import Menu from '~/components/Menu';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import { useEffect, useState } from 'react';

const cx = classNames.bind(styles);

const CATEGORIES = [
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

const transformCategoriesToMenu = (categories) => {
    return categories.map((category) => ({
        id: category.id,
        content: category.name,
        rightIcon: category.children ? <FontAwesomeIcon icon={faChevronDown} /> : undefined,
        children: category.children
            ? {
                  title: category.name,
                  data: transformCategoriesToMenu(category.children),
              }
            : undefined,
    }));
};

const Categories = ({ categoryId, onClick, title = 'Loại sản phẩm' }) => {
    const categories = transformCategoriesToMenu(CATEGORIES);
    const [categoryName, setCategoryName] = useState('');

    useEffect(() => {
        const category = categories
            .flatMap((cat) => (Array.isArray(cat.children) ? [cat, ...cat.children] : cat))
            .find((cat) => cat.id === categoryId);
        setCategoryName(category ? category.content : '');
    }, []);

    const handleCategoryClick = (item) => {
        setCategoryName(item.content);
        onClick(item.id);
    };

    return (
        <div className={cx('categories')}>
            <Menu items={categories} onClick={handleCategoryClick} click offset={[2, 5]}>
                <div className={cx('category')}>{categoryName === '' ? title : categoryName}</div>
            </Menu>
        </div>
    );
};

export default Categories;
