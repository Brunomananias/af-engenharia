// App.tsx - VERSÃO CORRIGIDA
import { BrowserRouter as Router } from 'react-router-dom';
import { Box } from '@mui/material'; // ← Importe Box
import LandingPage from './components/LandingPage';

function App() {
  return (
    <Router>
      <Box
        sx={{
          width: '100vw',
          maxWidth: '100%',
          overflowX: 'hidden', // ← Isso impede scroll horizontal
          position: 'relative',
          margin: 0,
          padding: 0,
        }}
        className="App"
      >
        <LandingPage />
      </Box>
    </Router>
  );
}

export default App;