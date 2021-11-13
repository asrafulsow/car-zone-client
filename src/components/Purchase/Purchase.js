import { Button, Container, TextField, Typography } from '@mui/material';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import useAuth from '../../hook/useAuth';

const Purchase = () => {
    const { purchaseId } = useParams();
    const { user} = useAuth()
    const [singleService, setSingleService] = useState({})
    useEffect(() => {
        fetch(`https://powerful-harbor-74714.herokuapp.com/services/${purchaseId}`)
            .then(res => res.json())
            .then(data => setSingleService(data))
    }, []);


    const initialInfo = { clientName: user.displayName, email: user.email, phone: '' }

    const [bookingInfo, setBookingInfo] = useState(initialInfo);

    const handelOnBlur = e => {
        const fild = e.target.name;
        const value = e.target.value;

        const newInfo = { ...bookingInfo }
        newInfo[fild] = value
        console.log(newInfo);

        setBookingInfo(newInfo)
    }

    const handleOnSubmit = e => {
        //collect data
        const bookings = {
            ...bookingInfo

        }
        //send data from server
        fetch('https://powerful-harbor-74714.herokuapp.com/booking', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(bookings)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    alert('Your order placed')

                }

            })


        e.preventDefault();

    }
    return (
        <Box sx={{ flexGrow: 1 }}>
            <Container>
                <Grid sx={{ marginTop: "20px" }} container spacing={2}>
                    <Grid item xs={12} md={6}>
                        <form onSubmit={handleOnSubmit}>
                            <TextField
                                disabled
                                sx={{ width: '90%', m: 2 }}
                                id="outlined-size-small"
                                name='clientName'
                                onBlur={handelOnBlur}
                                defaultValue={user.displayName}
                                size="small"
                            />
                            <TextField
                                sx={{ width: '90%', m: 2 }}
                                id="outlined-size-small"
                                name="email"
                                onBlur={handelOnBlur}
                                defaultValue={user.email}
                                size="small"
                            />
                            <TextField
                                sx={{ width: '90%', m: 2 }}
                                id="outlined-size-small"
                                name="phone"
                                onBlur={handelOnBlur}
                                defaultValue='Phone Number'
                                size="small"
                            />
                            <TextField
                                sx={{ width: '90%', m: 2 }}
                                id="outlined-size-small"
                                name="address"
                                onBlur={handelOnBlur}
                                size="small"
                            />
                            <Button type="submit" sx={{ m: 2 }} variant="contained">Submit</Button>
                        </form>
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <img style={{ width: "100%" }} src={singleService.img} alt="" />
                        <Typography sx={{ m: 2 }} variant="h3" gutterBottom component="div">
                            {singleService.name}
                        </Typography>
                        <Typography sx={{ m: 2 }} variant="body1" gutterBottom>
                            {singleService.des}
                        </Typography>
                        <Typography sx={{ m: 2 }} variant="h5" gutterBottom component="div">
                            Price: {singleService.price}
                        </Typography>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
};

export default Purchase;