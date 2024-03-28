import React from 'react'

import Navbar from "../Dashboard/Navbar/Navbar/Navbar";
import { UnderlineNav, TextInput, Button } from "@primer/react";

import "./CreateNewIssue.css"
import Editor from './Editor';
import AvatarIcon from '../Dashboard/Navbar/Avatar/Avatar';


function CreateNewIssue() {
    return (
        <div>
            <Navbar />
            <UnderlineNav aria-label="Repository">
                <UnderlineNav.Item sx={{ color: "whitesmoke" }}>
                    Code
                </UnderlineNav.Item>
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

            <div className="issue-add-section-wrapper">
                <div className="add-issue-wrapper">
                    <div className="add-issue-left-section">
                        <AvatarIcon />
                        <div className="issue-input">
                            <h4>Title</h4>
                            <TextInput
                                sx={{
                                    marginBottom: '20px',
                                    width: "700px",
                                    height: "30px",
                                    backgroundColor: "transparent", // Make the background transparent
                                    color: "whitesmoke", // Ensure the icon color is white
                                    "&:hover": {
                                        backgroundColor: "transparent",
                                    },
                                }}
                            />
                            <h4>Add a description</h4>
                            <div className="editor-container">
                                <Editor />
                            </div>
                            <Button className='Submit-issue'>Submit New Issue</Button>
                        </div>

                    </div>

                </div>

                <div className="issue-detail-left">
                    <div className="detail-section">
                        <div className="detail">
                            <h5>Assignees</h5>
                            <div className="detail-text">
                                <p>No one assigned</p>
                            </div>
                        </div>
                        <div className="detail">
                            <h5>Labels</h5>
                            <div className="detail-text">
                                <p>None yet</p>
                            </div>
                        </div>
                        <div className="detail">
                            <h5>Projects</h5>
                            <div className="detail-text">
                                <p>None yet</p>
                            </div>
                        </div>
                        <div className="detail">
                            <h5>Projects</h5>
                            <div className="detail-text">
                                <p>None yet</p>
                            </div>
                        </div>
                        <div className="detail">
                            <h5>Projects</h5>
                            <div className="detail-text">
                                <p>None yet</p>
                            </div>
                        </div>
                        <div className="detail">
                            <h5>Projects</h5>
                            <div className="detail-text">
                                <p>None yet</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CreateNewIssue