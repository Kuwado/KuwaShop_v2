import { useEffect, useState, memo } from 'react';
import classNames from 'classnames/bind';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import styles from './StepOne.module.scss';
import Menu from '~/components/Menu';
import axios from 'axios';

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
    if (!Array.isArray(categories) || categories.length === 0) {
        return [];
    }

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

const Categories = ({
    categoryId,
    categoryName,
    setCategoryId,
    setCategoryName,
    error,
    clearError,
    title = 'Loại sản phẩm',
}) => {
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        const fetchCategories = async () => {
            try {
                const response = await axios.get('/api/categories');
                setCategories(transformCategoriesToMenu(response.data.categories));
            } catch (error) {
                console.error('Lỗi lấy dữ liệu categories: ', error);
            }
        };

        fetchCategories();
    }, []);

    const handleCategoryClick = (item) => {
        setCategoryId(item.id);
        setCategoryName(item.content);
    };

    const handleResetError = () => {
        if (error !== '') {
            clearError();
        }
    };

    return (
        <div className={cx('categories', { 'cate-error': error })} onClick={handleResetError}>
            <Menu items={categories} onClick={handleCategoryClick} click offset={[2, 5]}>
                <div className={cx('category')}>
                    {error === '' ? (categoryName === '' ? title : categoryName) : error}
                </div>
            </Menu>
        </div>
    );
};

export default Categories;
