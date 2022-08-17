import React, { useState } from 'react';
import './sidebar.css';

const SideBar = ({ className }) => {
  const key = '6be8c28794924ed8a2a184922222905';
  const [inputValue, setInputValue] = useState('');
  const [cities, setCities] = useState([]);
  const [isAvailableSearch, setIsAvailableSearch] = useState(false);

  const handleChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (inputValue.length > 3) {
      const response = await fetch(`http://api.weatherapi.com/v1/search.json?key=${key}&q=${inputValue}`);
      const data = await response.json();
      setCities(data);
    }
  };

  return (
    <div className={`sidebar-view ${className}`}>
      {
        isAvailableSearch
          ? (<form onSubmit={handleSubmit} className='input-group mt-3'>
              <input className='form-control' onChange={handleChange} onBlur={() => setIsAvailableSearch(!isAvailableSearch)}/>
            </form>)
          : (<button
              className='btn btn-light mt-3'
              type='button'
              onClick={() => setIsAvailableSearch(!isAvailableSearch)}
            >
              Search city
            </button>)
      }
      <ul className='text-white list-group mt-2'>
        {
          cities?.map(city => (
          <li
            key={city.id}
            className='list-group-item'
            onClick={() => console.log(city)}
          >
              {city.name}, {city.region}
          </li>))
        }
      </ul>
    </div>
  );
};

export default SideBar;
