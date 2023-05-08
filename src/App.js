import { TextField, Button, Typography } from "@mui/material";
import { useForm } from "react-hook-form";

function App() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  console.log(errors);
  return (
    <div>
      <form
        style={{
          display: "flex",
          flexDirection: "column",
          game: 5,
          border: "1px solid black",
          width: 200,
        }}
        onSubmit={handleSubmit((data) => console.log(data))}
      >
        <TextField
          helperText={
            Boolean(errors.email) ? (
              <Typography>Invalid Email</Typography>
            ) : null
          }
          error={Boolean(errors.email)}
          {...register("email", {
            validate: (val) =>
              /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(val),
          })}
        />
        <TextField
          helperText={
            Boolean(errors.password) ? (
              <Typography>Min length is 6</Typography>
            ) : null
          }
          type="password"
          error={Boolean(errors.password)}
          {...register("password", {
            minLength: 6,
            required: true,
          })}
        />
        <Button
          disabled={Boolean(errors.email) || Boolean(errors.password)}
          variant="contained"
          type="submit"
        >
          Submit
        </Button>
      </form>
    </div>
  );
}

export default App;
