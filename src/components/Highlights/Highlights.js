import React from 'react';
import { useHightlightsContext } from '../../Provider/HightlightsProvider';
import CardHighlights from '../CardHighlights/CardHighlights';

const Highlights = () => {
  const hightlights = useHightlightsContext();

  return (
    <section className='row justify-content-evenly'>
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
  );
};

export default Highlights;
