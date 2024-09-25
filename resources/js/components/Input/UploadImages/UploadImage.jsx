import classNames from 'classnames/bind';

import styles from './UploadImages.module.scss';
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUpload } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);

const UploadImage = ({ image = '', setImage, submit = false, id = 'image' }) => {
    const [message, setMessage] = useState('');

    const handleImagesChange = (e) => {
        const files = Array.from(e.target.files);
        setImage(files);
    };

    const uploadImage = async (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append('image', image);

        try {
            const response = await axios.post('/api/upload/image', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            });
            setMessage(response.data.message);
        } catch (error) {
            setMessage('failed');
        }
    };

    return (
        <div className={cx('upload-images')}>
            <div className={cx('actions')}>
                <label htmlFor={id}>
                    Hình ảnh: <FontAwesomeIcon icon={faUpload} />
                </label>
                <input type="file" multiple onChange={handleImagesChange} id={id} />
                {submit && (
                    <button className={cx('submit-btn')} onClick={uploadImage}>
                        Thêm ảnh
                    </button>
                )}
            </div>
            <div className={cx('image')}></div>
        </div>
    );
};

export default UploadImage;
