import React, { useState } from "react";
import { Alert, Box, Snackbar } from "@mui/material";
const Alert1 = () => {
  const [show, setShow] = useState(true);
  return (
    <Box>
      {show && (
        <Alert onClose={() => setShow(false)} severity="info">
          This is an Info Alert
        </Alert>
      )}
    </Box>
  );
};

export default Alert1;
