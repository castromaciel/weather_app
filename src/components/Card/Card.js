import React from 'react';
import moment from 'moment';

const Card = ({ className, forecast }) => {
  const dateFormatted = moment(forecast?.date).format('ddd Do');
  return (
    <article className={`card mt-3 ${className} d-flex align-items-center`}>
      <h5 className='card-title text-center pt-3'>{dateFormatted}</h5>
      <img src={forecast?.day?.condition?.icon} className='w-50' alt='Weather' />
      <section className='card-body d-flex'>
        <p className='me-2 my-0'>{forecast?.day?.maxtemp_c}°C</p>
        <p className='ms-2 my-0'>{forecast?.day?.mintemp_c}°C</p>
      </section>
    </article>
  );
};

export default Card;
