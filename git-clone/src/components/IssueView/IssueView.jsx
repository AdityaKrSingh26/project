import React from "react";
import { useNavigate } from "react-router-dom";

import Navbar from "../Dashboard/Navbar/Navbar/Navbar";
import { UnderlineNav, TextInput } from "@primer/react";
import {
  ChevronDownIcon,
  CommentDiscussionIcon,
  IssueOpenedIcon,
  MilestoneIcon,
  TagIcon,
} from "@primer/octicons-react";

import "./IssueView.css";

function IssueView() {
  const navigate = useNavigate();


  return (
    <div>
      <Navbar />
      <UnderlineNav aria-label="Repository">
        <UnderlineNav.Item sx={{ color: "whitesmoke" }} onClick={() => navigate('/repoview')}>
          Code
        </UnderlineNav.Item>
        <UnderlineNav.Item aria-current="page" sx={{ color: "whitesmoke" }}>
          Issues
        </UnderlineNav.Item>
        <UnderlineNav.Item sx={{ color: "whitesmoke" }} onClick={() => navigate('/pullrequest')}>
          Pull Requests
        </UnderlineNav.Item>
        <UnderlineNav.Item sx={{ color: "whitesmoke" }} onClick={() => navigate('/repoSettings')}>
          Settings
        </UnderlineNav.Item>
      </UnderlineNav>

      <div className="pull-request-wrapper">
        <div className="pr-search-section">

          <div className="filter-and-search" style={{ width: "100%" }}>
            <button className="repo-search-btn">
              <p>Filter</p>
              <ChevronDownIcon />
            </button>
            <TextInput
              sx={{
                width: "90%",
                height: "30px",
                backgroundColor: "transparent", // Make the background transparent
                color: "whitesmoke", // Ensure the icon color is white
                "&:hover": {
                  backgroundColor: "transparent",
                },
              }}
              placeholder="is:issue is:open "
            />
          </div>

          <div className="pr-btn-section">
            <button className="repo-search-btn">
              <TagIcon />
              <p>Label</p>
            </button>
            <button className="repo-search-btn">
              <MilestoneIcon />
              <p>Milestone</p>
            </button>
            <button className="new-pr-btn" onClick={() => navigate('/addIssue')}>
              <p>New Issue</p>
              {/* <ChevronDownIcon /> */}
            </button>
          </div>
        </div>

        {/* <div className="pr-list-section">
          <div className="text-info">
            <IssueOpenedIcon size={24} />
            <h3>Welcome to issues!</h3>
            <p className="description">
              Issues are used to track todos, bugs, feature requests, and more.
              As issues are created, they’ll appear here in a searchable and
              filterable list. To get started, you should create an issue.
            </p>
          </div>
        </div> */}


        <div className="pr-list-box">
          <div className="boxupper">
            <div style={{ display: "flex", justifyContent: "center", alignItems: "center", gap: "10px" }}>
              <IssueOpenedIcon />
              <h5>62 open</h5>
            </div>
          </div>

          <div className="boxlower">

            <div className="lowerbox-card">
              <div className="lowerbox-card-text">
                <IssueOpenedIcon />
                <p>Ability to increase the downward speed of the ball in the Fraction Bounce Activity</p>
              </div>
              <CommentDiscussionIcon />
            </div>
            <div className="line-break"></div>


            <div className="lowerbox-card">
              <div className="lowerbox-card-text">
                <IssueOpenedIcon />
                <p>Ability to increase the downward speed of the ball in the Fraction Bounce Activity</p>
              </div>
              <CommentDiscussionIcon />
            </div>
            <div className="line-break"></div>


            <div className="lowerbox-card">
              <div className="lowerbox-card-text">
                <IssueOpenedIcon />
                <p>Ability to increase the downward speed of the ball in the Fraction Bounce Activity</p>
              </div>
              <CommentDiscussionIcon />
            </div>
            <div className="line-break"></div>


          </div>
        </div>



      </div>
    </div>
  );
}

export default IssueView;
