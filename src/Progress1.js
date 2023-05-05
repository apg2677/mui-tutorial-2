import React from "react";
import { CircularProgress, LinearProgress, Box } from "@mui/material";
const Progress1 = () => {
  return (
    <Box>
      <CircularProgress color="secondary" variant="determinate" value={70} />
      <LinearProgress color="inherit" variant="determinate" value={20} />
    </Box>
  );
};

export default Progress1;
