import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { Button, Typography } from '@mui/material';

const Banner = () => {

    const bannerImg = "https://www.mybeautyparlour.com/assets/images/b.jpg";

    // const bannerBg = {
    //     textAlign: 'left',
    //     padding: 4,
    //     backgroundRepeat: 'no-repeat',
    //     backgroundSize: 'cover',
    //     backgroundColor: 'rgba(180, 121, 163, 0.9)',
    //     backgroundBlendMode: 'darken,luminosity',
    //     background: 'url("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRM4HAuF3L72UEVjLXtAqP8NpTO7uZeA4fpQg&usqp=CAU")'
    // }
    return (
        <Box sx={{ flexGrow: 1, mt: 5, ml: 5 }}>
            <Grid container spacing={2}>
                <Grid item xs={12} md={5}>
                    <Typography style={{ color: '#B33C70', fontWeight: '500', textAlign: 'center' }} variant="h3">
                        Salon Divine
                    </Typography>

                    <Box sx={{ ml: 5 }}>
                        <Typography sx={{ mr: 10 }}>
                            <h2 style={{ fontWeight: 300 }}><i style={{ color: '#F2A7A9', marginRight: 10 }} className="fas fa-check"></i> <i>Aromatherapy Massage</i> </h2>
                            <h2 style={{ fontWeight: 300 }}><i style={{ color: '#F2A7A9', marginRight: 10 }} className="fas fa-check"></i> <i>Hot Stone Massage</i> </h2>
                            <h2 style={{ fontWeight: 300 }}><i style={{ color: '#F2A7A9', marginRight: 10 }} className="fas fa-check"></i> <i> Hydrotherapy Treatment</i> </h2>
                            <h2 style={{ fontWeight: 300 }}><i style={{ color: '#F2A7A9', marginRight: 10 }} className="fas fa-check"></i> <i> Carotene Treatments</i> </h2>
                            <h2 style={{ fontWeight: 300 }}><i style={{ color: '#F2A7A9', marginRight: 10 }} className="fas fa-check"></i> <i> Shellac Manicure</i> </h2>
                            <h2 style={{ fontWeight: 300 }}><i style={{ color: '#F2A7A9', marginRight: 10 }} className="fas fa-check"></i> <i>Hair Detox Treatment</i> </h2>
                            <h2 style={{ fontWeight: 300 }}><i style={{ color: '#F2A7A9', marginRight: 10 }} className="fas fa-check"></i> <i> The Core Facial</i> </h2>
                            <h2 style={{ fontWeight: 300 }}><i style={{ color: '#F2A7A9', marginRight: 10 }} className="fas fa-check"></i> <i> Natural Nail Overlay</i> </h2>
                            <h2 style={{ fontWeight: 300 }}><i style={{ color: '#F2A7A9', marginRight: 10 }} className="fas fa-check"></i> <i>Complete Bridal Makeup</i>  </h2>
                            <h2 style={{ fontWeight: 300 }}><i style={{ color: '#F2A7A9', marginRight: 10 }} className="fas fa-check"></i><i>Body soothe Waxing</i>   </h2>
                        </Typography>
                        <Button style={{ width: '25%' }} sx={{ mt: 4, py: 1, px: 3, bgcolor: '#F2A7A9', color: '#625D5C' }} >More</Button>
                    </Box>


                </Grid>
                <Grid sx={{ mr: 0 }} item xs={12} md={7}>
                    <img style={{ width: '100%', height: '90%' }} src={bannerImg} alt="" />
                </Grid>
            </Grid>
        </Box>
    );
};

export default Banner;