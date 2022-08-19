import React from 'react';

const Card = ({ className, title }) => {
  return (
    <article className={`card mt-3 ${className}`}>
      <h5 className='card-title text-center'>{ title || 'Day' }</h5>
      <img src='...' className='card-img-top' alt='Weather' />
      <section className='card-body d-flex justify-content-around align-items-center'>
        <p>Max</p>
        <p>Min</p>
      </section>
    </article>
  );
};

export default Card;
