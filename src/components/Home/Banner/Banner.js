import { Button, Container, Grid, Typography } from '@mui/material';
import Box from '@mui/material/Box';
import React from 'react';
import './Banner.css'
import bg from '../../../images/bg.jpg';
import { Link } from 'react-router-dom';

const bannerbg = {
    background: `url(${bg})`,
    backgroundSize: 'cover',
    backgroundRepeat: 'norepeat',
    backgroundColor: 'rgba(45,58,74,0.5)',
    backgroundBlendMode: 'darken, luminosity',
    height: '650px'
}

const Banner = () => {
    return (
        <Box style={bannerbg} sx={{ flexGrow: 1,mt:2 }}>
            <Grid style={{color: 'white'}} container spacing={2}>
                <Container style={{ marginTop: "40px" }}>
                    <Grid style={{textAlign: 'center', marginTop: '100px'}} item xs={8} sm={12}>
                        <Typography className="top-heading" variant="h1" component="div" gutterBottom>
                            WE DONT SELL CAR WE SELL A DREAM
                        </Typography>
                        <Typography sx={{m:5}} variant="subtitle2" gutterBottom component="div">
                            subtitle2. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos
                            blanditiis tenetur
                        </Typography>
                        <Link to="/explore"><Button variant="contained">Explore</Button></Link>
                    </Grid>
                </Container>
            </Grid>
        </Box>
    );
};

export default Banner;