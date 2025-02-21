import { Outlet } from "react-router-dom";
import { AppBar, Toolbar, Button, IconButton, Box, Typography } from "@mui/material";
import { ShoppingBagOutlined, AccountCircleOutlined } from "@mui/icons-material";
import { Link } from "react-router-dom";
import logo from "../../../assets/Images/logo.png";

export const Navbar: React.FC = () => {
  return (
    <div>
      <AppBar position="fixed" sx={{ backgroundColor: "white", boxShadow: "none" }}>
        <Toolbar sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          
          <Box style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
            <Link to="/">
              <img src={logo} alt="Logo" style={{ height: "auto",marginLeft:" 0px 330px", width:"40px"}} />
            </Link>
            <Typography variant="body1" sx={{ color: "black", fontWeight: "bold",marginLeft:" 0px 330px" }}>
              Tasty Trast
            </Typography>
          </Box>

          <Box style={{ display: "flex", gap: 2 }}>
            <Button color="inherit" component={Link} to="/" sx={{ color: "black" }}>
              Home
            </Button>
            <Button color="inherit" component={Link} to="/Foods" sx={{ color: "black" }}>
              Foods
            </Button>
            <Button color="inherit" component={Link} to="/contact" sx={{ color: "black" }}>
              Contact
            </Button>
            <Button color="inherit" component={Link} to="/AddToCart" sx={{ color: "black" }}>
              Cart
            </Button>
          </Box>

   
          <Box style={{ display: "flex", alignItems: "center", gap: 2 }}>
          <IconButton color="inherit" component={Link} to="/login" sx={{ color: "black" }}>
              <AccountCircleOutlined />
            </IconButton>
            
            <IconButton color="inherit" component={Link} to="/card" sx={{ color: "black" }}>
              <ShoppingBagOutlined />
            </IconButton>
            
          </Box>
        </Toolbar>
      </AppBar>

      <Outlet />
    </div>
  );
};
