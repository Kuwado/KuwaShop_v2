import classNames from 'classnames/bind';

import styles from './SizeTable.module.scss';

const cx = classNames.bind(styles);

const MenContent = () => {
    return (
        <div className={cx('table-container')}>
            <table className={cx('ao')}>
                <thead>
                    <tr>
                        <th colSpan="5" className={cx('title')}>
                            Size áo
                        </th>
                    </tr>
                    <tr>
                        <th>Size</th>
                        <th>Cổ</th>
                        <th>Vai</th>
                        <th>Ngực</th>
                        <th>Eo</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>S</td>
                        <td>36</td>
                        <td>44</td>
                        <td>90</td>
                        <td>88</td>
                    </tr>
                    <tr>
                        <td>M</td>
                        <td>38</td>
                        <td>45</td>
                        <td>94</td>
                        <td>92</td>
                    </tr>
                    <tr>
                        <td>L</td>
                        <td>40</td>
                        <td>46</td>
                        <td>98</td>
                        <td>96</td>
                    </tr>
                    <tr>
                        <td>XL</td>
                        <td>42</td>
                        <td>47</td>
                        <td>102</td>
                        <td>100</td>
                    </tr>
                    <tr>
                        <td>XXL</td>
                        <td>44</td>
                        <td>48</td>
                        <td>106</td>
                        <td>104</td>
                    </tr>
                </tbody>
            </table>

            <table className={cx('quan')}>
                <thead>
                    <tr>
                        <th colSpan="5" className={cx('title')}>
                            Size quần
                        </th>
                    </tr>
                    <tr>
                        <th>Size</th>
                        <th>Vòng eo</th>
                        <th>Vòng mông</th>
                        <th>Cân nặng(kg)</th>
                        <th>Chiều cao(cm)</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>S</td>
                        <td>76</td>
                        <td>81</td>
                        <td>65-68</td>
                        <td>162-168</td>
                    </tr>
                    <tr>
                        <td>M</td>
                        <td>80</td>
                        <td>95</td>
                        <td>68-70</td>
                        <td>168-172</td>
                    </tr>
                    <tr>
                        <td>L</td>
                        <td>84</td>
                        <td>99</td>
                        <td>70-74</td>
                        <td>172-176</td>
                    </tr>
                    <tr>
                        <td>XL</td>
                        <td>86</td>
                        <td>104</td>
                        <td>74-78</td>
                        <td>176-180</td>
                    </tr>
                    <tr>
                        <td>XXL</td>
                        <td>90</td>
                        <td>109</td>
                        <td>78-82</td>
                        <td>180-184</td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
};

export default MenContent;
