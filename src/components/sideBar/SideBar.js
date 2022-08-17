import React, { useState } from 'react';

const SideBar = () => {
  const key = '6be8c28794924ed8a2a184922222905';
  const [inputValue, setInputValue] = useState('');
  const [cities, setCities] = useState([]);

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
    <>
      <form onSubmit={handleSubmit}>
        <input onChange={handleChange}/>
      </form>
      <div>
        <ul>
          {
            cities?.map(city => (
            <li key={city.id}>{city.name}, {city.region}</li>))
          }
        </ul>
      </div>
    </>
  );
};

export default SideBar;
