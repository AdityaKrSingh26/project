import React from "react";
import { BrowserRouter as Router } from "react-router-dom";

import ProjectRoutes from "./Routes";

import { ThemeProvider } from "@primer/react";
import { AuthProvider } from "./authContext";

const App = () => {
  return (
    <ThemeProvider>
      <div className="App">
        <AuthProvider>
          <Router>
            <ProjectRoutes />
          </Router>
        </AuthProvider>
      </div>
    </ThemeProvider>
  );
};
export default App;
