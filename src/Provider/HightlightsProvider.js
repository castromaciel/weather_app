import { createContext, useContext, useState } from 'react';

const hightlightsContext = createContext();
const hightlightsToggleContext = createContext();

export const HightlightsProvider = ({ children }) => {
  const [hightlights, setHightlights] = useState([]);

  return (
    <hightlightsContext.Provider value={hightlights}>
      <hightlightsToggleContext.Provider value={setHightlights}>
        { children }
      </hightlightsToggleContext.Provider>
    </hightlightsContext.Provider>
  );
};

export const useHightlightsContext = () => {
  return useContext(hightlightsContext);
};

export const useHightlightsToggleContext = () => {
  return useContext(hightlightsToggleContext);
};
