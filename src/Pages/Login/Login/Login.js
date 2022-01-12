import { Alert, Button, CircularProgress, Container, Grid, TextField, Typography } from '@mui/material';
import React, { useState } from 'react';
import { NavLink, useLocation, useHistory } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import Navigation from '../../Shared/Navigation/Navigation';

const Login = () => {

    const [loginData, setLoginData] = useState({})
    const { user, loginUser, signInWithGoogle, isLoading, authError } = useAuth();

    const location = useLocation();
    const history = useHistory();

    const loginImg = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ9kkqyYKjusj3MLTd7ep505_5Fk6HUt32x0IKCH0ze8sPve09UJq4JoFbL1HCt_6R6KXw&usqp=CAU"

    const loginBanner = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSoDVXYP9jfRpz4PXd2Ff5MQDiSOhg7FlNBiE_odXuZ_y6FjXquN_K-pqN5BVwh9-_4FyQ&usqp=CAU";
    const loginBg = {
        width: '70%',
        margin: 'auto',
        background: `url(${loginBanner})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundColor: 'rgba(40, 38, 65, 0.6)',
        backgroundBlendMode: 'darken,luminosity',
        marginTop: 35
    }

    const handleOnChange = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = { ...loginData };
        newLoginData[field] = value;
        setLoginData(newLoginData);
    }

    const handleLoginSubmit = e => {
        loginUser(loginData.email, loginData.password, location, history);
        e.preventDefault();
    }

    const handleGoogleSignIn = () => {
        signInWithGoogle(location, history)
    }

    return (
        <>
            <Navigation></Navigation>
            <Container>
                <Grid sx={{ pb: 25, px: 4 }} style={loginBg} container spacing={2}>
                    <Grid style={{ width: '4%' }} item xs={12} md={12}>
                        <Typography>
                            <img style={{ width: '15%' }} src={loginImg} alt="" />
                        </Typography>
                        <Typography style={{ fontSize: 46, fontWeight: 600, color: '#01A7EF' }} variant="body1" gutterBottom>Login!!!</Typography>


                        {isLoading && <CircularProgress />}
                        {user?.email && <Alert severity="success">Login Successful!</Alert>}

                        {authError && <Alert severity="error">{authError}</Alert>}

                        <form onSubmit={handleLoginSubmit}>

                            <TextField
                                sx={{ width: '70%', m: 1 }}
                                style={{ backgroundColor: 'white' }}
                                id="outlined-size-small"
                                label='Your Email'
                                name="email"
                                type="email"
                                onChange={handleOnChange}
                            />
                            <TextField
                                sx={{ width: '70%', m: 1 }}
                                style={{ backgroundColor: 'white' }}
                                id="outlined-size-small"
                                label='Password'
                                type="password"
                                name="password"
                                onChange={handleOnChange}
                            />

                            <Button sx={{ mt: 2, ml: 1, px: 2, bgcolor: '#FCE8CF', color: '#11A7EF', width: '40%' }}
                                type="submit" variant="outlined">Login</Button>
                            <Typography style={{ color: 'white' }}
                                sx={{ mt: 6 }}
                                variant="h6">
                                New to Salon-Divine? Please
                                <NavLink style={{ color: '#f2cb9b' }} to="/register"> Register</NavLink>
                            </Typography>
                        </form>
                        <Typography style={{ color: 'white', fontWeight: 600 }} variant="h5">OR</Typography>
                        <Button sx={{ mt: 2, ml: 1, px: 2, bgcolor: '#FCE8CF', color: '#11A7EF', width: '40%' }}
                            onClick={handleGoogleSignIn}
                            type="submit" variant="outlined">Google Sign In</Button>

                    </Grid>
                </Grid>
            </Container>
        </>
    );
};

export default Login;