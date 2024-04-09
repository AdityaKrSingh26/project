import React from 'react'
import { useNavigate } from 'react-router-dom'
import { UnderlineNav, TextInput, Button, Textarea } from "@primer/react";
import Navbar from "../Dashboard/Navbar/Navbar/Navbar";
import AvatarIcon from '../Dashboard/Navbar/Avatar/Avatar';
import { FileIcon } from '@primer/octicons-react'

import "./UploadFile.css"

function UploadFile() {
    const navigate = useNavigate()

    return (
        <div>
            <Navbar />

            <UnderlineNav aria-label="Repository">
                <UnderlineNav.Item aria-current="page" sx={{ color: "whitesmoke" }} onClick={() => navigate('/repoView')}>
                    Code
                </UnderlineNav.Item>
                <UnderlineNav.Item sx={{ color: "whitesmoke" }} onClick={() => navigate('/issue')}>
                    Issues
                </UnderlineNav.Item>
                <UnderlineNav.Item sx={{ color: "whitesmoke" }} onClick={() => navigate('/pullrequest')}>
                    Pull Requests
                </UnderlineNav.Item>
                <UnderlineNav.Item sx={{ color: "whitesmoke" }} onClick={() => navigate('/repoSettings')}>
                    Settings
                </UnderlineNav.Item>
            </UnderlineNav>

            <div className="upload-file-section">
                <FileIcon size={40} />
                <h3>
                    Drag files here to add them to your repository
                </h3>
                <p>or</p>
                <label htmlFor="file" style={{ color: "blue" }}>choose a file</label>
                <input type="file" name="file" id="file" className='file-input' />
            </div>


            <div className="add-file-text add-issue-left-section">
                <AvatarIcon />
                <div className="issue-input">
                    <h4>Commit Changes</h4>
                    <TextInput className='text-input-addIssue'
                        placeholder='Add files via upload'
                        sx={{
                            marginBottom: '20px',
                            width: "90%",
                            height: "30px",
                            backgroundColor: "transparent", // Make the background transparent
                            color: "whitesmoke", // Ensure the icon color is white
                            "&:hover": {
                                backgroundColor: "transparent",
                            },
                        }}
                    />
                    <div className="editor-container">
                        <Textarea
                            placeholder='Add an optional extended description...'
                            sx={{
                                marginBottom: '20px',
                                width: "90%",
                                height: "100px",
                                backgroundColor: "transparent", // Make the background transparent
                                color: "whitesmoke", // Ensure the icon color is white
                                "&:hover": {
                                    backgroundColor: "transparent",
                                },
                            }}
                        />
                    </div>

                    <div className="check-box-input" style={{ marginTop: "10px" }}>
                        <input type="checkbox" name="" />
                        <div className="checkbox-text">
                            <p>Commit directly to the main branch.</p>
                        </div>
                    </div>
                    <div className="check-box-input" style={{ marginTop: "10px" }}>
                        <input type="checkbox" name="" />
                        <div className="checkbox-text">
                            <p>Create a new branch for this commit and start a pull request. Learn more about pull requests.</p>
                        </div>
                    </div>


                    <div className="file-upload-btn-grp">
                        <Button
                            className='Submit-issue'
                        >
                            Commit changes
                        </Button>

                        <button
                            className='btn'
                            style={{
                                // height: '30px',
                                marginLeft: '0px',
                                color: "red"
                            }}>
                            Cancel
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default UploadFile