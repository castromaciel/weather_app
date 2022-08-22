import React from 'react';
import { useWeeklyForecastContext } from '../../Provider/WeeklyForecastProvider';
import { Card } from '../Card';

const Forecast = () => {
  const weeklyForecast = useWeeklyForecastContext();

  return (
    <div className='mx-lg-5 px-lg-5'>
      <h3 className='mt-3'>Weekly Forecast</h3>
      <section className='row justify-content-evenly justify-content-lg-between'>
        {
          weeklyForecast?.map(forecast => (
            <Card key={forecast?.date_epoch} className={'col-5 col-lg-2 text-white bg-darkblue-75'} forecast={forecast}/>
          ))
        }
      </section>
    </div>
  );
};

export default Forecast;
