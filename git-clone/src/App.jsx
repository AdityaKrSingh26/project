import { ThemeProvider } from "@primer/react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Dashboard from "./components/Dashboard/Dashboard";
import LoginPage from "./components/AuthPage/loginPage";
import Profile from "./components/Profile/Profile";
import SearchPage from "./components/SearchPage/SearchPage";
import RepositriesPage from "./components/RepostriesPage/RepositriesPage";
import Repo from "./components/RepoView/Repo";
import CreateRepo from "./components/CreateRepo/CreateRepo";
import PullReqest from "./components/PullRequest/PullRequest";
import IssueView from "./components/IssueView/IssueView";
import NotificationPage from "./components/NotificationPage/NotificationPage";
import IssueDetails from "./components/IssueDetails/IssueDetails";
import CreateNewIssue from "./components/CreateNewIssue/CreateNewIssue";
import EditCode from "./components/EditCode/EditCode";


const App = () => {
  return (
    <ThemeProvider>
      <div className="App">
        <Router>
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/auth" element={<LoginPage />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/repo" element={<RepositriesPage />} />
            <Route path="/search" element={<SearchPage />} />
            <Route path="/repoview" element={<Repo />} />
            <Route path="/pullrequest" element={<PullReqest />} />
            <Route path="/issue" element={<IssueView />} />

            <Route path="/notification" element={<NotificationPage />} />
            <Route path="/issueDetails" element={<IssueDetails />} />
            <Route path="/addIssue" element={<CreateNewIssue />} />

            <Route path="/createRepo" element={<CreateRepo />} />
            <Route path="/editcode" element={<EditCode />} />
          </Routes>
        </Router>
      </div>
    </ThemeProvider>
  );
};
export default App;
