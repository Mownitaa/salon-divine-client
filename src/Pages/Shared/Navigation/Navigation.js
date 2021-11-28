import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import logo from './logo.png';
import { Link, NavLink } from 'react-router-dom';


const Navigation = () => {

    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar style={{ background: '#FCE8CF' }} position="static">
                <Toolbar>

                    <Link to="/appointment">Appointment</Link>

                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        <Link to="/"> <img style={{ width: '4%' }} src={logo} alt="" />
                        </Link>
                        <p style={{ fontSize: 11, color: 'black', marginTop: '-10px' }}>Salon-Divine</p>
                    </Typography>
                    <NavLink to="/login">
                        <Button color="inherit">Login</Button>
                    </NavLink>
                </Toolbar>
            </AppBar>
        </Box>
    );
};

export default Navigation;