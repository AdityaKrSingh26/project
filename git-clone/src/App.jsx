import { ThemeProvider } from "@primer/react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Dashboard from "./components/Dashboard/Dashboard";
import LoginPage from "./components/AuthPage/loginPage";
import Profile from "./components/Profile/Profile";
import SearchPage from "./components/SearchPage/SearchPage";

const App = () => {
  return (
    <ThemeProvider>
      <div className="App">
        <Router>
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/auth" element={<LoginPage />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/search" element={<SearchPage />} />
          </Routes>
        </Router>
      </div>
    </ThemeProvider>
  );
};
export default App;
