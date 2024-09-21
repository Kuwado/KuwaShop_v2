import { useEffect, useState, memo } from 'react';
import classNames from 'classnames/bind';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import styles from './StepOne.module.scss';
import Menu from '~/components/Menu';

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

const Categories = ({ categoryId, categoryName, setCategoryId, setCategoryName, title = 'Loại sản phẩm' }) => {
    const categories = transformCategoriesToMenu(CATEGORIES);
    const handleCategoryClick = (item) => {
        setCategoryId(item.id);
        setCategoryName(item.content);
    };

    return (
        <div className={cx('categories')}>
            <Menu items={categories} onClick={handleCategoryClick} click offset={[2, 5]}>
                <div className={cx('category')}>{categoryName === '' ? title : categoryName}</div>
            </Menu>
        </div>
    );
};

export default memo(Categories);
