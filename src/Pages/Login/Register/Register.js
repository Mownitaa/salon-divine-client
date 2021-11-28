import React, { useState } from 'react';
import { Button, Container, Grid, TextField, Typography } from '@mui/material';
import Navigation from '../../Shared/Navigation/Navigation';
import { Link } from 'react-router-dom';


const Register = () => {

    const [loginData, setLoginData] = useState({})

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


    const handleRegisterSubmit = e => {
        if (loginData.password1 !== loginData.password2) {
            alert("Password did not match");
            return
        }
        // alert('Registered successfully');
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

                        <form onSubmit={handleRegisterSubmit}>

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
                                label='Enter Password'
                                type="password"
                                name="password1"
                                onChange={handleOnChange}
                            />
                            <TextField
                                sx={{ width: '70%', m: 1 }}
                                style={{ backgroundColor: 'white' }}
                                id="outlined-size-small"
                                label='Re-enter Password'
                                type="password"
                                name="password2"
                                onChange={handleOnChange}
                            />
                            <Button sx={{ mt: 2, ml: 1, px: 2, bgcolor: '#FCE8CF', color: '#11A7EF', width: '40%' }} variant="outlined">Submit</Button>
                        </form>
                        <Typography style={{ color: 'white' }}
                            sx={{ mt: 6 }}
                            variant="h6">
                            Already Have An Account? Please <span>
                                <Link style={{ color: '#f2cb9b' }} to="/login"> Login</Link>
                            </span>
                        </Typography>
                    </Grid>
                </Grid>
            </Container>
        </>
    );
};

export default Register;