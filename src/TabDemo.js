import React, { useState } from "react";
import { Tabs, Tab, AppBar, Toolbar } from "@mui/material";
export default function TabDemo() {
  const [value, setValue] = useState();

  return (
    <div>
      <AppBar>
        <Toolbar>
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
        </Toolbar>
      </AppBar>
    </div>
  );
}
