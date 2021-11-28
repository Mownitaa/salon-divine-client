import { Container, Grid } from '@mui/material';
import React from 'react';
import Booking from '../Booking/Booking';

const bookings = [
    {
        id: 1,
        name: 'Hair Treatments',
        time: '07 AM - 08 AM',
        img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRwq7J5tt4vxoC7yxByjDlE6eUdue22IVVAex16OMfBSSyD16apmlFcHUOxbzVZ38esCM8&usqp=CAU'
    },
    {
        id: 2,
        name: 'Facial',
        time: '08 AM - 09 AM',
        img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR93tgwj2R2cd2ftpSd3b6qiG9jil4jqJQWEw&usqp=CAU'
    },
    {
        id: 3,
        name: 'Massage',
        time: '09 AM - 10 AM',
        img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTNwj9Sc1zzRC61g1OKRJOBOQ8dsLymAcW0HdvR1JTt4H3aIBtIK0ud8-dYsgK-iLm5uEc&usqp=CAU'
    },
    {
        id: 4,
        name: 'Hair Styling',
        time: '10 AM - 11 AM',
        img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTLvxx5QVdTDZLT_HIBUQxzi5NExId5CVcymPLTbW7mUp1AA8T3gddCgsd3sCPiMOFkbXg&usqp=CAU'
    },
    {
        id: 5,
        name: 'Bridal Makeup',
        time: '11 AM - 12 AM',
        img: 'https://i.pinimg.com/originals/cf/76/6b/cf766bde3dc93b7187597b0e66b487b6.jpg'
    },
    {
        id: 6,
        name: 'Party Makeup',
        time: '01 PM - 02 PM',
        img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQhLmwhncrW4aqSah8w86Jl7YvdgkaKzSKhvg&usqp=CAU'
    },
    {
        id: 7,
        name: 'Hair Color',
        time: '02 PM - 03 PM',
        img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4q6repqp_7vn0iifJpbzQOA_MAriL7cgtWFfCPi_ogyM8FYOMfGkKQ56joPcbHsoBq1s&usqp=CAU'
    },
    {
        id: 8,
        name: 'Nail Overlay',
        time: '04 PM - 05 PM',
        img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFxuhH7hS33k3onFmY0CCXDu_S0IznDFn7Vw&usqp=CAU'
    },
    {
        id: 9,
        name: 'Waxing',
        time: '05 PM - 06 PM',
        img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1Fwe7Pxp4ljduMFQh-e0xjVGmCZmKGtErL_ppHKIC7QBjD59Uj68AtKqz4NhFfL3ZqJc&usqp=CAU'
    }
]

const AvailableAppointments = ({ date }) => {
    return (
        <Container sx={{ my: 10 }}>
            <h2 style={{ backgroundColor: '#FCE8CF', padding: 10 }}>Available Appointments -
                <span style={{ color: '#d64051' }}>
                    {date.toDateString()}
                </span>
            </h2>
            <Grid container sx={{ mt: 5 }} spacing={2}>
                {
                    bookings.map(booking => <Booking
                        key={booking.id}
                        booking={booking}
                        date={date}
                    ></Booking>
                    )
                }
            </Grid>
        </Container>
    );
};

export default AvailableAppointments;