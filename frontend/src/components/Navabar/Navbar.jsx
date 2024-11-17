// src/components/Navbar.jsx
import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import IconButton from '@mui/material/IconButton';
import { Link } from 'react-router-dom';
import logo from '../../assets/colon.svg';
import './Navbar.css';


// Material-UI Icons
import HomeIcon from '@mui/icons-material/Home';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import EventIcon from '@mui/icons-material/Event';
import InfoIcon from '@mui/icons-material/Info';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import SearchIcon from '@mui/icons-material/Search';

const Navbar = () => {
  return (
    <AppBar position="static" style={{ backgroundColor: '#001f3f', color: '#FFFFFF' }}>
      <Toolbar>
        {/* Logo */}
        <Box sx={{ display: 'flex', alignItems: 'center', marginRight: '20px' }}>
          <img src={logo} alt="Stoma Connect Logo" style={{ width: '40px', marginRight: '10px' }} />
          <Typography variant="h6" style={{ fontWeight: 'bold', color: '#FFFFFF' }}>
            Stoma Connect
          </Typography>
        </Box>

        {/* Centered navigation links */}
        <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', flexGrow: 1 }}>
          <Button color="inherit" component={Link} to="/" startIcon={<HomeIcon />} style={{ fontWeight: 'bold' }}>
            Home
          </Button>
          <Button color="inherit" component={Link} to="/products" startIcon={<ShoppingCartIcon />} style={{ fontWeight: 'bold' }}>
            Products
          </Button>
          <Button color="inherit" component={Link} to="/appointments" startIcon={<EventIcon />} style={{ fontWeight: 'bold' }}>
            Appointments
          </Button>
          <Button color="inherit" component={Link} to="/awareness" startIcon={<InfoIcon />} style={{ fontWeight: 'bold' }}>
            Awareness
          </Button>
        </Box>

        {/* Search bar */}
        <Box sx={{ display: 'flex', alignItems: 'center', width: '250px', marginRight: '20px' }}>
          <TextField
            variant="outlined"
            placeholder="Search for products and more"
            size="small"
            sx={{
              backgroundColor: 'white',
              borderRadius: '4px',
              width: '100%',
            }}
            InputProps={{
              startAdornment: <SearchIcon style={{ color: '#001f3f', marginRight: '8px' }} />,
              style: { color: '#001f3f' },
            }}
          />
        </Box>

        {/* Right side icons */}
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <IconButton color="inherit" component={Link} to="/profile" sx={{ display: 'flex', flexDirection: 'column' }}>
            <AccountCircleIcon />
            {/* <Typography variant="caption" style={{ color: '#FFFFFF' }}></Typography> */}
          </IconButton>
          <IconButton color="inherit" component={Link} to="/cart" sx={{ display: 'flex', flexDirection: 'column' }}>
            <ShoppingCartIcon />
            {/* <Typography variant="caption" style={{ color: '#FFFFFF' }}>Cart</Typography> */}
          </IconButton>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
