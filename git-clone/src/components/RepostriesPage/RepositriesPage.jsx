import React from "react";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Navbar from "../Dashboard/Navbar/Navbar/Navbar";
import { UnderlineNav } from "@primer/react";
import {
  BookIcon,
  RepoIcon,
  PivotColumnIcon,
  ChevronDownIcon,
  PackageIcon,
  StarIcon,
  EyeIcon,
} from "@primer/octicons-react";
import { TextInput } from "@primer/react";
import "./RepositoriesPage.css";

function RepositriesPage() {
  const navigate = useNavigate();

  const [repos, setRepos] = useState([]); // State to store fetched repositories

  useEffect(() => {
    const fetchRepos = async () => {
      try {
        const response = await axios.get(
          "https://backendgit-1.onrender.com/repos"
        );
        setRepos(response.data); // Set the fetched repositories
      } catch (error) {
        console.error("Failed to fetch repositories:", error);
      }
    };
    fetchRepos();
  }, []);

  return (
    <div>
      <Navbar />

      <UnderlineNav aria-label="Repository">
        <UnderlineNav.Item
          onClick={() => navigate("/profile")}
          icon={BookIcon}
          sx={{
            backgroundColor: "transparent", // Make the background transparent
            color: "whitesmoke", // Ensure the icon color is white
            "&:hover": {
              backgroundColor: "transparent",
            },
          }}
        >
          Overview
        </UnderlineNav.Item>
        <UnderlineNav.Item
          aria-current="page"
          icon={RepoIcon}
          sx={{
            backgroundColor: "transparent", // Make the background transparent
            color: "whitesmoke", // Ensure the icon color is white
            "&:hover": {
              backgroundColor: "transparent",
            },
          }}
        >
          Repositories
        </UnderlineNav.Item>
        <UnderlineNav.Item
          icon={PivotColumnIcon}
          sx={{
            backgroundColor: "transparent", // Make the background transparent
            color: "whitesmoke", // Ensure the icon color is white
            "&:hover": {
              backgroundColor: "transparent",
            },
          }}
        >
          Projects
        </UnderlineNav.Item>
        <UnderlineNav.Item
          icon={PackageIcon}
          sx={{
            backgroundColor: "transparent", // Make the background transparent
            color: "whitesmoke", // Ensure the icon color is white
            "&:hover": {
              backgroundColor: "transparent",
            },
          }}
        >
          Packages
        </UnderlineNav.Item>
      </UnderlineNav>

      <div className="repo-page-wrapper">
        <div className="user-profile-section">
          <div className="profile-image"></div>

          <div className="name">
            <h3>Name</h3>
            <p>username</p>
          </div>

          <button className="follow-btn">Follow</button>

          <div className="follower">
            <p>10 Follower</p>
            <p>3 Following</p>
          </div>
        </div>

        <div className="repo-section">
          <div className="repo-search-section">
            <TextInput
              sx={{
                width: "50%",
                backgroundColor: "transparent", // Make the background transparent
                color: "whitesmoke", // Ensure the icon color is white
                "&:hover": {
                  backgroundColor: "transparent",
                },
              }}
              placeholder="Find a repository..."
            />

            <button className="repo-search-btn">
              <p>Type</p>
              <ChevronDownIcon />
            </button>
            <button className="repo-search-btn">
              <p>Language</p>
              <ChevronDownIcon />
            </button>
            <button className="repo-search-btn">
              <p>Sort</p>
              <ChevronDownIcon />
            </button>
            <button
              className="repo-search-btn"
              onClick={() => navigate("/createRepo")}
              style={{ backgroundColor: "#238737" }}
            >
              <p>New</p>
            </button>
          </div>

          {repos.map((repo) => (
            <div key={repo._id} className="repo-item-wrapper">
              <div className="repo-info">
                <h3
                  onClick={() => navigate(`/repoview/${repo._id}`)}
                  className="repository-name"
                >
                  {repo.name}
                </h3>
                <p className="description">{repo.content[0]}</p>

                <div className="repo-info-section">
                  <div className="language-item">
                    <div
                      style={{
                        backgroundColor: "green",
                        width: "10px",
                        height: "10px",
                        borderRadius: "50%",
                      }}
                    ></div>
                    <p>HTML</p>
                  </div>

                  <div className="description">
                    Updated {/* Adjust based on your API's response */}
                  </div>
                </div>
              </div>

              <div className="repo-acftions">
                <button className="repo-star-btn">
                  <StarIcon />
                  <p>Star</p>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default RepositriesPage;
