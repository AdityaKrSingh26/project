import React from 'react'
import Navbar from "../Dashboard/Navbar/Navbar/Navbar";
import { BookmarkIcon, CheckCircleFillIcon, InboxIcon, ChevronDownIcon } from '@primer/octicons-react';
import { UnderlineNav, TextInput } from "@primer/react";

import './NotificationPage.css'

function NotificationPage() {
    return (
        <div>
            <Navbar />
            <div className="line-break">
            </div>

            <div className="notification-wrapper">

                <div className="left-notifiaction-section">

                    <div className="btn-grp">
                        <button className='inbox'>
                            <InboxIcon />
                            <p>Inbox</p>
                        </button>
                        <button className='saved'>
                            <BookmarkIcon />
                            <p>Saved</p>
                        </button>
                        <button className='done'>
                            <CheckCircleFillIcon />
                            <p>Done</p>
                        </button>
                    </div>
                    <div className="line-break">
                    </div>

                    <div className="notification-filter-section">
                        <div className="filter-text">
                            <p>Filter</p>
                        </div>

                        <div className="filter-btn-grp">
                            <button className='filter-btn'>
                                <p>Assigned</p>
                            </button>
                            <button className='filter-btn'>
                                <p>Participating</p>
                            </button>
                            <button className='filter-btn'>
                                <p>Mentioned</p>
                            </button>
                            <button className='filter-btn'>
                                <p>Team Mentioned</p>
                            </button>
                            <button className='filter-btn'>
                                <p>Review Requested</p>
                            </button>
                        </div>
                    </div>
                </div>

                <div className="right-notification-section">
                    <div className="filter-and-search">
                        <button className='repo-search-btn'>
                            <p>All</p>
                            {/* <ChevronDownIcon /> */}
                        </button>
                        <button className='repo-search-btn'>
                            <p>Unread</p>
                            {/* <ChevronDownIcon /> */}
                        </button>
                        <TextInput
                            sx={{
                                width: "500px",
                                height: "30px",
                                border: "0.5px solid gray",
                                backgroundColor: "transparent", // Make the background transparent
                                color: "whitesmoke", // Ensure the icon color is white
                                "&:hover": {
                                    backgroundColor: "transparent"
                                },
                            }}
                            placeholder="is:pr is:open "
                        />
                        <button className='repo-search-btn grp-by'>
                            <p>Group By: Date</p>
                            <ChevronDownIcon />
                        </button>
                    </div>

                    <div className="notification-section">
                        <div className="select-section">
                            <input type="checkbox" />
                            <p>Select All</p>
                        </div>

                        <div className="message-section">
                            <div className="message">
                                <input type="checkbox" />
                                <div className="text-section">
                                    <h5>Fix the bug</h5>
                                    {/* <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis, sed!</p> */}
                                </div>
                            </div>
                            <div className="message">
                                <input type="checkbox" />
                                <div className="text-section">
                                    <h5>Fix the bug</h5>
                                    {/* <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis, sed!</p> */}
                                </div>
                            </div>
                            <div className="message">
                                <input type="checkbox" />
                                <div className="text-section">
                                    <h5>Fix the bug</h5>
                                    {/* <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis, sed!</p> */}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default NotificationPage