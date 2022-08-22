import React, { useState } from 'react';
import useFetch from '../../hook/useFetch';
import { useHightlightsToggleContext } from '../../Provider/HightlightsProvider';
import { useWeeklyForecastToggleContext } from '../../Provider/WeeklyForecastProvider';
import SearchBar from '../searchBar/SearchBar';
import './sidebar.css';

const SideBar = ({ className }) => {
  const key = '24dd6464dfb04d5e891134703221908 ';
  const [cities, setCities] = useState([]);
  const [isAvailableSearch, setIsAvailableSearch] = useState(false);
  const [showData, setShowData] = useState(false);
  const [latitude, setLatitude] = useState(null);
  const [longitude, setLongitude] = useState(null);
  const [currentCity, setCurrentCity] = useState('');
  const [weather, setWeather] = useState({});

  const setWeeklyForecast = useWeeklyForecastToggleContext();
  const setHightlights = useHightlightsToggleContext();

  const response = useFetch(`http://api.weatherapi.com/v1/forecast.json?key=${key}&q=${latitude},${longitude}&days=5`);
  const handleClick = (city) => {
    const { lat, lon, name } = city;
    setCurrentCity(name);
    setLatitude(lat);
    setLongitude(lon);
    const { current, forecast, location } = response.data;
    setWeather({
      condition: current.condition.text,
      current: current.temp_c,
      image: current.condition.icon,
      localtime: location.localtime,
      min: forecast.forecastday[0].day.mintemp_c,
      max: forecast.forecastday[0].day.maxtemp_c,
    });
    setHightlights([
      {
        property: current.wind_mph,
        wind_dir: current.wind_dir,
        title: 'Wind Status',
      },
      {
        property: current.humidity,
        title: 'Humidity',
      },
      {
        property: current.pressure_mb,
        title: 'Air Pressure',
      },
      {
        property: current.vis_miles,
        title: 'Visibility',
      },
    ]);
    setWeeklyForecast(forecast.forecastday);
    setCities([]);
    setShowData(true);
  };

  return (
    <div className={`sidebar-view ${className}`}>
      {
        isAvailableSearch
          ? (<SearchBar
              setCities={setCities}
              isAvailableSearch={isAvailableSearch}
              setIsAvailableSearch={setIsAvailableSearch}
            />)
          : (<button
              className='ms-2 btn btn-outline-light my-3'
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
            className='mx-2 list-city-item mb-3'
            onClick={() => handleClick(city)}
          >
            <p className='m-0'>{city.name}</p>
            <span className="material-symbols-outlined">
              keyboard_arrow_right
            </span>
          </li>))
        }
      </ul>
      {
        showData && (
          <section className='d-flex flex-column justify-content-around h-75'>
            <article className='col-12 d-flex flex-column align-items-center text-center text-white'>
              <img src={weather.image} className='card-img-top w-50' alt='Weather' />
              <h1 className='temperature-text mt-3'>{Math.round(weather.current)}°C</h1>
              <h4 className='temperature-text'>{weather.condition}</h4>
            </article>
            <article className='col-12 d-flex justify-content-center align-items-center text-white'>
              <span>
                Today
              </span>
              <span className='mx-2'>
                •
              </span>
              <span>
                { Date().slice(0, 10) }
              </span>
            </article>
            <article className='col-12 d-flex justify-content-center align-items-center text-white'>
              <span className='material-symbols-outlined me-2'>
                location_on
              </span>
              <span>
                { currentCity }
              </span>
            </article>
          </section>
        )
      }
    </div>
  );
};

export default SideBar;
