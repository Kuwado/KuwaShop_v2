import { useCallback, memo } from 'react';
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlusCircle, faXmarkCircle } from '@fortawesome/free-solid-svg-icons';

import styles from './StepTwo.module.scss';
import Colors from './Colors';
import { UploadImages } from '~/components/Input';
import Size from './Size';

const cx = classNames.bind(styles);

const StepTwo = ({ variants, setVariants }) => {
    console.log(variants);

    const setField = useCallback((index, field, value) => {
        setVariants((prevVar) => prevVar.map((variant, i) => (i === index ? { ...variant, [field]: value } : variant)));
    }, []);

    const setColorId = useCallback((index, value) => {
        setField(index, 'color_id', value);
    }, []);

    const setImages = useCallback((index, value) => {
        setField(index, 'images', value);
    }, []);

    const setS = useCallback((index, value) => {
        setField(index, 's', value);
    }, []);

    const setM = useCallback((index, value) => {
        setField(index, 'm', value);
    }, []);

    const setL = useCallback((index, value) => {
        setField(index, 'l', value);
    }, []);

    const setXL = useCallback((index, value) => {
        setField(index, 'xl', value);
    }, []);

    const setXXL = useCallback((index, value) => {
        setField(index, 'xxl', value);
    }, []);

    const handleNewVariant = useCallback(() => {
        const newVar = {
            s: '',
            m: '',
            l: '',
            xl: '',
            xxl: '',
            images: [],
            color_id: '',
            product_id: '',
        };
        setVariants((prev) => [...prev, newVar]);
    }, []);

    const handleDeleteVariant = useCallback((index) => {
        setVariants((prev) => {
            const updatedVars = [...prev];
            if (updatedVars.length > 1) {
                updatedVars.splice(index, 1);
            }
            return updatedVars;
        });
    }, []);

    const clearError = useCallback((index) => {
        setField(index, 'error', '');
    }, []);

    return (
        <div className={cx('step-two')}>
            {variants.map((variant, index) => (
                <div className={cx('variant')} key={`variant-${index}`}>
                    <div className={cx('color-and-images')}>
                        <div className={cx('color')}>
                            <Colors
                                colorId={variant.color_id}
                                setColorId={(id) => setColorId(index, id)}
                                error={variant.error}
                                clearError={() => clearError(index)}
                            />
                        </div>
                        <div className={cx('images')}>
                            <UploadImages
                                id={`variant-${index}`}
                                images={variant.images}
                                setImages={(images) => setImages(index, images)}
                            />
                        </div>
                    </div>
                    <Size
                        s={variant.s}
                        m={variant.m}
                        l={variant.l}
                        xl={variant.xl}
                        xxl={variant.xxl}
                        setS={(e) => setS(index, e.target.value)}
                        setM={(e) => setM(index, e.target.value)}
                        setL={(e) => setL(index, e.target.value)}
                        setXL={(e) => setXL(index, e.target.value)}
                        setXXL={(e) => setXXL(index, e.target.value)}
                    />
                    <div className={cx('delete-btn')} onClick={() => handleDeleteVariant(index)}>
                        <FontAwesomeIcon icon={faXmarkCircle} />
                    </div>
                </div>
            ))}
            <div className={cx('more-btn')} onClick={handleNewVariant}>
                <FontAwesomeIcon icon={faPlusCircle} />
            </div>
        </div>
    );
};

export default memo(StepTwo);
