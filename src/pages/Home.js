import React, { useEffect, useState } from 'react';
import './home.css';
import { Forecast } from '../components/Forecast';
import { Highlights } from '../components/Highlights';
import { SideBar } from '../components/sideBar';

const Home = () => {
  const geolocationAPI = navigator.geolocation;
  const [coords, setCoords] = useState({ lat: null, lon: null });

  const getUserCoordinates = () => {
    if (!geolocationAPI) {
      console.error('Geolocation API is not available in your browser!');
    } else {
      geolocationAPI.getCurrentPosition((position) => {
        const currentCoords = position.coords;
        setCoords({ lat: currentCoords.latitude, lon: currentCoords.longitude });
      }, (error) => {
        console.error('Something went wrong getting your position!', error);
      });
    }
  };

  useEffect(() => {
    getUserCoordinates();
  }, [coords]);
  return (
    <main className='container-fluid'>
      {
        coords.lat === null
          ? (<div className="spinner-border" role="status">
              <span className="visually-hidden">Loading...</span>
            </div>)
          : (
            <section className='row'>
              <SideBar className={'col-md-5 col-lg-3 bg-darkblue-75'} coords={coords}/>
              <div className='d-flex flex-column col-md-7 col-lg-9  bg-darkblue text-white'>
                <Forecast />
                <Highlights className={'d-md-none d-lg-flex flex-column mx-lg-5 px-lg-5 mb-5 mb-lg-0 '}/>
              </div>
              <Highlights className={'d-none d-md-flex d-lg-none flex-column bg-darkblue text-white pb-5'}/>
            </section>
          )
      }
    </main>
  );
};

export default Home;
