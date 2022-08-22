import React, { useEffect, useState } from 'react';
import useFetch from '../../hook/useFetch';
import { useHightlightsToggleContext } from '../../Provider/HightlightsProvider';
import { useWeeklyForecastToggleContext } from '../../Provider/WeeklyForecastProvider';
import SearchBar from '../SearchBar/SearchBar';
import { SearchBox } from '../SearchBox';
import { WeatherCard } from '../WeatherCard';
import './sidebar.css';

const SideBar = ({ className, coords }) => {
  const key = '24dd6464dfb04d5e891134703221908 ';
  const [cities, setCities] = useState([]);
  const [isAvailableSearch, setIsAvailableSearch] = useState(false);
  const [showData, setShowData] = useState(false);
  const [currentCoords, setCurrentCoords] = useState({ lat: coords.lat, lon: coords.lon });
  const [currentCity, setCurrentCity] = useState('');
  const [weather, setWeather] = useState({});

  const setWeeklyForecast = useWeeklyForecastToggleContext();
  const setHightlights = useHightlightsToggleContext();

  const response = useFetch(`http://api.weatherapi.com/v1/forecast.json?key=${key}&q=${currentCoords.lat},${currentCoords.lon}&days=5`);
  const handleClick = (city) => {
    const { lat, lon, name } = city;
    setCurrentCity(name);
    setCurrentCoords({ lat, lon });
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
    setShowData(true);
    setIsAvailableSearch(!isAvailableSearch);
  };

  useEffect(() => {
    if ((currentCoords?.lat && currentCoords?.lon && response?.data) !== null) {
      const { current, forecast, location } = response.data;
      setCurrentCity(location.name);
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
      setShowData(true);
    }
  }, [currentCoords?.lat, currentCoords?.lon, response?.data]);

  return (
    <div className={`sidebar-view ${className}`}>
      {
        isAvailableSearch
          ? (<SearchBar setCities={setCities} />)
          : (<button
              className='ms-2 btn btn-outline-light my-3'
              type='button'
              onClick={() => setIsAvailableSearch(!isAvailableSearch)}
            >
              Search city
            </button>)
      }
      { isAvailableSearch && <SearchBox cities={cities} handleClick={handleClick}/> }
      {
        showData && !isAvailableSearch && (
          <WeatherCard weather={weather} currentCity={currentCity} />
        )
      }
    </div>
  );
};

export default SideBar;
