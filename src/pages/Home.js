import React from 'react';
import { Content } from '../components/content';
import { SideBar } from '../components/sideBar';

const Home = () => {
  return (
    <section className='container-fluid bg-dark'>
      <div className='row'>
        <div className='col-4'>
          <SideBar />
        </div>
        <div className='col-8'>
          <Content />
        </div>
      </div>
    </section>
  );
};

export default Home;
