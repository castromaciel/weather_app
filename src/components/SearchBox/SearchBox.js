import React from 'react';

const SearchBox = ({ cities, handleClick }) => {
  return (
    <ul className='text-white list-group mt-3'>
        {
          cities?.map(city => (
          <li
            key={city.id}
            className='mx-2 list-city-item my-3'
            onClick={() => handleClick(city)}
          >
            <p className='m-0'>{city.name}</p>
            <span className="material-symbols-outlined change">
              keyboard_arrow_right
            </span>
          </li>))
        }
      </ul>
  );
};

export default SearchBox;
