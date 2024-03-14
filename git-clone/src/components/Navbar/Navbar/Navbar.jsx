import React from "react";
import CreateNew from "../CreateNew/CreateNewButton";
import Sidebar from "../../Sidebar/Sidebar";
import Searchbar from "../Searchbar/Searchbar";

import Issues from "../Issues/Issues";
import Prbutton from "../PullRequest/Prbutton";
import NotiButton from "../Notificationbutton/NotiButton";
import "./Navbar.css";
import AvatarIcon from "../Avatar/Avatar";
import { ListUnorderedIcon } from "@primer/octicons-react";

const Navbar = () => {
  return (
    <div className="navbarMain">
      <div className="leftnva">
        <div className="logo">
          <h2>Github</h2>
        </div>
      </div>

      <div className="rightnav">
        <Searchbar />
        <div className="verticalLine">|</div>
        <div className="icons">
          <CreateNew />
          <Issues />
          <Prbutton />
          <NotiButton />
          <AvatarIcon />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
