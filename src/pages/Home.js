import React from 'react';
import './home.css';
import { Forecast } from '../components/Forecast';
import { Highlights } from '../components/Highlights';
import { SideBar } from '../components/sideBar';

const Home = () => {
  return (
    <main className='container-fluid'>
      <section className='row'>
        <SideBar className={'col-3 bg-darkblue-75'}/>
        <div className='d-flex flex-column justify-content-evenly col-9 bg-darkblue text-white'>
          <Forecast />
          <Highlights />
        </div>
      </section>
    </main>
  );
};

export default Home;
