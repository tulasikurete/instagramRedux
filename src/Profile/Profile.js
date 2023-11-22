import { Box, Button, Grid, Tab, Tabs, Typography } from "@mui/material";
import React, { useState } from "react";
import SettingsIcon from "@mui/icons-material/Settings";

import PropTypes from "prop-types";
import Post from "./Post";

function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

CustomTabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export default function Profile() {
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    (CustomTabPanel.propTypes = {
      children: PropTypes.node,
      index: PropTypes.number.isRequired,
      value: PropTypes.number.isRequired,
    }),
    (
      <Grid>
        <Grid container>
          <Grid item xs={2}></Grid>
          <Grid item xs={3}>
            <img
              style={{
                height: 160,
                borderRadius: 50,
              }}
              src="https://www.momjunction.com/wp-content/uploads/2015/04/Top-188-Latest-And-Modern-Hindu-Baby-Girl-Names1-910x1024.jpg"
            />
            <Button
              style={{
                fontSize: 100,
                background: "#D7DEE9",
                borderRadius: 50,
                height: 100,
                marginTop: 150,
                color: "GrayText",
                width: 100,
                marginLeft: 90,
              }}
            >
              +
            </Button>
            <Typography style={{ marginLeft: 100 }}>New</Typography>
          </Grid>
          <Grid item xs={1}>
            <Typography>tulasikureti</Typography>
            <Typography style={{ marginTop: 60 }}>16 posts</Typography>
            <Typography style={{ marginTop: 40 }}> tulasi lucky</Typography>
          </Grid>
          <Grid item xs={2}>
            <Button style={{ background: "#D7DEE9", color: "black" }}>
              Edit Profile
            </Button>
            <Typography style={{ marginTop: 50 }}>38 followers</Typography>
          </Grid>
          <Grid item xs={2}>
            <Button style={{ background: "#D7DEE9", color: "black" }}>
              View Archive
            </Button>
            <Typography style={{ marginTop: 50 }}>76 following</Typography>
          </Grid>
          <Grid item xs={1}>
            <SettingsIcon fontSize="large" />
          </Grid>
        </Grid>
        <Grid container>
          <Box sx={{ width: "100%" }}>
            <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
              <Tabs
                value={value}
                onChange={handleChange}
                aria-label="basic tabs example"
                style={{ marginLeft: 400 }}
              >
                <Tab label="POST" {...a11yProps(0)} />
                <Tab label="SAVED" {...a11yProps(1)} />
                <Tab label="TAGGED" {...a11yProps(2)} />
              </Tabs>
            </Box>
            <div style={{ marginLeft: 300 }}>
              <CustomTabPanel value={value} index={0}>
                <Post />
              </CustomTabPanel>
              <CustomTabPanel value={value} index={1}>
                Item Two
              </CustomTabPanel>
              <CustomTabPanel value={value} index={2}>
                Item Three
              </CustomTabPanel>
            </div>
          </Box>
        </Grid>
      </Grid>
    )
  );
}
