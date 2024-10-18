import { createContext, useState } from 'react';

const EffectContext = createContext();

const EffectProvider = ({ children }) => {
    const [effect, setEffect] = useState('');

    const changeEffect = (eff) => {
        setEffect(eff);
    };

    return <EffectContext.Provider value={{ effect, changeEffect }}>{children}</EffectContext.Provider>;
};

export { EffectContext, EffectProvider };
