import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { Container, Typography } from '@mui/material';

const Footer = () => {

    return (
        <Box style={{ padding: '20px', backgroundColor: "#1976d2", color: "white" }} sx={{ flexGrow: 1 }}>
            <Container>
                <Grid style={{padding: "20px"}} container spacing={2}>
                    <Grid item xs={8} md={3}>
                        <Typography variant="h5" gutterBottom component="div">
                            SHOWROOM
                        </Typography>
                        <Typography variant="overline" display="block" gutterBottom>
                            Chittang, 74 Main rd, Abc,<br />C 0213 bd<br />
                            ++41 521 74589 0<br />
                            hum@tar.com<br />
                            Mon – Fri : 09am to 06pm
                        </Typography>
                    </Grid>
                    <Grid item xs={4} md={3}>
                        <Typography variant="h5" gutterBottom component="div">
                            QUICK LINKS
                        </Typography>
                        <Typography variant="overline" display="block" gutterBottom>
                            Blog<br />
                            FAQs<br />
                            Payment<br />
                            Shipment<br />
                            Where is my order?<br />
                            Return Policy
                        </Typography>
                    </Grid>
                    <Grid item xs={4} md={3}>
                        <Typography variant="h5" gutterBottom component="div">
                            STYLE ADVISOR
                        </Typography>
                        <Typography variant="overline" display="block" gutterBottom>
                            My account<br />
                            Information<br />
                            Addresses<br />
                            Discount<br />
                            Orders History<br />
                            Additional Information
                        </Typography>


                    </Grid>
                    <Grid item xs={8} md={3}>
                        <Typography variant="h5" gutterBottom component="div">
                            INFORMATION
                        </Typography>
                        <Typography variant="overline" display="block" gutterBottom>
                            Site Map<br />
                            Search Terms<br />
                            Advanced Search<br />
                            About Us<br />
                            Contact Us<br />
                            Suppliers
                        </Typography>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
};

export default Footer;