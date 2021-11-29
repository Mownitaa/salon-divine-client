import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import logo from './logo.png';
import { Link, NavLink } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';

const Navigation = () => {

    const { user, logout } = useAuth();

    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar style={{ background: '#FCE8CF' }} position="static">
                <Toolbar>

                    <Link style={{ textDecoration: 'none', color: '#000', fontSize: 20 }} to="/appointment">Appointment</Link>

                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        <Link to="/"> <img style={{ width: '4%' }} src={logo} alt="" />
                        </Link>
                        <Typography variant="h6" style={{ fontSize: 13, color: 'black', marginTop: '-10px' }}>Salon-Divine</Typography>
                    </Typography>
                    {
                        user?.email ?
                            <Button onClick={logout} color="inherit">Logout</Button>
                            :
                            <NavLink style={{ textDecoration: 'none' }} to="/login">
                                <Button
                                    style={{ color: '#000', fontSize: 20 }}
                                >Login</Button>
                            </NavLink>
                    }
                </Toolbar>
            </AppBar>
        </Box>
    );
};

export default Navigation;