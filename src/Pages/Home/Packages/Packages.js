import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { Container } from '@mui/material';
import Package from '../Package/Package';
import Typography from '@mui/material/Typography';

const packages = [
    {
        name: 'Bridal',
        description: 'Ever heard of bridal glow? That is the glow a bride must acquire before wedding. We discuss the different pre-bridal packages to pamper yourself and look your best on your big day',
        img: 'https://blogscdn.thehut.net/app/uploads/sites/1160/2017/06/featured-makeup-artist-applying-bridal-makeup.jpg',
        price: 'Cost Ranges from 8,000 - 16,000'
    },
    {
        name: 'Skin Care',
        description: 'Skin is one of the largest organs of the body. Because of this, we provide you healthy skin care packages for this winter.Also we have our summer packages available as your cherish',
        img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQc-hLYmQVNmQstnp-MZxl---Mfls6kBfjkoA&usqp=CAU',
        price: 'Cost Ranges from 3,000 - 9,000'
    },
    {
        name: 'Hair Care',
        description: 'Your hair must be the favorite part of your body.But mostly it got damaged.We are offering you our amazing hair treatments which helps to gradually look your hair healthier',
        img: 'https://media.istockphoto.com/photos/clients-hair-is-being-reconditioned-picture-id500135894?k=20&m=500135894&s=612x612&w=0&h=1IYxKJv5GmPpYPe_H2a0mbP9hHEuzCn27RUSecKWW8g=',
        price: 'Cost Ranges from 4,000 - 12,000'
    }
]




const Packages = () => {
    return (
        <Box sx={{ flexGrow: 1 }}>
            <Container>
                <Typography sx={{ color: '#B33C70', fontWeight: 600, my: 4 }} variant="h3">
                    Our Packages
                </Typography>
                <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                    {
                        packages.map(packagee => <Package
                            key={packagee.name}
                            packagee={packagee}
                        ></Package>)
                    }
                </Grid>
            </Container>
        </Box>
    );
};

export default Packages;