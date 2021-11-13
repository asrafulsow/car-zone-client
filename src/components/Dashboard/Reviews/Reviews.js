import React from 'react';
import Grid from '@mui/material/Grid';
import { Rating, Typography } from '@mui/material';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';

const Reviews = ({ rview }) => {
    const { clientName, email, ratting, review } = rview;
    return (
        <Grid item xs={6} md={3}>
            <Card sx={{ minWidth: 275 }}>
                <CardContent>
                    <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                        {email}
                    </Typography>
                    <Typography variant="h5" component="div">
                        {clientName}
                    </Typography>
                    <Typography sx={{ mb: 1.5 }} color="text.secondary">
                        adjective
                    </Typography>
                    <Typography variant="body2">
                        {review}
                    </Typography>
                    <Rating name="read-only" value={ratting} readOnly />
                </CardContent>
            </Card>
        </Grid>
    );
};

export default Reviews;

