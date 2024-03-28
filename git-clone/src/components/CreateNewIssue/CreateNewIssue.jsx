import React from 'react'


import "./CreateNewIssue.css"

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
                <div className="add-issue-left-section">

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