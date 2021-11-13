import { Container, Grid } from '@mui/material';
import Box from '@mui/material/Box';
import React from 'react';
import img from '../../images/audi2.jpg'

const Offer = () => {
    return (
        <Box style={{ padding: "10px" }} sx={{ flexGrow: 1 }}>
            <Container>
                <Grid sx={{ padding: "10px" }} container spacing={2}>
                    <Grid item xs={12} md={6}>
                        <div>
                        <img style={{width: "90%",marginTop:"85px",boxShadow: "40px 33px #474e73d1"}} src={img} alt="" />
                        </div>
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <h1>What We Offer</h1>
                        <hr />
                        <Grid container spacing={2}>
                            <Grid item xs={12} md={2}>
                                <i style={{ fontSize: "50px", marginTop: "30px" }} className="fas fa-car"></i>
                            </Grid>
                            <Grid item xs={12} md={10}>
                                <h2>Pre-Sale Preparation</h2>
                                <p style={{color: "#707070"}}>We're able to offer financing rates that many other car dealers can't offer.</p>
                            </Grid>
                        </Grid>
                        <Grid container spacing={2}>
                            <Grid item xs={12} md={2}>
                                <i style={{ fontSize: "50px", marginTop: "30px" }} className="fas fa-car-crash"></i>
                            </Grid>
                            <Grid item xs={12} md={10}>
                                <h2>Trade-In Service</h2>
                                <p style={{color: "#707070"}}>Our service allows you to purchase a new car at an attractive price, while saving you all the trouble of handling your old car</p>
                            </Grid>
                        </Grid>
                        <Grid container spacing={2}>
                            <Grid item xs={12} md={2}>
                                <i style={{ fontSize: "50px", marginTop: "30px" }} className="fas fa-car-side"></i>
                            </Grid>
                            <Grid item xs={12} md={10}>
                                <h2>Financing</h2>
                                <p style={{color: "#707070"}}>We're able to offer financing rates that many other car dealers can't offer.</p>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
};

export default Offer;