import { Button, Grid } from '@mui/material';
import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import BookingModal from '../BookingModal/BookingModal';

const Booking = ({ booking, date }) => {
    const { name, time, img } = booking;
    const [openBooking, setBookingOpen] = React.useState(false);
    const handleBookingOpen = () => setBookingOpen(true);
    const handleBookingClose = () => setBookingOpen(false);
    return (
        <>
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
                                {time}
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                    <Button
                        onClick={handleBookingOpen}
                        sx={{ mt: 4, py: 1, px: 3, bgcolor: '#FCE8CF', color: '#d64051' }} >Book Appointment</Button>

                </Card>
            </Grid>
            <BookingModal
                date={date}
                booking={booking}
                openBooking={openBooking}
                handleBookingClose={handleBookingClose}
            ></BookingModal>
        </>
    );
};

export default Booking;