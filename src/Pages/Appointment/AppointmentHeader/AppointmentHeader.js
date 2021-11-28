import { Container, Grid } from '@mui/material';
import React from 'react';
import Calender from '../../Shared/Calender/Calender';

const AppointmentHeader = ({ date, setDate }) => {

    const appointmentHeaderImg = "https://media.istockphoto.com/photos/professional-stylist-doing-makeup-for-blonde-woman-picture-id1147811612?b=1&k=20&m=1147811612&s=170667a&w=0&h=BA_dRcEXSNLOCV4ctu4QP57vgmh1YTjQRmHRSEVndWo=";
    return (

        <Container>
            <Grid container spacing={2} sx={{ my: 5 }}>
                <Grid item xs={12} md={6}>
                    <Calender date={date} setDate={setDate}></Calender>
                </Grid>
                <Grid item xs={12} md={6}>
                    <img style={{ width: '93%' }} src={appointmentHeaderImg} alt="" />
                </Grid>
            </Grid>
        </Container>
    );
};

export default AppointmentHeader;