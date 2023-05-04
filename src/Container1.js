import React from "react";
import { Container } from "@mui/material";
const Container1 = () => {
  return (
    <>
      <Container maxWidth="xs" sx={{ background: "green" }}>
        <h1>Container</h1>
      </Container>
      <br />
      <Container maxWidth="sm" sx={{ background: "green" }}>
        <h1>Container</h1>
      </Container>
      <br />
      <Container maxWidth="md" sx={{ background: "green" }}>
        <h1>Container</h1>
      </Container>
      <br />
      <Container maxWidth="lg" sx={{ background: "green" }}>
        <h1>Container</h1>
      </Container>
      <br />
      <Container maxWidth="xl" sx={{ background: "green" }}>
        <h1>Container</h1>
      </Container>
    </>
  );
};

export default Container1;
