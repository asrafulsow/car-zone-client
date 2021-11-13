import React, { useEffect, useState } from 'react';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import ButtonBase from '@mui/material/ButtonBase';
import DeleteIcon from '@mui/icons-material/Delete';
import Box from '@mui/material/Box';
import { Button, Container } from '@mui/material';

const Img = styled('img')({
    margin: 'auto',
    display: 'block',
    maxWidth: '100%',
    maxHeight: '100%',
});

const ManageProduct = () => {
    const [manageProduct, setManageProduct] = useState([])
    useEffect(() => {
        fetch('https://powerful-harbor-74714.herokuapp.com/services')
            .then(res => res.json())
            .then(data => setManageProduct(data))
    }, [])


    //delete 

    const handleDelete = id => {
        const procced = window.confirm('Are you sure to delete')
        if (procced) {
            const url = `https://powerful-harbor-74714.herokuapp.com/services/${id}`
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        const remaining = manageProduct.filter(order => order._id !== id)
                        setManageProduct(remaining)
                        alert('delete')
                    }
                    console.log(data)
                })
        }


    }
    return (
        <Box>
            <Typography style={{ textAlign: 'center', margin: "20px" }} variant="h3" gutterBottom component="div">
                Manage All Product
            </Typography>
            <Container>
                <Grid container spacing={2}>
                    {
                        manageProduct.map(product => <Grid item xs={12} sm={6}>
                            <Box
                                key={product._id}
                            >
                                <Paper sx={{ p: 2, margin: 'auto', maxWidth: 500, flexGrow: 1 }}>
                                    <Grid container spacing={2}>
                                        <Grid item>
                                            <ButtonBase sx={{ width: 128, height: 128 }}>
                                                <Img alt="complex" src={product.img} />
                                            </ButtonBase>
                                        </Grid>
                                        <Grid item xs={12} sm container>
                                            <Grid item xs container direction="column" spacing={2}>
                                                <Grid item xs>
                                                    <Typography gutterBottom variant="subtitle1" component="div">
                                                        {product.name}
                                                    </Typography>
                                                    <Typography variant="body2" gutterBottom>
                                                        {product.des.slice(0, 40)}
                                                    </Typography>
                                                    <Typography variant="body2" color="text.secondary">
                                                        ID: 1030114
                                                    </Typography>
                                                </Grid>
                                                <Grid item>
                                                    <Button onClick={() => handleDelete(product._id)} variant="outlined" startIcon={<DeleteIcon />}>
                                                        Delete
                                                    </Button>
                                                </Grid>
                                            </Grid>
                                            <Grid item>
                                                <Typography variant="subtitle1" component="div">
                                                    price: ${product.price}
                                                </Typography>
                                            </Grid>
                                        </Grid>
                                    </Grid>
                                </Paper>
                            </Box>
                        </Grid>)
                    }
                </Grid>

            </Container>
        </Box>
    );
};

export default ManageProduct;
