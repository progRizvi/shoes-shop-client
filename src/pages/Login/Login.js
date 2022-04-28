import { Alert, Button, TextField, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { useForm } from "react-hook-form";
import { NavLink, useLocation } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import Topbar from "../../shared/Topbar/Topbar";

const Login = () => {
  const { LoginWithEmail, user, error, successMessage } = useAuth();
  const { register, handleSubmit, reset } = useForm();
  const location = useLocation();
  const redirectUrl = location?.state?.from || "/";
  const onSubmit = (data) => {
    LoginWithEmail(data.userEmail, data.userPassword, redirectUrl);
    if (user.email) {
      reset();
    }
  };
  return (
    <>
      <Topbar />
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
            Sign In
          </Typography>
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
            Sign In
          </Button>
          <NavLink
            to="/register"
            style={{
              marginTop: "10px",
              textDecoration: "none",
              color: "#5E90C9",
            }}
          >
            Did not have any account? Create new Account
          </NavLink>
          {error && <Alert severity="error">{error}</Alert>}
          {successMessage && <Alert severity="success">{successMessage}</Alert>}
        </form>
      </Box>
    </>
  );
};

export default Login;
