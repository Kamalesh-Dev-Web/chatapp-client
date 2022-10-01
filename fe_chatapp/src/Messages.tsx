import React from "react";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";

function Messages({ messages }: { messages: string[] }) {
  const current = new Date();
  const date = current.toLocaleString();

  return (
    <div>
      {messages.map((message, index) => (
        <Grid
          key={index}
          sx={{
            width: "30%",
            display: "flex",
            flexDirection: "column",
            background: "white",
            color: "green",
            py: 1,
            borderRadius: "7px",
            my: 2,
          }}
        >
          <Box sx={{ width: "70%", ml: 1 }}>{message}</Box>
          <Box
            sx={{
              fontSize: "10px",
              marginLeft: "75%",
            }}
          >
            {date}
          </Box>
        </Grid>
      ))}
    </div>
  );
}

export default Messages;
