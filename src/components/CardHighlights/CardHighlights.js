import React, { useEffect, useState } from 'react';

const CardHighlights = ({ className, hightlight }) => {
  const [unit, setUnit] = useState('');

  useEffect(() => {
    if (hightlight.title === 'Wind Status') setUnit('mph');
    if (hightlight.title === 'Humidity') setUnit('%');
    if (hightlight.title === 'Air Pressure') setUnit('mb');
    if (hightlight.title === 'Visibility') setUnit('miles');
  }, [unit]);

  return (
    <article className={`card mt-3 ${className} d-flex align-items-center justify-content-around`}>
      <h5 className='card-title text-center pt-3'> {hightlight.title} </h5>
      <section className='d-flex align-items-center'>
        <h1 className='me-1'>{hightlight.property}</h1>
        <h2 className='ms-1'>{unit}</h2>
      </section>
      {
        hightlight.title === 'Wind Status' && (
          <section className='d-flex mb-3'>
            <span className='material-symbols-outlined'>
            near_me
            </span>
            <p className='my-0 mx-2'>{hightlight.wind_dir}</p>
          </section>
        )
      }
      {
        hightlight.title === 'Humidity' && (
          <section className='w-75 mb-3'>
            <div className='d-flex justify-content-between'>
              <p className='m-0'>0</p>
              <p className='m-0'>50</p>
              <p className='m-0'>100</p>
            </div>
            <div className='progress'>
              <div className='progress-bar bg-warning' style={{ width: `${hightlight.property}%` }} role='progressbar' aria-label='Basic example' aria-valuenow='25' aria-valuemin='0' aria-valuemax='100'></div>
            </div>
            <div className='d-flex justify-content-end'>
              <p className='m-0'>{unit}</p>
            </div>
          </section>
        )
      }
    </article>
  );
};
export default CardHighlights;
