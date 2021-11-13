import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import './Header.css'
import { NavLink } from 'react-router-dom';
import useAuth from '../../../hook/useAuth';
import useFirebase from '../../../hook/useFirebase';


const Header = () => {
  const {user,logOut} = useAuth()
    return (
        <Box className="navBar" sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          {/* <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton> */}
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            CarShop24
          </Typography>
          <NavLink style={{textDecoration: 'none', color: 'white'}} to="/home"><Button color="inherit">Home</Button></NavLink>

          <NavLink style={{textDecoration: 'none', color: 'white'}} to="/explore"><Button color="inherit">Explore</Button></NavLink>

          {user.email &&<NavLink style={{textDecoration: 'none', color: 'white'}} to="/dashboard"><Button color="inherit">Dashboard</Button></NavLink>}
          {
            user?.email ?<Button onClick={logOut} color="inherit">Logout</Button>:
            <NavLink style={{textDecoration: 'none', color: 'white'}} to="/login"><Button color="inherit">Login</Button></NavLink>
          }
          <span style={{color: 'white'}}>{user.displayName}</span>
        </Toolbar>
      </AppBar>
    </Box>
    );
};

export default Header;