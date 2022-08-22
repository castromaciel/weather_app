import { Home } from './pages';
import { WeeklyForecastProvider } from './Provider/WeeklyForecastProvider';

function App() {
  return (
    <WeeklyForecastProvider>
      <Home />
    </WeeklyForecastProvider>
  );
}

export default App;
