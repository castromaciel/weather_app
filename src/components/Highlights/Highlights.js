import React from 'react';
import { useHightlightsContext } from '../../Provider/HightlightsProvider';
import CardHighlights from '../CardHighlights/CardHighlights';

const Highlights = () => {
  const hightlights = useHightlightsContext();

  return (
    <div className='mx-5 px-5'>
      <h3 className='mt-3'>Today&apos;s Hightlights</h3>
      <section className='row justify-content-between'>
        {
          hightlights?.map(hightlight => (
            <CardHighlights
              className={'col-5 text-white bg-darkblue-75'}
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
