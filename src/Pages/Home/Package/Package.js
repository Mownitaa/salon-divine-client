import { Grid } from '@mui/material';
import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

const Package = ({ packagee }) => {
    const { name, description, img, price } = packagee;
    return (
        <Grid item xs={12} sm={6} md={4}>
            <Card sx={{ maxWidth: 345, pb: 3 }}>
                <CardActionArea>
                    <CardMedia
                        component="img"
                        height="140"
                        image={img}
                        alt="green iguana"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            {name}
                        </Typography>
                        <Typography variant="body2" color="text.secondary" sx={{ color: '#B33C70' }}>
                            {description}
                        </Typography>
                    </CardContent>
                </CardActionArea>
                <Typography sx={{ color: 'gray' }}>
                    {price}
                </Typography>

            </Card>
        </Grid>
    );
};

export default Package;