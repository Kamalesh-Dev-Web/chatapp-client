import "./App.css";
import App from "./App";
import SignUp from "./components/SignUp";
import SignIn from "./components/SignIn";

import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { Grid } from "@mui/material";

function Container() {
  return (
    <Grid sx={{ background: "#242424", color: "white" }}>
      <Router>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/signin" element={<SignIn />} />
        </Routes>
      </Router>
    </Grid>
  );
}

export default Container;
