import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import AuthProvider from "./context/AuthProvider";
import Dashboard from "./pages/Dashboard/Dashboard";
import ProductDetails from "./pages/Explore More/ProductDetails/ProductDetails";
import Products from "./pages/Explore More/Products/Products";
import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import NotFound from "./pages/NotFound/NotFound";
import Register from "./pages/Register/Register";
import PrivateRoute from "./PrivateRoute/PrivateRoute";

function App() {
  return (
    <Router>
      <AuthProvider>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/login">
            <Login />
          </Route>
          <Route exact path="/products">
            <Products />
          </Route>
          <PrivateRoute path="/products/:productId">
            <ProductDetails />
          </PrivateRoute>
          <Route exact path="/register">
            <Register />
          </Route>
          <PrivateRoute path="/dashboard">
            <Dashboard />
          </PrivateRoute>
          <Route path="*">
            <NotFound />
          </Route>
        </Switch>
      </AuthProvider>
    </Router>
  );
}

export default App;
