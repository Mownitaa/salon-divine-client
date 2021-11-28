import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import assistant from './assistant.png';
import { Button, Typography } from '@mui/material';

const appointmentBanner = "https://www.simplysolved.ae/wp-content/uploads/2019/07/beuhair-interior-3-min-cropped.jpg";
const appointmentBg = {
    background: `url(${appointmentBanner})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    backgroundColor: 'rgba(40, 38, 65, 0.9)',
    backgroundBlendMode: 'darken,luminosity',
    marginTop: 175
}

const AppointmentBanner = () => {
    return (
        <Box style={appointmentBg} sx={{ flexGrow: 1, mb: 5, mx: 15 }}>
            <Grid container spacing={2}>
                <Grid item xs={12} md={6}>
                    <img style={{ marginTop: '-150px' }} src={assistant} alt="" />
                </Grid>
                <Grid style={{ textAlign: 'left', marginTop: '4%' }}
                    item xs={12} md={6}>
                    <Box sx={{ mr: 10 }}>
                        <Typography sx={{ mb: 5 }} style={{ color: '#fff' }} variant="h5">
                            Appointment
                        </Typography>
                        <Typography sx={{ mb: 1 }} style={{ color: '#fff' }} variant="h4">
                            Make An Appointment Today
                        </Typography>
                        <Typography style={{ color: '#fff', fontWeight: 300 }} variant="h6">
                            Salon-Divine is able to customize your experience.Service times can vary whether you are looking for regular maintenance.
                        </Typography>
                        <Button sx={{ mt: 10, py: 2, px: 3, bgcolor: 'pink', color: '#325D5C' }} >Explore More</Button>
                    </Box>
                </Grid>
            </Grid>
        </Box >
    );
};

export default AppointmentBanner;