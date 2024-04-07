import React from 'react'
import { useNavigate } from 'react-router-dom';
import Navbar from "../Dashboard/Navbar/Navbar/Navbar";
import { UnderlineNav, TextInput } from "@primer/react";

import './IssueDetails.css'
import AvatarIcon from '../Dashboard/Navbar/Avatar/Avatar';


function IssueDetails() {
    const navigate = useNavigate();

    return (
        <div>
            <Navbar />
            <UnderlineNav aria-label="Repository">
                <UnderlineNav.Item sx={{ color: "whitesmoke" }} onClick={() => navigate('/repoview')}>
                    Code
                </UnderlineNav.Item>
                <UnderlineNav.Item aria-current="page" sx={{ color: "whitesmoke" }} onClick={() => navigate('/issue')}>
                    Issues
                </UnderlineNav.Item>
                <UnderlineNav.Item sx={{ color: "whitesmoke" }} onClick={() => navigate('/pullrequest')}>
                    Pull Requests
                </UnderlineNav.Item>
                <UnderlineNav.Item sx={{ color: "whitesmoke" }} onClick={() => navigate('/repoSettings')}>
                    Settings
                </UnderlineNav.Item>
            </UnderlineNav>

            <div className="issue-detail">
                <div className="issue-text-info">
                    <div>
                        <h1>Issue Title</h1>
                    </div>

                    <div className="issue-status-section">
                        <div className='open'>Open</div>
                        <div className='issue-status-text'>
                            Vishalk91-4 opened this issue 2 days ago · 0 comments
                        </div>
                    </div>
                </div>

                <div className="new-issue">
                    <button onClick={() => navigate('/addIssue')}>New Issue</button>
                </div>
            </div>

            <div className="line-break" style={{ margin: '20px' }}>
            </div>

            <div className="issue-detail-section-wrapper">
                <div className="issue-detail-right">
                    <div className="issue-message">

                        <AvatarIcon />
                        <div className="text-box">
                            <div className="info-section">
                                <p>Vishalk91-4 commented 2 days ago</p>
                            </div>
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

export default IssueDetails