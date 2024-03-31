import React from "react";

import { ActionMenu, ActionList } from "@primer/react";

const CreateNew = () => {
  return (
    <div className="navabar-createnew">
      <ActionMenu>
        <ActionMenu.Button
          sx={{
            backgroundColor: "black", // Set the background to black
            border: "1px solid white", // Add a white border
            color: "white", // Ensure the text color is white
            "&:hover": {
              backgroundColor: "black", // Keep the background black on hover
              borderColor: "white", // Keep the border white on hover
              color: "white", // Keep the text color white on hover
            },
          }}
        >
          +
        </ActionMenu.Button>
        <ActionMenu.Overlay width="medium">
          <ActionList
            sx={{
              backgroundColor: "rgb(40,44,52)", // Set the background to black
              color: "white", // Ensure the text color is white
            }}
          >
            <ActionList.Item
              onSelect={() => alert("Copy link clicked")}
              sx={{
                backgroundColor: "rgb(40,44,52)", // Set the background to black
                color: "white", // Ensure the text color is white
              }}
            >
              New Repository
            </ActionList.Item>
            <ActionList.Item
              onSelect={() => alert("Quote reply clicked")}
              sx={{
                backgroundColor: "rgb(40,44,52)", // Set the background to black
                color: "white", // Ensure the text color is white
              }}
            >
              Import Repository
            </ActionList.Item>
            <ActionList.Divider />
            <ActionList.Item
              onSelect={() => alert("Edit comment clicked")}
              sx={{
                backgroundColor: "rgb(40,44,52)", // Set the background to black
                color: "white", // Ensure the text color is white
              }}
            >
              New Codespace
            </ActionList.Item>
            <ActionList.Item
              onSelect={() => alert("Edit comment clicked")}
              sx={{
                backgroundColor: "rgb(40,44,52)", // Set the background to black
                color: "white", // Ensure the text color is white
              }}
            >
              New Gist
            </ActionList.Item>
            <ActionList.Divider />
            <ActionList.Item
              onSelect={() => alert("Edit comment clicked")}
              sx={{
                backgroundColor: "rgb(40,44,52)", // Set the background to black
                color: "white", // Ensure the text color is white
              }}
            >
              New organization
            </ActionList.Item>
            <ActionList.Item
              onSelect={() => alert("Edit comment clicked")}
              sx={{
                backgroundColor: "rgb(40,44,52)", // Set the background to black
                color: "white", // Ensure the text color is white
              }}
            >
              New Project
            </ActionList.Item>
            <ActionList.Divider />
            <ActionList.Item
              variant="danger"
              onSelect={() => alert("Delete file clicked")}
              sx={{
                backgroundColor: "rgb(40,44,52)", // Set the background to black
                color: "white", // Ensure the text color is white
              }}
            >
              Delete file
            </ActionList.Item>
          </ActionList>
        </ActionMenu.Overlay>
      </ActionMenu>
    </div>
  );
};

export default CreateNew;
