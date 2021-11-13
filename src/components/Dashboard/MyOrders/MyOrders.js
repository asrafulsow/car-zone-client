import React, { useEffect, useState } from 'react';
import useAuth from '../../../hook/useAuth'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import DeleteIcon from '@mui/icons-material/Delete';
import { Button } from '@mui/material';

const MyOrders = () => {
    const { user } = useAuth();
    console.log(user.email)
    const [myOrders, setMyOrders] = useState([])
    useEffect(() => {
        const url = `https://powerful-harbor-74714.herokuapp.com/booking/?email=${user.email}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setMyOrders(data))

    }, [])

    //delete 
    const handleDelete = id =>{
        const procced = window.confirm('Are your sure to delete')
        if(procced){
            const url = `https://powerful-harbor-74714.herokuapp.com/booking/user/${id}`
        fetch(url,{
            method: 'DELETE'
        })
        .then(res => res.json())
        .then(data => {
            if(data.deletedCount > 0){
                const remaining = myOrders.filter(order =>order._id !== id)
                setMyOrders(remaining)
                alert('delete')
            }
            console.log(data)
        })
        
        }
        
        
    }

    return (
        <div>
            <h1>My orders {myOrders.length}</h1>
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} aria-label="Booking table">
                    <TableHead>
                        <TableRow>
                            <TableCell>Name</TableCell>
                            <TableCell align="right">Email</TableCell>
                            <TableCell align="right">Address</TableCell>
                            <TableCell align="right">Delete</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {myOrders.map((row) => (
                            <TableRow
                                key={row._id}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                <TableCell component="th" scope="row">
                                    {row.clientName}
                                </TableCell>
                                <TableCell align="right">{row.email}</TableCell>
                                <TableCell align="right">{row.address}</TableCell>
                                <TableCell align="right"><Button onClick={() =>handleDelete(row._id)} variant="outlined" startIcon={<DeleteIcon />}>
                                    Delete
                                </Button></TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    );
};

export default MyOrders;