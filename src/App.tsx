import MainRoutes from './pages/routes';
import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
        <MainRoutes />
      </div>
    </Router>
  );
}

export default App;
