import { UnreadIcon } from "@primer/octicons-react";
import { IconButton } from "@primer/react";
import React from "react";

const NotiButton = () => {
  return (
    <div>
      <IconButton
        icon={UnreadIcon}
        onClick={() => {
          window.location.href = "/notification";
        }}
        sx={{
          backgroundColor: "transparent", // Make the background transparent
          border: "1px solid white", // Add a white border
          color: "white", // Ensure the icon color is white
          "&:hover": {
            backgroundColor: "transparent", // Optional: Add a hover effect
          },
        }}
        aria-label="Notification"
      />
    </div>
  );
};

export default NotiButton;
