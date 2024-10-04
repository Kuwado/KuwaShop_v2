import { useState, useCallback } from 'react';

const useVariants = () => {
    const [variants, setVariants] = useState([
        {
            s: '',
            m: '',
            l: '',
            xl: '',
            xxl: '',
            images: [],
            image_paths: '',
            color_id: '',
        },
    ]);

    const resetVariants = useCallback(() => {
        setVariants([
            {
                s: '',
                m: '',
                l: '',
                xl: '',
                xxl: '',
                images: [],
                image_paths: '',
                color_id: '',
            },
        ]);
    }, []);

    return { variants, setVariants, resetVariants };
};

export default useVariants;
