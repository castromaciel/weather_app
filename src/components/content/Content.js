import React from 'react';

const Content = () => {
  return (
    <article className='card col-3 mt-3'>
      <h5 className='card-title text-center'>Day</h5>
      <img src='...' className='card-img-top' alt='Weather' />
      <section className='card-body d-flex justify-content-around align-items-center'>
        <p>Max</p>
        <p>Min</p>
      </section>
    </article>
  );
};

export default Content;
