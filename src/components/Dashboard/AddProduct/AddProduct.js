import React, { useState } from 'react';
import Box from '@mui/material/Box';
import { Button, Container, TextField, Typography } from '@mui/material';
import TextareaAutosize from '@mui/material/TextareaAutosize';

const AddProduct = () => {
    const initialInfo = { name: '', img: '' }
    const [addService, setAddService] = useState(initialInfo)

    const handelOnBlur = e => {
        const fild = e.target.name;
        const value = e.target.value;

        const newInfo = { ...addService }
        newInfo[fild] = value
        console.log(newInfo);

        setAddService(newInfo)
    }

    const handleOnSubmit = e => {
        //collect data
        const serviceadd = {
            ...addService

        }
        //send data from server
        fetch('https://powerful-harbor-74714.herokuapp.com/services', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(serviceadd)
        })
            .then(res => res.json())
            .then(data => {
                if(data.insertedId){
                    console.log(data)
                    alert('successfully add services')
                }
                
            })


        e.preventDefault()
    }


    return (
        <Box>
            <Container>
                <Typography style={{textAlign: "center"}} variant="h3" gutterBottom component="div">
                    Add A New Service
                </Typography>
                <form onSubmit={handleOnSubmit}>
                    <TextField
                        sx={{ width: '90%', m: 2 }}
                        id="outlined-size-small"
                        name='name'
                        onBlur={handelOnBlur}
                        placeholder="Car Name"
                        size="small"
                    />
                    <TextField
                        sx={{ width: '90%', m: 2 }}
                        id="outlined-size-small"
                        name="engine"
                        onBlur={handelOnBlur}
                        placeholder="Engine cc"
                        size="small"
                    />
                    <TextField
                        sx={{ width: '90%', m: 2 }}
                        id="outlined-size-small"
                        name="price"
                        onBlur={handelOnBlur}
                        placeholder="Price"
                        type="number"
                        size="small"
                    />
                    <TextField
                        sx={{ width: '90%', m: 2 }}
                        id="outlined-size-small"
                        name="gear"
                        onBlur={handelOnBlur}
                        placeholder="Gear Auto or Menual"
                        size="small"
                    />
                    <TextField
                        sx={{ width: '90%', m: 2 }}
                        id="outlined-size-small"
                        name="img"
                        onBlur={handelOnBlur}
                        placeholder="image link"
                        size="small"
                    />
                    <TextareaAutosize
                        aria-label="empty textarea"
                        name="des"
                        onBlur={handelOnBlur}
                        placeholder="Type Car Description"
                        style={{ width: "90%", marginLeft: "12px", height: "200px" }}
                    />
                    <Button type="submit" sx={{ m: 2 }} variant="contained">Submit</Button>
                </form>
            </Container>
        </Box>
    );
};

export default AddProduct;