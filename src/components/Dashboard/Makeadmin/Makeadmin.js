import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { Alert } from '@mui/material';

const Makeadmin = () => {
    const [email, setEmail] = useState('');
    const [success, setSuccess] = useState(false)

    const handleOnBlur = e => {
        setEmail(e.target.value)
        console.log(e.target.value);
    }
    console.log(email)

    const handleAdminSubmit = e => {
        const user = {email: email}
        fetch('https://powerful-harbor-74714.herokuapp.com/users/admin',{
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
        .then(res => res.json())
        .then(data => {
            if(data.modifiedCount){
                setSuccess(true)
                console.log(data)
            }
            
        })
        e.preventDefault()
    }
    return (
        <div>
            <h1 style={{ textAlign: 'center', marginBottom: '50px' }}>Make Admin</h1>
            <form onSubmit={handleAdminSubmit}>
                <TextField
                    sx={{ width: "70%" }}
                    id="standard-basic"
                    label="Email"
                    type="email"
                    onBlur={handleOnBlur}
                    variant="standard" />
                <Button type="submit" variant="contained">Make Admin</Button>
            </form>
            {success && <Alert severity="success">Add Admin successfully</Alert>}
        </div>
    );
};

export default Makeadmin;