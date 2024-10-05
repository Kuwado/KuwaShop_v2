import { useState } from 'react';

const useVariant = (initialVariant = {}) => {
    const [variant, setVariant] = useState({
        s: '',
        m: '',
        l: '',
        xl: '',
        xxl: '',
        images: '',
        color_id: '',
        image_files: [],
        color_name: '',
        ...initialVariant,
    });

    const setVariantField = (field, value) => {
        setVariant((prev) => ({ ...prev, [field]: value }));
    };

    const resetVariant = () => {
        setVariant({});
    };

    return { variant, setVariant, setVariantField, resetVariant };
};

export default useVariant;
