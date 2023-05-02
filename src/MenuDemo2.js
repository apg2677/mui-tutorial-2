import {
  AppBar,
  Typography,
  Button,
  Toolbar,
  Tabs,
  Tab,
  Menu,
  MenuItem,
} from "@mui/material";
import React, { useState } from "react";

const MenuDemo2 = () => {
  const [value, setValue] = useState(null);
  const [anchorElm, setAnchorElm] = useState(null);
  const [open, setOpen] = useState(false);

  const handleClose = () => {
    setAnchorElm(null);
    setOpen(false);
  };
  const handleClick = (e) => {
    setAnchorElm(e.currentTarget);
    setOpen(true);
  };
  return (
    <div>
      <AppBar variant="outlined">
        <Toolbar>
          <Typography>LOGO</Typography>
          <Tabs
            indicatorColor="secondary"
            textColor="inherit"
            value={value}
            onChange={(e, val) => setValue(val)}
          >
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
          <Button variant="contained" onClick={handleClick}>
            OPEN MENU
          </Button>
          <Button variant="contained" onClick={handleClick}>
            OPEN MENU AGAIN
          </Button>
          <Menu anchorEl={anchorElm} open={open} onClose={handleClose}>
            <MenuItem onClick={handleClose}>Profile</MenuItem>
            <MenuItem onClick={handleClose}>Balance</MenuItem>
            <MenuItem onClick={handleClose}>Logout</MenuItem>
          </Menu>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default MenuDemo2;
