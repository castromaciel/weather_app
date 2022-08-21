import React from 'react';
import { useWeeklyForecastContext } from '../../Provider/WeeklyForecastProvider';
import { Card } from '../Card';

const Forecast = () => {
  const weeklyForecast = useWeeklyForecastContext();

  return (
    <section className='row justify-content-center justify-content-lg-between mx-lg-5 px-lg-5'>
      {
        weeklyForecast?.map(forecast => (
          <Card key={forecast?.date_epoch} className={'text-white bg-darkblue-75 col-8 col-lg-2'} forecast={forecast}/>
        ))
      }
    </section>
  );
};

export default Forecast;
