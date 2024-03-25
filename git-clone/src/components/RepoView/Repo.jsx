import React, { useState, useEffect } from "react";
import {
  PageLayout,
  Button,
  Label,
  Avatar,
  Text,
  Octicon,
  Heading,
  CounterLabel,
  IconButton,
} from "@primer/react";
import { ActionMenu, ActionList } from "@primer/react";
import Navbar from "../Dashboard/Navbar/Navbar/Navbar";
import { Header } from "@primer/react";
import { ProgressBar } from "@primer/react";
import { UnderlineNav } from "@primer/react";
import { PageHeader } from "@primer/react/drafts";
import {
  BookIcon,
  CheckIcon,
  CommitIcon,
  EyeIcon,
  FeedHeartIcon,
  FileDirectoryFillIcon,
  FileIcon,
  GitPullRequestIcon,
  GraphIcon,
  HistoryIcon,
  ReadIcon,
  StarIcon,
} from "@primer/octicons-react";
import { Table } from "@primer/react/lib-esm/DataTable/Table";
import "./Repo.css";
import CreateNew from "../Dashboard/Navbar/CreateNew/CreateNewButton";

const Repo = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [componentCount, setComponentCount] = useState(10);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  // Mock data
  const mockData = [
    {
      type: "folder",
      folderName: "src",
      lastCommitText: "Added new component",
      lastCommitTime: "2 months ago",
    },
    {
      type: "folder",
      folderName: "public",
      lastCommitText: "Updated index.html",
      lastCommitTime: "1 month ago",
    },
    {
      type: "folder",
      folderName: "node_modules",
      lastCommitText: "Updated dependencies",
      lastCommitTime: "3 months ago",
    },
    {
      type: "file",
      folderName: "package.json",
      lastCommitText: "Updated package version",
      lastCommitTime: "1 month ago",
    },
    {
      type: "file",
      folderName: "README.md",
      lastCommitText: "Updated documentation",
      lastCommitTime: "2 weeks ago",
    },
    {
      type: "file",
      folderName: "README.md",
      lastCommitText: "Updated documentation",
      lastCommitTime: "2 weeks ago",
    },
    {
      type: "file",
      folderName: "README.md",
      lastCommitText: "Updated documentation",
      lastCommitTime: "2 weeks ago",
    },
    {
      type: "file",
      folderName: "README.md",
      lastCommitText: "Updated documentation",
      lastCommitTime: "2 weeks ago",
    },
    {
      type: "file",
      folderName: "README.md",
      lastCommitText: "Updated documentation",
      lastCommitTime: "2 weeks ago",
    },
    {
      type: "file",
      folderName: "README.md",
      lastCommitText: "Updated documentation",
      lastCommitTime: "2 weeks ago",
    },
    {
      type: "file",
      folderName: "README.md",
      lastCommitText: "Updated documentation",
      lastCommitTime: "2 weeks ago",
    },
    {
      type: "file",
      folderName: "README.md",
      lastCommitText: "Updated documentation",
      lastCommitTime: "2 weeks ago",
    },
    {
      type: "file",
      folderName: "README.md",
      lastCommitText: "Updated documentation",
      lastCommitTime: "2 weeks ago",
    },
    {
      type: "contributors",
      contributors: [
        {
          name: "John Doe",
          avatarUrl: "https://avatars.githubusercontent.com/u/92997159?v=4",
        },
        {
          name: "Joe Don",
          avatarUrl: "https://avatars.githubusercontent.com/u/92997159?v=4",
        },
        // Add more contributors as needed
      ],
    },
    // Add more mock data as needed
  ];

  return (
    <div>
      <Navbar />
      <UnderlineNav aria-label="Repository">
        <UnderlineNav.Item aria-current="page" sx={{ color: "whitesmoke" }}>
          Code
        </UnderlineNav.Item>
        <UnderlineNav.Item sx={{ color: "whitesmoke" }}>
          Issues
        </UnderlineNav.Item>
        <UnderlineNav.Item sx={{ color: "whitesmoke" }}>
          Pull Requests
        </UnderlineNav.Item>
        <UnderlineNav.Item sx={{ color: "whitesmoke" }}>
          Settings
        </UnderlineNav.Item>
      </UnderlineNav>
      {isLoading ? (
        <ProgressBar progress={50} aria-label="Upload test.png" />
      ) : (
        <div className="bodyRepo">
          <PageLayout>
            <PageLayout.Header
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                flexDirection: "row",
              }}
            >
              <div className="header">
                <div className="titleHead">
                  <Header.Item>
                    <PageHeader>
                      <PageHeader.TitleArea variant={"large"}>
                        <PageHeader.LeadingVisual></PageHeader.LeadingVisual>
                        <PageHeader.Title>Repository Title</PageHeader.Title>
                        <PageHeader.TrailingVisual>
                          <Label>Public</Label>
                        </PageHeader.TrailingVisual>
                      </PageHeader.TitleArea>
                    </PageHeader>
                  </Header.Item>
                </div>

                <div className="downloadButton">
                  <ActionMenu>
                    <ActionMenu.Button
                      sx={{
                        backgroundColor: "green", // Set the background to black
                        color: "white", // Ensure the text color is white
                      }}
                    >
                      Code
                    </ActionMenu.Button>
                    <ActionMenu.Overlay width="small">
                      <ActionList
                        sx={{
                          backgroundColor: "rgb(40,44,52)", // Set the background to black
                          color: "white", // Ensure the text color is white
                        }}
                      >
                        <ActionList.Item
                          onSelect={() => alert("Download link clicked")}
                          sx={{
                            backgroundColor: "rgb(40,44,52)", // Set the background to black
                            color: "white", // Ensure the text color is white
                          }}
                        >
                          Download as zip
                        </ActionList.Item>
                      </ActionList>
                    </ActionMenu.Overlay>
                  </ActionMenu>
                </div>
              </div>
            </PageLayout.Header>

            <PageLayout.Content
              sx={{
                height: 500,
                marginBottom: 250,
              }}
            >
              <div className="headerTable">
                <div className="headerTableLeft">
                  <div className="avatarHead">
                    <Avatar
                      src="https://avatars.githubusercontent.com/u/92997159?v=4"
                      size={30}
                    />
                  </div>
                  <div className="HeaderLeftText">
                    <Text sx={{ padding: "10px" }}>Prasun60</Text>
                    <Text sx={{ paddings: "10px", marginLeft: "30px" }}>
                      Latest Commit
                      <Octicon
                        icon={CheckIcon}
                        size={32}
                        color="success.fg"
                        sx={{ mr: 2 }}
                      />
                    </Text>
                  </div>
                </div>
                <div className="headerTableRight">
                  <Octicon icon={HistoryIcon} size={16} sx={{ mr: 2 }} />

                  <Text sx={{ padding: "30px" }}>4 months ago</Text>
                </div>
              </div>

              <div className="tableBody">
                {mockData.map((item, index) => (
                  <div key={index} className="rows">
                    <div className="leftTextBody">
                      {item.type === "folder" ? (
                        <FileDirectoryFillIcon size={16} />
                      ) : (
                        <FileIcon size={16} />
                      )}
                      {item.folderName}
                    </div>
                    <div className="centreTextBody">{item.lastCommitText}</div>
                    <div className="rightTextBody">{item.lastCommitTime}</div>
                  </div>
                ))}
              </div>
            </PageLayout.Content>
            <PageLayout.Pane sx={{}}>
              <div className="About">
                <Heading sx={{ color: "whitesmoke" }}>About</Heading>
                <div class="f4 my-3 color-fg-muted text-italic">
                  No description, website, or topics provided.
                </div>
                <div className="AboutText">
                  <div className="readmeIcon">
                    <a href="#readme" className="iconLink">
                      <BookIcon />
                      <Text>Readme</Text>
                    </a>
                  </div>
                  <div className="ActivityIcon">
                    <a href="#activity" className="iconLink">
                      <GraphIcon size={16} />
                      <Text>Activity</Text>
                    </a>
                  </div>
                  <div className="StarIcon">
                    <a href="#star" className="iconLink">
                      <Octicon icon={StarIcon} />
                      <Text>Star</Text>
                    </a>
                  </div>
                  <div className="WatchIcon">
                    <a href="#watch" className="iconLink">
                      <Octicon icon={EyeIcon} />
                      <Text>Watch</Text>
                    </a>
                  </div>
                </div>
              </div>
              <hr />
              <div className="About">
                <Heading sx={{ color: "whitesmoke" }}>Releases</Heading>
                <div style={{ paddingTop: "10px", color: "gray" }}>
                  No releases published
                </div>
              </div>
              <hr />
              <div className="About">
                <div className="CountContri">
                  <Heading sx={{ color: "whitesmoke" }}>Contributors</Heading>
                  <CounterLabel scheme="primary">
                    {
                      mockData.find((item) => item.type === "contributors")
                        .contributors.length
                    }
                  </CounterLabel>
                </div>
                <div
                  style={{ paddingTop: "10px", color: "gray" }}
                  className="ContributorList"
                >
                  {mockData
                    .find((item) => item.type === "contributors")
                    .contributors.map((contributor, idx) => (
                      <div key={idx} className="Contributors">
                        <Avatar src={contributor.avatarUrl} size={30} />
                        <Text>{contributor.name}</Text>
                      </div>
                    ))}
                </div>
              </div>
            </PageLayout.Pane>
            <PageLayout.Footer></PageLayout.Footer>
          </PageLayout>
        </div>
      )}
    </div>
  );
};

export default Repo;
