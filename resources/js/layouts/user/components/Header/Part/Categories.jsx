import classNames from 'classnames/bind';

import styles from './Part.module.scss';
import { getCategories } from '~/services/categoryService';
import { useEffect, useState } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import config from '~/config';

const cx = classNames.bind(styles);

const fetchCategories = async () => {
    return await getCategories();
};

const Categories = () => {
    const [categories, setCategories] = useState([]);
    const [searchParams, setSearchParams] = useSearchParams();
    const navigate = useNavigate();
    const [current, setCurrent] = useState(parseInt(searchParams.get('category_id')) ?? '0');

    useEffect(() => {
        const fetchCategories = async () => {
            const response = await getCategories();
            setCategories(response.categories);
        };

        fetchCategories();
    }, []);

    const handleGoToCategory = (categoryId) => {
        setCurrent(categoryId);
        navigate(`${config.routes.user.productList}?category_id=${categoryId}`);
    };

    return (
        <div className={cx('categories')}>
            {categories.length > 0 &&
                categories.map((category, index) => (
                    <div key={`category-select-${category.id}`} className={cx('category')}>
                        <div
                            className={cx('title', { active: current === category.id })}
                            onClick={() => handleGoToCategory(category.id)}
                        >
                            {category.name}
                        </div>
                        {category.children.length > 0 && (
                            <div className={cx('menu')}>
                                {category.children.map((child) => (
                                    <div key={child.id} className={cx('menu-item')}>
                                        <div
                                            className={cx('title', { active: current === child.id })}
                                            onClick={() => handleGoToCategory(child.id)}
                                        >
                                            {child.name}
                                        </div>
                                        <div className={cx('sub-menu')}>
                                            {child.children.length > 0 &&
                                                child.children.map((item) => (
                                                    <div key={item.id} className={cx('menu-item')}>
                                                        <div
                                                            className={cx('title', { active: current === item.id })}
                                                            onClick={() => handleGoToCategory(item.id)}
                                                        >
                                                            {item.name}
                                                        </div>
                                                    </div>
                                                ))}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>
                ))}
        </div>
    );
};

export default Categories;
