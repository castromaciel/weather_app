import React from 'react';
import { Card } from '../Card';

const Highlights = () => {
  return (
    <section className='row justify-content-evenly'>
      <Card className={'col-5 text-white bg-transparent'} title={'Wind status'}/>
      <Card className={'col-5 text-white bg-transparent'} title={'Humidity'}/>
      <Card className={'col-5 text-white bg-transparent'} title={'Visibilty'}/>
      <Card className={'col-5 text-white bg-transparent'} title={'Air Pressure'}/>
    </section>
  );
};

export default Highlights;
