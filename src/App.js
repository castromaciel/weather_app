import { Home } from './pages';
import { HightlightsProvider } from './Provider/HightlightsProvider';
import { WeeklyForecastProvider } from './Provider/WeeklyForecastProvider';

function App() {
  return (
    <WeeklyForecastProvider>
      <HightlightsProvider>
        <Home />
      </HightlightsProvider>
    </WeeklyForecastProvider>
  );
}

export default App;
