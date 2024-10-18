import React, { useContext, useEffect, useState } from 'react';
import { EffectContext } from '~/context/EffectContext';

const styles = {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    zIndex: 100,
};

const Effects = () => {
    const { effect, changeEffect } = useContext(EffectContext);
    const [show, setShow] = useState(effect !== '');

    const handleWindowClick = () => {
        console.log('click');
        changeEffect('');
    };

    useEffect(() => {
        setShow(effect !== '');
    }, [effect]);

    return (
        <div
            className="effect-container"
            style={{ display: show ? 'block' : 'none', ...styles }}
            onClick={handleWindowClick}
        >
            {effect !== '' && effect}
        </div>
    );
};

export default Effects;
