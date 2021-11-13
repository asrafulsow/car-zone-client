import React, { useEffect, useState } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import DeleteIcon from '@mui/icons-material/Delete';
import { Button } from '@mui/material';

const ManageAllOrder = () => {
    const [allservice, setAllService] = useState([]);
    useEffect(() =>{
        fetch('https://powerful-harbor-74714.herokuapp.com/booking/user')
        .then(res => res.json())
        .then(data => setAllService(data))
    } ,[])

    //delete 
    const handleDelete = id =>{
        const procced = window.confirm('Are you sure to delete')
        if(procced){
            const url = `https://powerful-harbor-74714.herokuapp.com/booking/user/${id}`
        fetch(url,{
            method: 'DELETE'
        })
        .then(res => res.json())
        .then(data => {
            if(data.deletedCount > 0){
                const remaining = allservice.filter(order =>order._id !== id)
                setAllService(remaining)
                alert('delete')
            }
            console.log(data)
        })
        }
        
        
    }


    return (
        <div>
            <h1 style={{textAlign: "center"}}>Manage All Order</h1>
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
                        {allservice.map((row) => (
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

export default ManageAllOrder;