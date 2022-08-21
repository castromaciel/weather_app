import React from 'react';
import { useHightlightsContext } from '../../Provider/HightlightsProvider';
import CardHighlights from '../CardHighlights/CardHighlights';

const Highlights = ({ className }) => {
  const hightlights = useHightlightsContext();

  return (
    <div className={`${className}`}>
      <h3 className='ms-md-4 ms-lg-0 mt-3'>Today&apos;s Hightlights</h3>
      <section className='row justify-content-center justify-content-md-evenly justify-content-lg-between'>
        {
          hightlights?.map(hightlight => (
            <CardHighlights
              className={'col-9 col-md-5 col-lg-5 text-white bg-darkblue-75'}
              hightlight={hightlight}
              key={hightlight.title}
            />
          ))
        }
      </section>
    </div>
  );
};

export default Highlights;
