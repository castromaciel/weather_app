import React from 'react';
import { Card } from '../Card';

const Forecast = () => {
  return (
    <section className='container d-flex justify-content-around '>
      <Card className={'text-white bg-transparent col-2 '} />
      <Card className={'text-white bg-transparent col-2 '} />
      <Card className={'text-white bg-transparent col-2 '} />
      <Card className={'text-white bg-transparent col-2 '} />
      <Card className={'text-white bg-transparent col-2 '} />
    </section>
  );
};

export default Forecast;
