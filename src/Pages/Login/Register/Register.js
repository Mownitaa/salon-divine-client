import React, { useState } from 'react';
import { Alert, Button, CircularProgress, Container, Grid, TextField, Typography } from '@mui/material';
import Navigation from '../../Shared/Navigation/Navigation';
import { NavLink } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';

const Register = () => {

    const [loginData, setLoginData] = useState({});
    const { user, registerUser, isLoading, authError } = useAuth();


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
        if (loginData.password1 !== loginData.password2) {
            alert("Password did not match");
            return
        }
        // alert('Registered successfully');
        registerUser(loginData.email, loginData.password);
        e.preventDefault();
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
                        <Typography style={{ fontSize: 46, fontWeight: 600, color: '#01A7EF' }} variant="body1" gutterBottom>Register!!!</Typography>

                        {!isLoading && <form onSubmit={handleLoginSubmit}>

                            <TextField
                                sx={{ width: '70%', m: 1 }}
                                style={{ backgroundColor: 'white' }}
                                id="standard-basic"
                                label='Your Email'
                                name="email"
                                type="email"
                                onChange={handleOnChange}
                            />
                            <TextField
                                sx={{ width: '70%', m: 1 }}
                                style={{ backgroundColor: 'white' }}
                                id="standard-basic"
                                label='Enter Password'
                                type="password"
                                name="password1"
                                onChange={handleOnChange}
                            />
                            <TextField
                                sx={{ width: '70%', m: 1 }}
                                style={{ backgroundColor: 'white' }}
                                id="standard-basic"
                                label='Re-enter Password'
                                type="password"
                                name="password2"
                                onChange={handleOnChange}
                            />
                            <Button sx={{ mt: 2, ml: 1, px: 2, bgcolor: '#FCE8CF', color: '#11A7EF', width: '40%' }}
                                type="submit"
                                variant="outlined">Register</Button>


                            {/* already have account */}

                            {/* <NavLink
                                style={{ textDecoration: 'none' }}
                                to="/login">
                                <Button variant="text">
                                    Already Registered? Please Login</Button>
                            </NavLink> */}


                            <Typography style={{ color: 'white' }}
                                sx={{ mt: 6 }}
                                variant="h6">
                                Already Have An Account? Please
                                <NavLink style={{ color: '#f2cb9b' }} to="/login"> Login</NavLink>
                            </Typography>
                        </form>}
                        {isLoading && <CircularProgress />}
                        {user?.email && <Alert severity="success"> User created successfully!</Alert>}

                        {authError && <Alert severity="error">{authError}</Alert>}
                    </Grid>
                </Grid>
            </Container>
        </>
    );
};

export default Register;