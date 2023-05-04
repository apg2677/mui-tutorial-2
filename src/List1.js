import React, { useState } from "react";
import {
  List,
  ListItem,
  Container,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Box,
  Collapse,
} from "@mui/material";
const array = ["First", "Second", "Third", "Fourth", "Fifth"];
const List1 = () => {
  const [open, setOpen] = useState(false);
  return (
    <div>
      <Box>
        <List>
          <ListItem divider>
            <ListItemButton onClick={() => setOpen(!open)}>
              <ListItemIcon>{">"}</ListItemIcon>
              <ListItemText primary="Expand List" />
            </ListItemButton>
          </ListItem>
        </List>
        <Collapse in={open}>
          <List sx={{ width: 300, background: "#696969" }}>
            {array.map((item, i) => {
              return (
                <ListItem divider key={i}>
                  <ListItemButton onClick={() => setOpen(false)}>
                    <ListItemText primary={item} />
                  </ListItemButton>
                </ListItem>
              );
            })}
          </List>
        </Collapse>
      </Box>
    </div>
  );
};

export default List1;
