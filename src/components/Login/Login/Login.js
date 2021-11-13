import { Alert, AlertTitle, Button, CircularProgress, Container, Grid, TextField, Typography } from '@mui/material';
import React, { useState } from 'react';
import { NavLink,useLocation,useHistory } from 'react-router-dom';
import useAuth from '../../../hook/useAuth';
import login from '../../../images/logini.svg'

const Login = () => {
    const {user,loginUser,isLoading,authError} = useAuth();
    const [loginData, setLoginData] = useState({});

    const location = useLocation();
    const history = useHistory();

    const handleLoginSubmit = e =>{
        loginUser(loginData.email, loginData.password,location,history)
        e.preventDefault();

    }

    const handleOnClick = e =>{
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = {...loginData};
        newLoginData[field] = value;
        setLoginData(newLoginData);
    }
    return (
        <Container style={{padding: "40px"}}>
            <Grid container spacing={2}>
                <Grid sx={{mt:10}} item xs={12} md={6}>
                    <Typography variant="body1" gutterBottom>Login</Typography>
                    {!isLoading && <form onSubmit={handleLoginSubmit}>
                    <TextField
                            sx={{ width: "75%", m: 1 }}
                            id="standard-basic"
                            name="email"
                            onChange={handleOnClick}
                            label="Your Emali"
                            variant="standard"
                        />
                        <TextField
                            sx={{ width: "75%", m: 1 }}
                            id="standard-basic"
                            name="password"
                            onChange={handleOnClick}
                            type="password"
                            label="Your Password"
                            variant="standard"
                        />
                        <Button sx={{ width: "75%", m: 1 }} variant="contained" type="submit">Login</Button>
                        <NavLink to="/register"><Button variant="text">New user? Please Register</Button></NavLink>
                    </form>}
                    {isLoading && <CircularProgress></CircularProgress>}
                    {user?.email && <Alert severity="success">Login successfully</Alert>}
                    {authError && <Alert severity="error">{authError}</Alert>}
                </Grid>
                <Grid item xs={12} md={6}>
                    <img style={{width: '100%'}} src={login} alt="" />
                </Grid>
            </Grid>
        </Container>
    );
};

export default Login;