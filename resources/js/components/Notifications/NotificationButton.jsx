import { forwardRef } from 'react';
import PropTypes from 'prop-types';

import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';
import { faBell } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const NotificationButton = forwardRef(
    ({ icon = <FontAwesomeIcon icon={faBell} />, content = 'Thông báo', onClick, classname }, ref) => {
        return (
            <Tippy delay={[0, 50]} content={content} placement="bottom">
                <button className={classname} ref={ref} onClick={onClick}>
                    {icon}
                </button>
            </Tippy>
        );
    },
);

NotificationButton.propTypes = {
    icon: PropTypes.node,
    content: PropTypes.string,
    onClick: PropTypes.func,
    classname: PropTypes.string,
};

export default NotificationButton;
