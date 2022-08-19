import { createContext, useContext, useState } from 'react';

const weeklyForecastContext = createContext();
const weeklyForecastToggleContext = createContext();

export const WeeklyForecastProvider = ({ children }) => {
  const [weeklyForecast, setWeeklyForecast] = useState();

  return (
    <weeklyForecastContext.Provider value={weeklyForecast}>
      <weeklyForecastToggleContext.Provider value={setWeeklyForecast}>
        { children }
      </weeklyForecastToggleContext.Provider>
    </weeklyForecastContext.Provider>
  );
};

export const useWeeklyForecastContext = () => {
  return useContext(weeklyForecastContext);
};

export const useWeeklyForecastToggleContext = () => {
  return useContext(weeklyForecastToggleContext);
};
