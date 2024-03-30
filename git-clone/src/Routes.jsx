import React from 'react'
import { useRoutes } from 'react-router-dom'

// import pages 
import Dashboard from './components/Dashboard/Dashboard'
import Profile from "./components/Profile/Profile"
import LoginPage from './components/AuthPage/loginPage'
import RepositriesPage from './components/RepostriesPage/RepositriesPage'
import SearchPage from './components/SearchPage/SearchPage'
import Repo from './components/RepoView/Repo'
import PullReqest from './components/PullRequest/PullRequest'
import NotificationPage from './components/NotificationPage/NotificationPage'
import IssueView from './components/IssueView/IssueView'
import IssueDetails from './components/IssueDetails/IssueDetails'
import CreateNewIssue from './components/CreateNewIssue/CreateNewIssue'
import CreateRepo from './components/CreateRepo/CreateRepo'
import EditCode from './components/EditCode/EditCode'
import RepoSettingPage from './components/RepoSettingsPage/RepoSettingPage'

const ProjectRoutes = () => {
    let element = useRoutes([
        {
            path: "/",
            element: <Dashboard />
        },
        {
            path: "/auth",
            element: <LoginPage />
        },
        {
            path: "/profile",
            element: <Profile />
        },
        {
            path: "/repo",
            element: <RepositriesPage />
        },
        {
            path: "/search",
            element: <SearchPage />
        },
        {
            path: "/repoview",
            element: <Repo />
        },
        {
            path: "/pullrequest",
            element: <PullReqest />
        },
        {
            path: "/issue",
            element: <IssueView />
        },
        {
            path: "/notification",
            element: <NotificationPage />
        },
        {
            path: "/issueDetails",
            element: <IssueDetails />
        },
        {
            path: "/addIssue",
            element: <CreateNewIssue />
        },
        {
            path: "/createRepo",
            element: <CreateRepo />
        },
        {
            path: "/editcode",
            element: <EditCode />
        },
        {
            path: "/repoSettings",
            element: <RepoSettingPage />
        },
    ])

    return element;
}

export default ProjectRoutes