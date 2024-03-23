import React from 'react'

import { BookIcon, PlusCircleIcon, LinkIcon, RepoIcon, CodeIcon, BugIcon, GitPullRequestIcon } from '@primer/octicons-react';

import "./SearchPage.css"
import Navbar from '../Dashboard/Navbar/Navbar/Navbar'

function SearchPage() {
    return (
        <div className='search-page-wrapper'>
            <Navbar />
            <div className="line-break">
            </div>

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

                    <div className="divider">
                    </div>

                    <div className="laguages-menu">
                        <div className="filter-header">
                            <h4>Languages</h4>
                        </div>
                        <div className="filter-body">
                            <div className="language-item">
                                <div
                                    style={{
                                        backgroundColor: 'green',
                                        width: '10px',
                                        height: '10px',
                                        borderRadius: '50%'
                                    }}>
                                </div>
                                <p>HTML</p>
                            </div>
                            <div className="language-item">
                                <div
                                    style={{
                                        backgroundColor: 'yellow',
                                        width: '10px',
                                        height: '10px',
                                        borderRadius: '50%'
                                    }}>
                                </div>
                                <p>JavaScript</p>
                            </div>
                            <div className="language-item">
                                <div
                                    style={{
                                        backgroundColor: 'lightblue',
                                        width: '10px',
                                        height: '10px',
                                        borderRadius: '50%'
                                    }}>
                                </div>
                                <p>CSS</p>
                            </div>
                            <div className="language-item">
                                <div
                                    style={{
                                        backgroundColor: 'red',
                                        width: '10px',
                                        height: '10px',
                                        borderRadius: '50%'
                                    }}>
                                </div>
                                <p>Ruby</p>
                            </div>
                            <div className="language-item">
                                <div
                                    style={{
                                        backgroundColor: 'white',
                                        width: '10px',
                                        height: '10px',
                                        borderRadius: '50%'
                                    }}>
                                </div>
                                <p>Java</p>
                            </div>
                            <div className="language-item">
                                <div
                                    style={{
                                        backgroundColor: 'blue',
                                        width: '10px',
                                        height: '10px',
                                        borderRadius: '50%'
                                    }}>
                                </div>
                                <p>Pyhton</p>
                            </div>
                        </div>
                    </div>

                    <div className="divider">
                    </div>

                    <div className="advanced-menu">
                        <div className="filter-header">
                            <h4>Advanced</h4>
                        </div>
                        <div className="filter-body">
                            <div className="filter-item">
                                <PlusCircleIcon />
                                <p>Owner</p>
                            </div>
                            <div className="filter-item">
                                <PlusCircleIcon />
                                <p>Size</p>
                            </div>
                            <div className="filter-item">
                                <PlusCircleIcon />
                                <p>Number Of Followers</p>
                            </div>
                            <div className="filter-item">
                                <PlusCircleIcon />
                                <p>Number of Forks</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="search-result-section">
                    <div className="search-result">
                        <div className="repo-name">
                            <h5>Repositry Name</h5>
                        </div>
                        <div className="description">
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat, dolores.</p>
                            <div className="language-item">
                                <div
                                    style={{
                                        backgroundColor: 'green',
                                        width: '10px',
                                        height: '10px',
                                        borderRadius: '50%'
                                    }}>
                                </div>
                                <p>HTML</p>
                            </div>
                        </div>
                    </div>
                    <div className="search-result">
                        <div className="repo-name">
                            <h5>Repositry Name</h5>
                        </div>
                        <div className="description">
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat, dolores.</p>
                            <div className="language-item">
                                <div
                                    style={{
                                        backgroundColor: 'green',
                                        width: '10px',
                                        height: '10px',
                                        borderRadius: '50%'
                                    }}>
                                </div>
                                <p>HTML</p>
                            </div>
                        </div>
                    </div>
                    <div className="search-result">
                        <div className="repo-name">
                            <h5>Repositry Name</h5>
                        </div>
                        <div className="description">
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat, dolores.</p>
                            <div className="language-item">
                                <div
                                    style={{
                                        backgroundColor: 'green',
                                        width: '10px',
                                        height: '10px',
                                        borderRadius: '50%'
                                    }}>
                                </div>
                                <p>HTML</p>
                            </div>
                        </div>
                    </div>
                    <div className="search-result">
                        <div className="repo-name">
                            <h5>Repositry Name</h5>
                        </div>
                        <div className="description">
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat, dolores.</p>
                            <div className="language-item">
                                <div
                                    style={{
                                        backgroundColor: 'green',
                                        width: '10px',
                                        height: '10px',
                                        borderRadius: '50%'
                                    }}>
                                </div>
                                <p>HTML</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="right-section">
                    <div className="right-section-box">
                        <h5>Git</h5>
                        <p>Git is the most widely used version control system.</p>
                        <div>
                            <span><LinkIcon /></span>
                            <span>git-scm.com</span>
                        </div>
                        <div>
                            <span><LinkIcon /></span>
                            <span>Wikipedia</span>
                        </div>
                        <div>
                            <span><RepoIcon /></span>
                            <span>git</span>
                        </div>
                    </div>
                    <div className="right-section-box">
                        <h5>Sponsor open source projects you depend on</h5>
                        <p>Contributors are working behind the scenes to make open source better for everyone—give them the help and recognition they deserve.</p>
                    </div>
                </div>


            </div>
        </div >
    )
}

export default SearchPage