import React from "react";
import { Route, Routes } from "react-router-dom";
import Homedata from "./Homedata";

import Profile from "../Profile/Profile";
import Rightpage from "./Rightpage";
import { Grid } from "@mui/material";
import Statuscomponent from "./StatusComponents";
export default function Instaview() {
  return (
    <div>
      <Grid container spacing={2}>
        <Grid item xs={9}>
          <Statuscomponent />
          <Homedata />
        </Grid>
        <Grid item xs={3}>
          <Rightpage />
        </Grid>
      </Grid>
    </div>
  );
}
