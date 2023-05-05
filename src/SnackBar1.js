import React, { useState } from "react";
import { Snackbar, Box, Alert } from "@mui/material";
const SnackBar1 = () => {
  const [open, setOpen] = useState(true);
  return (
    <Box>
      <Snackbar
        onClose={() => setOpen(false)}
        open={open}
        message="This is a snackbar"
        autoHideDuration={2000}
      >
        <Alert severity="success">This is a success message</Alert>
      </Snackbar>
    </Box>
  );
};

export default SnackBar1;
