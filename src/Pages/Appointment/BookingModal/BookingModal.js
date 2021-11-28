import React from 'react';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Typography from '@mui/material/Typography';
import { Button, TextField } from '@mui/material';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};

const BookingModal = ({ openBooking, handleBookingClose, booking, date }) => {

    const { name, img, time } = booking;

    const handleBookingSubmit = e => {
        alert('Submitting');
        //collect data
        //sent to the data
        handleBookingClose();
        e.preventDefault();
    }

    return (
        <Modal
            aria-labelledby="transition-modal-title"
            aria-describedby="transition-modal-description"
            open={openBooking}
            onClose={handleBookingClose}
            closeAfterTransition
            BackdropComponent={Backdrop}
            BackdropProps={{
                timeout: 500,
            }}
        >
            <Fade in={openBooking}>
                <Box sx={style}>
                    <Typography id="transition-modal-title" variant="h6" component="h2">
                        <img style={{ width: '60%', marginLeft: '20%' }} src={img} alt="" />
                    </Typography>
                    <Typography
                        style={{ color: '#d64051', textAlign: 'center' }}
                        variant="h4" id="transition-modal-description" sx={{ mt: 2 }}>
                        {name}
                    </Typography>
                    {/* <Typography id="transition-modal-description" sx={{ mt: 2 }}>
                        {time}
                    </Typography> */}
                    <form onSubmit={handleBookingSubmit}>
                        <TextField
                            disabled
                            sx={{ width: '90%', m: 1 }}
                            id="outlined-size-small"
                            defaultValue={time}
                            size="small"
                        />
                        <TextField
                            sx={{ width: '90%', m: 1 }}
                            id="outlined-size-small"
                            defaultValue='Your Name'
                            size="small"
                        />
                        <TextField
                            sx={{ width: '90%', m: 1 }}
                            id="outlined-size-small"
                            defaultValue='Your Email'
                            size="small"
                        />
                        <TextField
                            sx={{ width: '90%', m: 1 }}
                            id="outlined-size-small"
                            defaultValue='Phone Number'
                            size="small"
                        />
                        <TextField
                            disabled
                            sx={{ width: '90%', m: 1 }}
                            id="outlined-size-small"
                            defaultValue={date.toDateString()}
                            size="small"
                        />
                        <Button sx={{ mt: 2, ml: 1, px: 2, bgcolor: '#FCE8CF', color: '#d64051', width: '90%' }} variant="outlined">Submit</Button>
                    </form>

                </Box>

            </Fade>
        </Modal >
    );
};

export default BookingModal;