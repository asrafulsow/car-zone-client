import { Button, Card, CardActions, CardContent, CardMedia, Grid, Typography } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';

const Service = ({ service }) => {
    const {_id, name, des, price, img,engine,gear } = service;
    console.log(_id);
    return (
        <Grid item xs={12} sm={4}>
            <Card sx={{ maxWidth: 345 }}>
                <CardMedia
                    component="img"
                    height="250"
                    image={img}
                    alt="green iguana"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        {name}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        {des}
                    </Typography>
                    <Typography sx={{mt:2}} variant="subtitle2" gutterBottom component="div">
                        Engine: {engine}
                    </Typography>
                    <Typography sx={{mt:2}} variant="subtitle2" gutterBottom component="div">
                        Gear: {gear}
                    </Typography>
                    <Typography sx={{mt:2}} variant="subtitle2" gutterBottom component="div">
                        Price: ${price}
                    </Typography>
                </CardContent>
                <CardActions>
                    <Link to= {`/purchase/${_id}`}><Button variant="contained">Purchase</Button></Link>
                </CardActions>
            </Card>
        </Grid>
    );
};

export default Service;

