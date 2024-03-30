import React from 'react'
import { BrowserRouter as Router } from "react-router-dom";

import ProjectRoutes from './Routes';

import { ThemeProvider } from '@primer/react';


const App = () => {
  return (
    <ThemeProvider>
      <div className="App">
        <Router>
          <ProjectRoutes />
        </Router>
      </div>
    </ThemeProvider>
  );
};
export default App;
