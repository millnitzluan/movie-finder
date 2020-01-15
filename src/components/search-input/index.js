import React from 'react';

import icon from '../../assets/icons/icon-magnifier-grey.svg';

function SearchInput() {
  return (
    <div className="search-input">
      <img src={icon} className="icon" alt="magnifier icon" />
      <input className="text-input" name="search" placeholder="Search movies..." />
    </div>
  );
}

export default SearchInput;
