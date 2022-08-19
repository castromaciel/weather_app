import React from 'react';
import { useWeeklyForecastContext } from '../../Provider/WeeklyForecastProvider';
import { Card } from '../Card';

const Forecast = () => {
  const weeklyForecast = useWeeklyForecastContext();
  console.log(weeklyForecast);

  return (
    <section className='container'>
      <article className='row justify-content-around'>
        {
          weeklyForecast?.map(forecast => (
            <Card key={forecast?.date_epoch} className={'text-white bg-darkblue-75 col-2 '} forecast={forecast}/>
          ))
        }
      </article>
    </section>
  );
};

export default Forecast;
