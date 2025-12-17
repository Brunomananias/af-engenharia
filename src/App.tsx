// App.tsx
import { BrowserRouter as Router } from 'react-router-dom';
import LandingPage from './components/LandingPage';

function App() {
  return (
    <Router>
      <div className="App">
        <LandingPage />
      </div>
    </Router>
  );
}

export default App;