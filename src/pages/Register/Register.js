import { Alert, Button, TextField, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { useForm } from "react-hook-form";
import { NavLink } from "react-router-dom";
import useAuth from "../../hooks/useAuth";

const Register = () => {
  const { registerWithEmail, successMessage, error } = useAuth();
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => {
    registerWithEmail(data.userEmail, data.userPassword, data.userName);
  };
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        background: "#5E90C9",
      }}
    >
      <form
        variant="form"
        component="div"
        onSubmit={handleSubmit(onSubmit)}
        style={{
          display: "flex",
          flexDirection: "column",
          width: "25%",
          background: "#fff",
          padding: "50px",
          borderRadius: "10px",
        }}
      >
        <Typography variant="h4" sx={{ textAlign: "center", mb: 5 }}>
          Register
        </Typography>
        <TextField
          variant="standard"
          label="Full Name"
          required
          {...register("userName")}
          sx={{ mt: 3 }}
        />
        <TextField
          variant="standard"
          label="Email"
          required
          {...register("userEmail")}
          type="email"
          sx={{ mt: 3 }}
        />
        <TextField
          variant="standard"
          label="Password"
          required
          {...register("userPassword", { required: true })}
          type="password"
          sx={{ mt: 3 }}
        />

        <Button variant="contained" type="submit" sx={{ mt: 3 }}>
          Register
        </Button>
        <NavLink
          to="/login"
          style={{
            marginTop: "10px",
            textDecoration: "none",
            color: "#5E90C9",
          }}
        >
          Already have an account? Login Here
        </NavLink>
        {successMessage && <Alert severity="success">{successMessage}</Alert>}
        {error && <Alert severity="error">{error}</Alert>}
      </form>
    </Box>
  );
};

export default Register;
