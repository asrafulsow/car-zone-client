import { Typography, Grid, Container } from '@mui/material';
import Box from '@mui/material/Box';
import React, { useEffect, useState } from 'react';
import Service from '../Service/Service';

const Services = () => {
    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch('https://powerful-harbor-74714.herokuapp.com/services')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])

    return (
        <Box>
            <Typography style={{ textAlign: 'center', margin: "30px",fontWeight:"bold" }} variant="h3" gutterBottom component="div">
                Our Services
            </Typography>
            <Container>
                <Grid container spacing={2}>
                    {
                        services.slice(0, 6).map(service => <Service
                            key={service._id}
                            service={service}
                        ></Service>)
                    }

                </Grid>
            </Container>
        </Box>
    );
};

export default Services;
