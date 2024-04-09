import React from "react";
import { Avatar } from "@primer/react";
import "./Avatar.css";

const AvatarIcon = () => {
  return (
    <div className="AvatarImage">
      <Avatar
        src="https://avatars.githubusercontent.com/u/92997159?v=4"
        size={45}
        onClick={() => {
          window.location.href = "/profile";
        }}
      />
    </div>
  );
};

export default AvatarIcon;
