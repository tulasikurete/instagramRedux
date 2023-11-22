import React from "react";
import Box from "@mui/material/Box";
import FormControl from "@mui/material/FormControl";
import FilledInput from "@mui/material/FilledInput";
import FormHelperText from "@mui/material/FormHelperText";
import Input from "@mui/material/Input";
import InputLabel from "@mui/material/InputLabel";
import OutlinedInput from "@mui/material/OutlinedInput";
import Button from "@mui/material/Button";
import { Grid } from "@mui/material";
import Paper from "@mui/material/Paper";

import Rightpage from "./Rightpage";
import useMediaQuery from "@mui/material/useMediaQuery";

import Menu from "./Menu";
import Statuscomponent from "./StatusComponents";
import Homedata from "./Homedata";
import { Router } from "@mui/icons-material";
import { Route, Routes } from "react-router-dom";
import Instaview from "./instaview";
import Profile from "../Profile/Profile";

export default function Instagrampage() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid item xs={2}>
          <Menu />
        </Grid>

        <Grid item xs={10}>
          <Routes>
            <Route path="/" element={<Instaview />}></Route>
            <Route path="profile" element={<Profile />}></Route>
          </Routes>
        </Grid>
      </Grid>
    </Box>
  );
}
