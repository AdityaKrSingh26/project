import React, { useEffect, useState } from "react";
import axios from "axios";

import {
  BookIcon,
  PlusCircleIcon,
  LinkIcon,
  RepoIcon,
  CodeIcon,
  BugIcon,
  GitPullRequestIcon,
} from "@primer/octicons-react";

import "./SearchPage.css";
import Navbar from "../Dashboard/Navbar/Navbar/Navbar";

function SearchPage() {
  const [repos, setRepos] = useState([]); // State to store fetched repositories

  useEffect(() => {
    const fetchRepos = async () => {
      try {
        const response = await axios.get(
          "https://backendgit-1.onrender.com/repos"
        );
        setRepos(response.data); // Assuming the API returns an array of repositories
      } catch (error) {
        console.error("Failed to fetch repositories:", error);
      }
    };

    fetchRepos();
  }, []); // Empty dependency array means this effect runs once on mount

  return (
    <div className="search-page-wrapper">
      <Navbar />
      <div className="line-break"></div>

      <div className="search-main-section">
        <div className="filter-section">
          <div className="filter-menu">
            <div className="filter-header">
              <h4>Filter</h4>
            </div>
            <div className="filter-body">
              <div className="filter-item">
                <CodeIcon />
                <p>Code</p>
              </div>
              <div className="filter-item">
                <RepoIcon />
                <p>Repositories</p>
              </div>
              <div className="filter-item">
                <BugIcon />
                <p>Issue</p>
              </div>
              <div className="filter-item">
                <GitPullRequestIcon />
                <p>Pull Request</p>
              </div>
            </div>
          </div>

          <div className="divider"></div>

          <div className="laguages-menu">
            <div className="filter-header">
              <h4>Languages</h4>
            </div>
            <div className="filter-body">{/* Language items */}</div>
          </div>

          <div className="divider"></div>

          <div className="advanced-menu">
            <div className="filter-header">
              <h4>Advanced</h4>
            </div>
            <div className="filter-body">{/* Advanced filter items */}</div>
          </div>
        </div>

        <div className="search-result-section">
          {repos.map((repo) => (
            <div className="search-result">
              <div className="repo-name">
                <h5>{repo.name}</h5>
              </div>
              <div className="description">
                <p>{repo.content}</p>
                <div className="language-item">
                  <div
                    style={{
                      backgroundColor: "green", // Adjust based on the language
                      width: "10px",
                      height: "10px",
                      borderRadius: "50%",
                    }}
                  ></div>
                  <p>HTML</p>{" "}
                  {/* Assuming each repo has a 'language' property */}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="right-section">
          <div className="right-section-box">
            <h5>Git</h5>
            <p>Git is the most widely used version control system.</p>
            <div>
              <span>
                <LinkIcon />
              </span>
              <span>git-scm.com</span>
            </div>
            <div>
              <span>
                <LinkIcon />
              </span>
              <span>Wikipedia</span>
            </div>
            <div>
              <span>
                <RepoIcon />
              </span>
              <span>git</span>
            </div>
          </div>
          <div className="right-section-box">
            <h5>Sponsor open source projects you depend on</h5>
            <p>
              Contributors are working behind the scenes to make open source
              better for everyone—give them the help and recognition they
              deserve.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SearchPage;
