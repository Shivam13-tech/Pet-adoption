import React from "react";
import { Link } from "react-router-dom";

import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

function Navbar(){

const logged = true;

  if(!logged){
    return (
        <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static" style={{ background: '#71C9CE' }}>
          <Toolbar>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              <Link to="/" style={{ textDecoration: 'none', color: '#655D8A' }}><Button color="inherit">Happy Dog</Button></Link>
            </Typography>
            <Link to="/Login" style={{ textDecoration: 'none', color: '#1A1A40' }}><Button color="inherit">Login</Button></Link>
            <Link to="/Signup" style={{ textDecoration: 'none', color: '#1A1A40' }}><Button color="inherit">SignUp</Button></Link>
          </Toolbar>
        </AppBar>
      </Box>
    )
  }
  return(
    <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static" style={{ background: '#71C9CE' }}>
          <Toolbar>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              <Link to="/" style={{ textDecoration: 'none' , color: '#655D8A' }}><Button color="inherit">Happy Dog</Button></Link>
            </Typography>
            <Link to="/Dog-World" style={{ textDecoration: 'none' , color: '#1A1A40' }}><Button color="inherit">DOG WORLD</Button></Link>
            <Link to="/Post-Dog" style={{ textDecoration: 'none' , color: '#1A1A40' }}><Button color="inherit">Add Dog</Button></Link>
          </Toolbar>
        </AppBar>
      </Box>
  )
}

export default Navbar;