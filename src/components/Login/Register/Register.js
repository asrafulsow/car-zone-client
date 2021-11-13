import { Alert, Button, CircularProgress, Container, Grid, TextField, Typography } from '@mui/material';
import React, { useState } from 'react';
import { NavLink,useHistory } from 'react-router-dom';
import useAuth from '../../../hook/useAuth';
import registe from '../../../images/regester.svg'

const Register = () => {
    const {user,registerUser,isLoading,authError} = useAuth();
    const [loginData, setLoginData] = useState({})
    const history = useHistory();

    const handleOnBlur = e =>{
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = {...loginData};
        newLoginData[field] = value;
        setLoginData(newLoginData);
        console.log(newLoginData)
    }

    const handleLoginSubmit = e =>{
        if(loginData.password !== loginData.password2){
            alert("your password didnt mathch")
            return
        }
        registerUser(loginData.email, loginData.password,loginData.name,history)
        e.preventDefault()

    }

    return (
        <Container style={{padding:"40px"}}>
            <Grid container spacing={2}>
                <Grid sx={{mt:10}} item xs={12} md={6}>
                    <Typography variant="body1" gutterBottom>Register</Typography>
                    {!isLoading && <form onSubmit={handleLoginSubmit}>
                    <TextField
                            sx={{ width: "75%", m: 1 }}
                            id="standard-basic"
                            type="text"
                            name="name"
                            onBlur={handleOnBlur}
                            label="your Name"
                            variant="standard"
                        />
                    <TextField
                            sx={{ width: "75%", m: 1 }}
                            id="standard-basic"
                            type="email"
                            name="email"
                            onBlur={handleOnBlur}
                            label="Your Emali"
                            variant="standard"
                        />
                        <TextField
                            sx={{ width: "75%", m: 1 }}
                            id="standard-basic"
                            name="password"
                            onBlur={handleOnBlur}
                            type="password"
                            label="Your Password"
                            variant="standard"
                        />
                        <TextField
                            sx={{ width: "75%", m: 1 }}
                            id="standard-basic"
                            name="password2"
                            onBlur={handleOnBlur}
                            type="password"
                            label="ReType Your Password"
                            variant="standard"
                        />
                        <Button sx={{ width: "75%", m: 1 }} variant="contained" type="submit">Register</Button>
                        <NavLink to="/login"><Button variant="text">Already user? Please login</Button></NavLink>
                    </form>}
                    {isLoading && <CircularProgress></CircularProgress>}
                    {user?.email && <Alert severity="success">Successfully Created User</Alert>}
                    {authError && <Alert severity="error">{authError}</Alert>}
                </Grid>
                <Grid item xs={12} md={6}>
                    <img style={{width: '100%', marginTop:"20px"}} src={registe} alt="" />
                </Grid>
            </Grid>
        </Container>
    );
};

export default Register;