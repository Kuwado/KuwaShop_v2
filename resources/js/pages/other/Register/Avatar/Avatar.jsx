import classNames from 'classnames/bind';

import styles from './Avatar.module.scss';
import { Button } from '~/components/Button';
import { UploadImage } from '~/constants/UploadImages';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUpload } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';
import { Image } from '~/components/Image';
import images from '~/assets/images';
import { uploadImage } from '~/services/uploadService';

const cx = classNames.bind(styles);

const Avatar = ({ setAvatar, setStep }) => {
    const [image, setImage] = useState('');

    const handleNextStep = async () => {
        const response = await uploadImage(image);
        setAvatar(response.image);
        setStep(3);
    };

    return (
        <div className={cx('register-avatar')}>
            <div className={cx('title')}>Ảnh đại diện</div>

            <div className={cx('body')}>
                <div className={cx('avatar')}>
                    <Image src={image ? URL.createObjectURL(image) : images.noImage} width="100%" height="100%" />
                </div>

                <div className={cx('avatar-upload')}>
                    <label className={cx('avatar-label')} htmlFor="register-avatar">
                        <span>Tải ảnh lên </span>
                        <FontAwesomeIcon icon={faUpload} />
                    </label>
                    <input
                        className={cx('avatar-input')}
                        type="file"
                        onChange={(e) => setImage(e.target.files[0])}
                        id="register-avatar"
                    />
                </div>
            </div>

            <div className={cx('next-btn')}>
                <Button primaryBorder large contentCenter width="100%" onClick={handleNextStep}>
                    Thêm ảnh đại diện
                </Button>
            </div>
        </div>
    );
};

export default Avatar;
