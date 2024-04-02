import React from "react";

import Navbar from "../Dashboard/Navbar/Navbar/Navbar";
import { UnderlineNav, TextInput } from "@primer/react";
import {
  ChevronDownIcon,
  IssueOpenedIcon,
  MilestoneIcon,
  TagIcon,
} from "@primer/octicons-react";

import "./IssueView.css";

function IssueView() {
  return (
    <div>
      <Navbar />
      <UnderlineNav aria-label="Repository">
        <UnderlineNav.Item sx={{ color: "whitesmoke" }}>Code</UnderlineNav.Item>
        <UnderlineNav.Item aria-current="page" sx={{ color: "whitesmoke" }}>
          Issues
        </UnderlineNav.Item>
        <UnderlineNav.Item sx={{ color: "whitesmoke" }}>
          Pull Requests
        </UnderlineNav.Item>
        <UnderlineNav.Item sx={{ color: "whitesmoke" }}>
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
            <button className="new-pr-btn">
              <p>New Issue</p>
              {/* <ChevronDownIcon /> */}
            </button>
          </div>
        </div>

        <div className="pr-list-section">
          <div className="text-info">
            <IssueOpenedIcon size={24} />
            <h3>Welcome to issues!</h3>
            <p className="description">
              Issues are used to track todos, bugs, feature requests, and more.
              As issues are created, they’ll appear here in a searchable and
              filterable list. To get started, you should create an issue.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default IssueView;
