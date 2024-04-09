import React from "react";
import { useNavigate, useRoutes } from "react-router-dom";

// import pages
import Dashboard from "./components/Dashboard/Dashboard";
import Profile from "./components/Profile/Profile";
import LoginPage from "./components/AuthPage/loginPage";
import RepositriesPage from "./components/RepostriesPage/RepositriesPage";
import SearchPage from "./components/SearchPage/SearchPage";
import Repo from "./components/RepoView/Repo";
import PullReqest from "./components/PullRequest/PullRequest";
import NotificationPage from "./components/NotificationPage/NotificationPage";
import IssueView from "./components/IssueView/IssueView";
import IssueDetails from "./components/IssueDetails/IssueDetails";
import CreateNewIssue from "./components/CreateNewIssue/CreateNewIssue";
import CreateRepo from "./components/CreateRepo/CreateRepo";
import EditCode from "./components/EditCode/EditCode";
import RepoSettingPage from "./components/RepoSettingsPage/RepoSettingPage";
import { useAuth } from "./authContext";
import SignUpPage from "./components/AuthPage/SignUpPage";

const ProjectRoutes = () => {
  const { currentUser, setCurrentUser } = useAuth();
  const navigate = useNavigate();

  React.useEffect(() => {
    // Fetch the current user ID from local storage
    const userIdFromStorage = localStorage.getItem("userId");

    // If a user ID is found in local storage, set the currentUser state
    if (userIdFromStorage && !currentUser) {
      setCurrentUser(userIdFromStorage);
    }

    // Redirect to the login page if no current user is found and not on /auth or /signup
    if (
      !userIdFromStorage &&
      !["/auth", "/signup"].includes(window.location.pathname)
    ) {
      navigate("/auth");
    }

    if (userIdFromStorage && window.location.pathname == "/auth") {
      navigate("/");
    }
  }, [currentUser, navigate, setCurrentUser]);

  let element = useRoutes([
    {
      path: "/",
      element: <Dashboard />,
    },
    {
      path: "/auth",
      element: <LoginPage />,
    },
    {
      path: "/signup", // Assuming you have a SignUpPage component
      element: <SignUpPage />, // Make sure to import and use your SignUpPage component here
    },
    {
      path: "/profile",
      element: <Profile />,
    },
    {
      path: "/repo",
      element: <RepositriesPage />,
    },
    {
      path: "/search",
      element: <SearchPage />,
    },
    {
      path: "/repoview",
      element: <Repo />,
    },
    {
      path: "/pullrequest",
      element: <PullReqest />,
    },
    {
      path: "/issue",
      element: <IssueView />,
    },
    {
      path: "/notification",
      element: <NotificationPage />,
    },
    {
      path: "/issueDetails",
      element: <IssueDetails />,
    },
    {
      path: "/addIssue",
      element: <CreateNewIssue />,
    },
    {
      path: "/createRepo",
      element: <CreateRepo />,
    },
    {
      path: "/editcode",
      element: <EditCode />,
    },
    {
      path: "/repoSettings",
      element: <RepoSettingPage />,
    },
  ]);

  return element;
};

export default ProjectRoutes;