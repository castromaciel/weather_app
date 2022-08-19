import React from 'react';

const WeatherCard = ({ weather, currentCity }) => {
  return (
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
  );
};

export default WeatherCard;
