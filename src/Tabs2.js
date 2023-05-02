import React, { useState } from "react";
import { AppBar, Typography, Button, Toolbar, Tabs, Tab } from "@mui/material";
const Tabs2 = () => {
  const [value, setValue] = useState(null);
  return (
    <div>
      <Tabs
        indicatorColor="secondary"
        value={value}
        onChange={(e, val) => setValue(val)}
      >
        <Tab label="First" />
        <Tab label="Second" />
        <Tab label="Third" />
      </Tabs>
    </div>
  );
};

export default Tabs2;
