import React, { useState } from 'react';
import Box from '@mui/material/Box';
import { Button, Container, TextField, Typography } from '@mui/material';
import TextareaAutosize from '@mui/material/TextareaAutosize';
import useAuth from '../../../hook/useAuth';

const Review = () => {
    const { user } = useAuth();

    const initialInfo = { clientName: user.displayName, email: user.email, ratting: '' }
    const [review, setReview] = useState(initialInfo);

    const handelOnBlur = e => {
        const fild = e.target.name;
        const value = e.target.value;

        const newInfo = { ...review }
        newInfo[fild] = value
        console.log(newInfo);

        setReview(newInfo)
    }

    const handleOnSubmit = e => {
        //collect data
        const reviews = {
            ...review

        }
        //send data from server
        fetch('https://powerful-harbor-74714.herokuapp.com/reviews', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(reviews)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    alert('Congratulation Your Review Submitted')

                }

            })


        e.preventDefault()
    }


    return (
        <Box>
            <Container>
                <Typography style={{textAlign: "center"}} variant="h3" gutterBottom component="div">
                    Insert Your Review
                </Typography>
                <form onSubmit={handleOnSubmit}>
                    <TextField
                        disabled
                        sx={{ width: '90%', m: 2 }}
                        id="outlined-size-small"
                        name='clientName'
                        onBlur={handelOnBlur}
                        defaultValue={user.displayName}
                        size="small"
                    />
                    <TextField
                        sx={{ width: '90%', m: 2 }}
                        id="outlined-size-small"
                        name="email"
                        onBlur={handelOnBlur}
                        defaultValue={user.email}
                        size="small"
                    />
                    <TextField
                        sx={{ width: '90%', m: 2 }}
                        id="outlined-size-small"
                        name="ratting"
                        onBlur={handelOnBlur}
                        type="number"
                        size="small"
                    />
                    <TextareaAutosize
                        aria-label="empty textarea"
                        name="review"
                        onBlur={handelOnBlur}
                        placeholder="Empty"
                        style={{ width: "90%", marginLeft: "12px", height: "200px" }}
                    />
                    <Button type="submit" sx={{ m: 2 }} variant="contained">Submit</Button>
                </form>
            </Container>
        </Box>
    );
};

export default Review;