import React from 'react';
import { Forecast } from '../components/Forecast';
import { SideBar } from '../components/sideBar';

const Home = () => {
  return (
    <main className='container-fluid'>
      <section className='row'>
        <SideBar className={'col-3 bg-dark bg-opacity-75'}/>
        <div className='col-9 bg-dark text-white'>
          <Forecast />
        </div>
      </section>
    </main>
  );
};

export default Home;
