import React from 'react';

const IconEdit = ({ width, height, viewBox }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox={viewBox} fill="none">
        <path d="M75 25.4991H27C25.8954 25.4991 25 26.3945 25 27.4991V123.499C25 124.604 25.8954 125.499 27 125.499H123C124.105 125.499 125 124.604 125 123.499V75.499M115.089 53.0878L121.875 46.3018C126.756 41.4203 126.756 33.5058 121.875 28.6242C116.993 23.7427 109.079 23.7427 104.197 28.6243L97.4112 35.4102M115.089 53.0878L77.3622 90.8151C75.6172 92.5601 73.3947 93.7495 70.9747 94.2335L52.5889 97.9107L56.2661 79.5248C56.7501 77.1049 57.9395 74.8824 59.6844 73.1374L97.4112 35.4102M115.089 53.0878L97.4112 35.4102" stroke="#141C24" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
);

IconEdit.defaultProps = {
  width: 150,
  height: 151,
  viewBox: "0 0 150 151",
};

export default IconEdit;