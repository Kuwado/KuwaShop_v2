import { useEffect, useState } from 'react';
import classNames from 'classnames/bind';

import styles from './Address.module.scss';
import Dropdown from '~/components/Dropdown';
import provinces from './provinces.json';
import { Input } from '~/components/Input';
import { Button } from '~/components/Button';

const cx = classNames.bind(styles);

const Address = ({ address, ward, district, province, setField }) => {
    const [currentProvince, setCurrentProvince] = useState(null);
    const [currentDistrict, setCurrentDistrict] = useState(null);
    const [districtList, setDistrictList] = useState([]);
    const [wardList, setWardList] = useState([]);

    console.log(currentProvince);
    console.log(currentDistrict);

    const resetDistrict = () => {
        setField('district', '');
        setDistrictList([]);
        setCurrentDistrict(null);
    };

    const resetWard = () => {
        setField('ward', '');
        setWardList([]);
    };

    useEffect(() => {
        if (currentProvince && currentProvince !== province) {
            resetDistrict();
            resetWard();
        }
        setCurrentProvince(provinces.find((p) => p.name === province) || null);
    }, [province]);

    useEffect(() => {
        if (currentProvince) setDistrictList(currentProvince.districts ?? []);
    }, [currentProvince]);

    useEffect(() => {
        if (currentDistrict && currentDistrict !== district) {
            resetWard();
        }
        console.log('5');

        setCurrentDistrict(districtList.find((d) => d.name === district) || null);
    }, [district, districtList]);

    useEffect(() => {
        if (currentDistrict) setWardList(currentDistrict.wards ?? []);
    }, [currentDistrict]);

    return (
        <div className={cx('address-box')}>
            <div className={cx('dropdown-container')}>
                <Dropdown
                    className={cx('dropdown')}
                    title="Chọn tỉnh/thành phố"
                    selected={province}
                    label="Tỉnh/Thành phố"
                    required
                >
                    {provinces.length > 0 &&
                        provinces.map((p, index) => (
                            <Button
                                key={`province-option-${index}`}
                                onClick={() => setField('province', p.name)}
                                width="100%"
                                noRadius
                            >
                                {p.name}
                            </Button>
                        ))}
                </Dropdown>

                <Dropdown
                    className={cx('dropdown')}
                    title="Chọn quận/huyện"
                    selected={district}
                    label="Quận/huyện"
                    required
                >
                    {districtList.length > 0 &&
                        districtList.map((d, index) => (
                            <Button
                                key={`district-option-${index}`}
                                onClick={() => setField('district', d.name)}
                                width="100%"
                                noRadius
                            >
                                {d.name}
                            </Button>
                        ))}
                </Dropdown>

                <Dropdown className={cx('dropdown')} title="Chọn phường/xã" selected={ward} label="Phường/xã" required>
                    {wardList.length > 0 &&
                        wardList.map((w, index) => (
                            <Button
                                key={`ward-option-${index}`}
                                onClick={() => setField('ward', w.name)}
                                width="100%"
                                noRadius
                            >
                                {w.name}
                            </Button>
                        ))}
                </Dropdown>
            </div>

            <Input
                value={address}
                name="address"
                onChange={(e) => setField('address', e.target.value)}
                label="Địa điểm chi tiết"
                required
            />
        </div>
    );
};

export default Address;
