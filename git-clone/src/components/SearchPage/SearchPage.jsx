import React from 'react'
import { useState, useEffect } from 'react';
import Navbar from '../Dashboard/Navbar/Navbar/Navbar'
import Drawer from '@mui/material/Drawer';
import FilterMenu from './FilterMenu';
import { LinkIcon, RepoIcon } from '@primer/octicons-react';

import "./SearchPage.css"


function SearchPage() {

    const [open, setOpen] = useState(false);

    const toggleDrawer = (newOpen) => () => {
        setOpen(newOpen);
    };

    return (
        <div className='search-page-wrapper'>
            <Navbar />
            <div className="line-break">
            </div>

            <div className="filter-sidedrawer">
                <button className="btn" onClick={toggleDrawer(true)}>Filter</button>
                <Drawer open={open} onClose={toggleDrawer(false)}>
                    <FilterMenu />
                </Drawer>
            </div>

            <div className="search-main-section">

                <div className="filter-menu">
                    <FilterMenu />
                </div>

                <div className="search-result-wrapper">
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


            </div>
        </div >
    )
}

export default SearchPage