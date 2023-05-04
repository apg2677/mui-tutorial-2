import React, { useState } from "react";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Typography,
} from "@mui/material";
const Accordian1 = () => {
  const [accordion, setAccordian] = useState("");
  return (
    <Box>
      <Accordion
        expanded={accordion === "test1"}
        onChange={() => setAccordian("test1")}
      >
        <AccordionSummary expandIcon={">"}>
          <Typography>Test 1</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>My name is Amir.</Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={accordion === "test2"}
        onChange={() => setAccordian("test2")}
      >
        <AccordionSummary expandIcon={">"}>
          <Typography>Test2</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>My name is Amir.</Typography>
        </AccordionDetails>
      </Accordion>
    </Box>
  );
};

export default Accordian1;
