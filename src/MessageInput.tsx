import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";

function MessageInput({ send }: { send: (val: string) => void }) {
  const [value, setValue] = useState("");
  return (
    <Grid
      sx={{
        fontFamily: "Nunito",
        width: "99.5%",
        position: "absolute",
        bottom: 10,
      }}
    >
      <TextField
        id="outlined-basic"
        variant="outlined"
        placeholder="Type your message here..."
        value={value}
        onChange={(e) => setValue(e.target.value)}
        sx={{
          "& .MuiInputLabel-root": { color: "white" }, //styles the label
          "& .MuiOutlinedInput-root": {
            "& > fieldset": { borderColor: "white" },
          },

          "& .MuiOutlinedInput-root.Mui-focused": {
            "& > fieldset": {
              borderColor: "green",
            },
          },

          "& .MuiOutlinedInput-root:hover": {
            "& > fieldset": {
              borderColor: "green",
            },
          },
          width: "93%",
        }}
        inputProps={{
          style: {
            padding: 10,
            color: "white",
          },
        }}
      />{" "}
      <Button
        variant="contained"
        color="success"
        onClick={() => send(value)}
        sx={{ width: "6%", py: 1.2 }}
      >
        Send
      </Button>
    </Grid>
  );
}

export default MessageInput;
