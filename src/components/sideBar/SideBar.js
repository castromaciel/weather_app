import React, { useState } from 'react';
import './sidebar.css';

const SideBar = ({ className }) => {
  const key = '6be8c28794924ed8a2a184922222905';
  const [inputValue, setInputValue] = useState('');
  const [cities, setCities] = useState([]);
  const [isAvailableSearch, setIsAvailableSearch] = useState(false);
  const [weather, setWeather] = useState({});

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

  const handleClick = async (city) => {
    const { lat, lon } = city;
    const response = await fetch(`http://api.weatherapi.com/v1/forecast.json?key=${key}&q=${lat},${lon}`);
    const { current, forecast } = await response.json();
    setWeather({
      condition: current.condition.text,
      current: current.temp_c,
      image: current.condition.icon,
      min: forecast.forecastday[0].day.mintemp_c,
      max: forecast.forecastday[0].day.maxtemp_c,
    });
    setCities([]);
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
            onClick={() => handleClick(city)}
          >
            {city.name}, {city.region}
          </li>))
        }
      </ul>
      <section>
        <article className='card col-12 mt-3 d-flex flex-column align-items-center'>
          <img src={weather.image} className='card-img-top w-50' alt='Weather' />
          <h2 className='card-title mt-3'>{weather.current}°C</h2>
          <h4>{weather.condition}</h4>
        </article>
      </section>
    </div>
  );
};

export default SideBar;
