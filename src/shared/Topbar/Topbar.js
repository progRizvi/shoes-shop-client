import {
  AppBar,
  Box,
  Button,
  Container,
  Toolbar,
  Typography,
} from "@mui/material";
import { NavLink } from "react-router-dom";
import useAuth from "../../hooks/useAuth";

const Topbar = () => {
  const { user, logOut } = useAuth();

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Container>
          <Toolbar>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              <NavLink to="/" style={{ color: "#fff", textDecoration: "none" }}>
                Shoes Shop
              </NavLink>
            </Typography>
            <NavLink to="/products" style={{ textDecoration: "none" }}>
              <Button sx={{ color: "white", textDecoration: "none" }}>
                Explore More
              </Button>
            </NavLink>
            {user.email ? (
              <>
                <NavLink
                  to="/dashboard"
                  style={{
                    color: "#fff",
                    fontWeight: "500",
                    textDecoration: "none",
                    marginRight: "10px",
                    textTransform: "uppercase",
                  }}
                >
                  Deshboard
                </NavLink>
                <Button variant="contained" onClick={logOut} color="error">
                  Logout
                </Button>
                <NavLink
                  to="/dashboard"
                  style={{
                    color: "#fff",
                    fontWeight: "500",
                    textDecoration: "none",
                    marginRight: "10px",
                    textTransform: "uppercase",
                    marginLeft: "5px",
                  }}
                >
                  {user.displayName}
                </NavLink>
              </>
            ) : (
              <NavLink to="/login" style={{ textDecoration: "none" }}>
                <Button sx={{ color: "white", textDecoration: "none" }}>
                  Login
                </Button>
              </NavLink>
            )}
          </Toolbar>
        </Container>
      </AppBar>
    </Box>
  );
};

export default Topbar;
