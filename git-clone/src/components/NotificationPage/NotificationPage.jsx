import React from 'react'
import Navbar from "../Dashboard/Navbar/Navbar/Navbar";
import { ChevronDownIcon } from '@primer/octicons-react';
import { TextInput } from "@primer/react";

import './NotificationPage.css'
import NotificationSidebar from './NotificationSidebar';
import SideDrawer from "./SideDrawer"


function NotificationPage() {
    return (
        <div>
            <Navbar />
            <div className="line-break">
            </div>

            <div className="notification-wrapper">

                <div className="left-sidebar-noti">
                    <NotificationSidebar />
                </div>

                <div className="right-notification-section">

                    <div className="filter-and-search">
                        <div className="mobile-sidedrawer-btn">
                            <SideDrawer />
                        </div>

                        <button className='repo-search-btn all-btn'>
                            <p>All</p>
                            {/* <ChevronDownIcon /> */}
                        </button>
                        <button className='repo-search-btn unread-btn'>
                            <p>Unread</p>
                            {/* <ChevronDownIcon /> */}
                        </button>
                        <TextInput
                            className='text-input-notification'
                            sx={{
                                width: "100%",
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