import React from 'react';
import { Content } from '../components/content';
import { SideBar } from '../components/sideBar';

const Home = () => {
  return (
    <main className='container-fluid'>
      <section className='row'>
        <SideBar className={'col-3 bg-dark'}/>
        <div className='col-8'>
          <Content />
        </div>
      </section>
    </main>
  );
};

export default Home;
