
import React from 'react';

const IconSearch = ({ width, height, viewBox }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox={viewBox} fill="none">
        <path d="M90.625 91.125L118.75 119.25M100 63C100 83.7107 83.2107 100.5 62.5 100.5C41.7893 100.5 25 83.7107 25 63C25 42.2893 41.7893 25.5 62.5 25.5C83.2107 25.5 100 42.2893 100 63Z" stroke="#141C24" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
);

IconSearch.defaultProps = {
  width: 150,
  height: 151,
  viewBox: "0 0 150 151",
};

export default IconSearch;