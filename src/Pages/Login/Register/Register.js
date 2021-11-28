import React from 'react';
import { Button, Container, Grid, TextField, Typography } from '@mui/material';
import Navigation from '../../Shared/Navigation/Navigation';


const Register = () => {
    const loginImg = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHHeWqv88_8sCh5EspyWez7PBrDedwRG6IzA&usqp=CAU"

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
    return (
        <>
            <Navigation></Navigation>
            <Container>
                <Grid sx={{ pb: 40, px: 4 }} style={loginBg} container spacing={2}>
                    <Grid style={{ width: '4%' }} item xs={12} md={12}>
                        <Typography>
                            <img src={loginImg} alt="" />
                        </Typography>
                        <Typography style={{ fontSize: 46, fontWeight: 600, color: '#01A7EF' }} variant="body1" gutterBottom>Login!!!</Typography>

                        <form>

                            <TextField
                                sx={{ width: '70%', m: 1 }}
                                style={{ backgroundColor: 'white' }}
                                id="outlined-size-small"
                                defaultValue='Your Name'
                                size="small"
                            />
                            <TextField
                                sx={{ width: '70%', m: 1 }}
                                style={{ backgroundColor: 'white' }}
                                id="outlined-size-small"
                                defaultValue='Your Email'
                                size="small"
                            />

                            <Button sx={{ mt: 2, ml: 1, px: 2, bgcolor: '#FCE8CF', color: '#11A7EF', width: '40%' }} variant="outlined">Submit</Button>
                        </form>

                    </Grid>
                </Grid>
            </Container>
        </>
    );
};

export default Register;