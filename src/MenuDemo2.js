import { AppBar, Typography, Button, Toolbar, Tabs, Tab } from "@mui/material";
import React from "react";

const MenuDemo2 = () => {
  return (
    <div>
      <AppBar variant="outlined">
        <Toolbar>
          <Typography>LOGO</Typography>
          <Tabs value={0} textColor="white" indicatorColor="red">
            <Tab label="First" />
            <Tab label="Second" />
            <Tab label="Third" />
          </Tabs>
          <Button
            variant="contained"
            sx={{ marginLeft: "auto" }}
            color="warning"
          >
            Login
          </Button>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default MenuDemo2;
