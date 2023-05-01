import React, { useState } from "react";
import { Menu, MenuItem, Button } from "@mui/material";

export default function MenuDemo() {
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
      <Button variant="contained" onClick={handleClick}>
        OPEN MENU
      </Button>
      <Button variant="outlined" onClick={handleClick}>
        OPEN MENU again
      </Button>
      <Menu onClose={handleClose} anchorEl={anchorElm} open={open}>
        <MenuItem onClick={handleClose}>Profile</MenuItem>
        <MenuItem onClick={handleClose}>Balance</MenuItem>
        <MenuItem onClick={handleClose}>Logout</MenuItem>
      </Menu>
    </div>
  );
}
