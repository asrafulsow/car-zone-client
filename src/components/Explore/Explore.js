import { CircularProgress, Container, Grid, Typography } from '@mui/material';
import Box from '@mui/material/Box';
import React, { useEffect, useState } from 'react';
import ExploreService from '../ExploreService/ExploreService';

const Explore = () => {
    const [explores, setExplores] = useState([]);

    useEffect(() => {
        fetch('https://powerful-harbor-74714.herokuapp.com/services')
            .then(res => res.json())
            .then(data => setExplores(data))
    }, [])

    return (
        <Box>
            <Container>
                <Typography sx={{fontWeight:"bold",m:10, textAlign:"center"}} variant="h3" gutterBottom component="div">
                    Explore All Services And Car
                </Typography>
                <Grid container spacing={2}>
                    {
                        explores.slice(6, 100).map(explore => <ExploreService
                            key={explore._id}
                            explore={explore}
                        ></ExploreService>)
                    }
                </Grid>
            </Container>
        </Box>
    );
};

export default Explore;