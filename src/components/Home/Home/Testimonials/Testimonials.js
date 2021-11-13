import { Container, Grid, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React, { useEffect, useState } from 'react';
import Reviews from '../../../Dashboard/Reviews/Reviews';

const Testimonials = () => {
    const [reviews, setReview] = useState([]);
    useEffect(() =>{
        fetch('https://powerful-harbor-74714.herokuapp.com/reviews')
        .then(res => res.json())
        .then(data => setReview(data))
    },[])
    return (
        <Box>
            <Container sx={{m:15}}>
                <Box sx={{textAlign: "center", m: 5}}>
                    <Typography variant="h3" gutterBottom component="div">
                        Testimonials
                    </Typography>
                    <Typography sx={{mb:5}} variant="subtitle2" gutterBottom component="div">
                        See What People are saying
                    </Typography>
                    <Grid container spacing={2}>
                    {
                        reviews.map(rview => <Reviews key={rview._id} rview={rview}></Reviews>)
                    }
                    </Grid>
                    
                </Box>
            </Container>
        </Box>
    );
};

export default Testimonials;