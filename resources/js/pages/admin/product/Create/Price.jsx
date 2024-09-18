import { useEffect, useState } from 'react';
import classNames from 'classnames/bind';

import styles from './AdminProductCreate.module.scss';
import { Input } from '~/components/Input';
import { RadioInput } from '~/components/Radio';

const cx = classNames.bind(styles);

const Price = ({ sale, original_price, price, onChange, resetSale, setPrice }) => {
    const [discountType, setDiscountType] = useState('not');

    const handleOriginalPriceChange = (e) => {
        const value = e.target.value;
        if ((!isNaN(value) && value > 0) || value === '') {
            onChange(e);
        }
    };

    const handleRadioInputChange = (value) => {
        resetSale();
        setDiscountType(value);
    };

    const handlePercentChange = (e) => {
        const value = e.target.value;
        if ((!isNaN(value) && value > 0 && value < 100) || value === '') {
            onChange(e);
        }
    };

    const handleValueChange = (e) => {
        const value = e.target.value;
        if ((!isNaN(value) && value > 0 && value < Number(original_price)) || value === '') {
            onChange(e);
        }
    };

    useEffect(() => {
        let finalPrice = original_price;
        if (discountType === 'percent' && sale) {
            finalPrice = original_price - (original_price * sale) / 100;
        } else if (discountType === 'value' && sale) {
            finalPrice = original_price - sale;
        }

        setPrice(finalPrice);
    }, [original_price, discountType, sale]);

    return (
        <div className={cx('price')}>
            <Input
                name="original_price"
                label="Giá sản phẩm"
                required
                type="number"
                value={original_price}
                onChange={handleOriginalPriceChange}
            />

            {original_price !== '' && (
                <div className={cx('price-discount')}>
                    <div className={cx('price-header')}>
                        <span className={cx('price-title')}>Phương thức giảm giá</span>
                        <div className={cx('price-options')}>
                            <RadioInput
                                name="sale-radio"
                                id="not-sale"
                                title="Không giảm giá"
                                checked={discountType === 'not'}
                                onChange={() => handleRadioInputChange('not')}
                            />
                            <RadioInput
                                name="sale-radio"
                                id="percent-sale"
                                title="Giảm theo phần trăm"
                                checked={discountType === 'percent'}
                                onChange={() => handleRadioInputChange('percent')}
                            />
                            <RadioInput
                                name="sale-radio"
                                id="value-sale"
                                title="Giảm theo giá trị"
                                checked={discountType === 'value'}
                                onChange={() => handleRadioInputChange('value')}
                            />
                        </div>
                    </div>

                    <div className={cx('price-body')}>
                        {discountType == 'percent' && (
                            <Input
                                name="sale"
                                label="Phần trăm giảm (%)"
                                type="number"
                                value={sale}
                                onChange={handlePercentChange}
                            />
                        )}
                        {discountType == 'value' && (
                            <Input
                                name="sale"
                                label="Giá trị giảm (đ)"
                                type="number"
                                value={sale}
                                onChange={handleValueChange}
                            />
                        )}
                    </div>

                    <div className={cx('price-last')}>
                        <Input name="price" label="Giá cuối cùng (đ)" type="number" value={price} disabled />
                    </div>
                </div>
            )}
        </div>
    );
};

export default Price;
