import React, { useState } from "react";
import {
  Drawer,
  Box,
  Accordion,
  ListItemButton,
  ListItemText,
  List,
  Button,
} from "@mui/material";
const arrOptions = ["Profile", "Balance", "Logout"];
const Drawer1 = () => {
  const [open, setOpen] = useState(false);
  return (
    <Box>
      <Button onClick={() => setOpen(true)}>Open Drawer</Button>
      <Drawer open={open} onClose={() => setOpen(false)} anchor="right">
        <List>
          {arrOptions.map((elm) => {
            return (
              <ListItemButton onClick={() => setOpen(false)}>
                <ListItemText primary={elm} />
              </ListItemButton>
            );
          })}
        </List>
      </Drawer>
    </Box>
  );
};

export default Drawer1;
