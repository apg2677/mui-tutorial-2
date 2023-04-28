import React, { useState } from "react";
import {
  Typography,
  Button,
  TextField,
  FormGroup,
  FormControlLabel,
  Checkbox,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  FormLabel,
  RadioGroup,
  Radio,
  AppBar,
  Toolbar,
} from "@mui/material";

export default function Test() {
  const [inputs, setInputs] = useState({
    name: "",
    email: "",
    password: "",
    subscribe: false,
    age: 0,
    gender: "",
  });
  const handleChange = (e) => {
    setInputs((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(inputs);
  };
  return (
    <div>
      <AppBar>
        <Toolbar>
          <Typography>LOGO</Typography>
          <Button
            variant="contained"
            sx={{ marginLeft: "auto" }}
            color="warning"
          >
            Hello
          </Button>
        </Toolbar>
      </AppBar>
      <form
        onSubmit={handleSubmit}
        style={{ display: "flex", flexDirection: "column" }}
      >
        <TextField
          onChange={handleChange}
          name="name"
          value={inputs.name}
          type="text"
          sx={{ margin: 3 }}
          placeholder="Name"
          variant="outlined"
        />
        <TextField
          onChange={handleChange}
          name="email"
          value={inputs.email}
          type="email"
          sx={{ margin: 3 }}
          placeholder="Email"
          variant="standard"
        />
        <TextField
          onChange={handleChange}
          name="password"
          value={inputs.password}
          type="password"
          sx={{ margin: 3 }}
          placeholder="Password"
          variant="filled"
        />

        <FormGroup sx={{ margin: 3 }}>
          <FormControlLabel
            control={
              <Checkbox
                onChange={() =>
                  setInputs((prev) => ({
                    ...prev,
                    subscribe: !inputs.subscribe,
                  }))
                }
              />
            }
            label="Subscribe to Newsletter"
          />
        </FormGroup>
        <FormControl fullWidth>
          <InputLabel>Age</InputLabel>
          <Select
            name="age"
            value={inputs.age}
            label="Age"
            onChange={handleChange}
          >
            <MenuItem value={10}>Ten</MenuItem>
            <MenuItem value={20}>Twenty</MenuItem>
            <MenuItem value={30}>Thirty</MenuItem>
          </Select>
        </FormControl>
        <FormControl>
          <FormLabel>Gender</FormLabel>
          <RadioGroup
            onChange={handleChange}
            defaultValue="female"
            name="gender"
          >
            <FormControlLabel
              value="female"
              control={<Radio />}
              label="Female"
            />
            <FormControlLabel value="male" control={<Radio />} label="Male" />
            <FormControlLabel value="other" control={<Radio />} label="Other" />
          </RadioGroup>
        </FormControl>
        <Button type="submit" variant="contained">
          Submit
        </Button>
      </form>
      <Typography>{inputs.name}</Typography>
      <Typography>{inputs.email}</Typography>
      <Typography>{inputs.password}</Typography>
    </div>
  );
}
