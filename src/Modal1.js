import { Modal, Button, Typography, Box } from "@mui/material";
import React, { useState } from "react";

const Modal1 = () => {
  const [open, setOpen] = useState(false);
  return (
    <div>
      <h1>Modal 1</h1>
      <Button onClick={() => setOpen(true)}>Open Dialog</Button>
      <Modal open={open} onClose={() => setOpen(false)}>
        <Box position="absolute" top="50%" left="50%">
          <Typography>A Modal</Typography>
          <Button variant="contained" onClick={() => setOpen(false)}>
            Click Me
          </Button>
        </Box>
      </Modal>
    </div>
  );
};

export default Modal1;
