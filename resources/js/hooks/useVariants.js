import { useState } from 'react';

const useVariants = (initialVariants = []) => {
    const [variants, setVariants] = useState(
        initialVariants.length > 0
            ? initialVariants
            : [
                  {
                      s: '',
                      m: '',
                      l: '',
                      xl: '',
                      xxl: '',
                      images: '',
                      color_id: '',
                      image_files: [],
                      color_name: '',
                  },
              ],
    );

    const deleteVariant = (index) => {
        console.log(index);
        setVariants((prev) => {
            console.log(prev);
            const updatedVars = [...prev];
            console.log(updatedVars);
            if (updatedVars.length > 1) {
                updatedVars.splice(index, 1);
            }
            return updatedVars;
        });
    };

    const addVariant = () => {
        setVariants((prev) => [
            ...prev,
            { s: '', m: '', l: '', xl: '', xxl: '', images: '', color_id: '', image_files: [], color_name: '' },
        ]);
    };

    const updateVariant = (variant, index) => {
        setVariants((prev) => prev.map((v, i) => (i === index ? variant : v)));
    };

    const updateVariantField = (field, value, index) => {
        setVariants((prev) => prev.map((variant, i) => (i === index ? { ...variant, [field]: value } : variant)));
    };

    const deleteVariantField = (field, index) => {
        setVariants((prevVariants) => {
            const newVariants = [...prevVariants];
            const variant = { ...newVariants[index] };
            delete variant[field];
            newVariants[index] = variant;
            return newVariants;
        });
    };

    const resetVariants = () => {
        setVariants([
            {
                s: '',
                m: '',
                l: '',
                xl: '',
                xxl: '',
                images: '',
                color_id: '',
                image_files: [],
                color_name: '',
            },
        ]);
    };

    return {
        variants,
        setVariants,
        resetVariants,
        deleteVariant,
        addVariant,
        updateVariant,
        updateVariantField,
        deleteVariantField,
    };
};

export default useVariants;
