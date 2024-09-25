import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material'
import axios from 'axios'
import React, { useState } from 'react'

const Api = () => {
    var [user,setUser]=useState([])

    axios.get("https://jsonplaceholder.typicode.com/users")
    .then((response)=>{
        console.log(response.data)
        setUser(response.data)

    })

  return (
    <div>
        <TableContainer>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell>name</TableCell>
                        <TableCell>username</TableCell>
                        <TableCell>city</TableCell>    
                    </TableRow>
                </TableHead>
                <TableBody>
                    {user.map((val)=>{
                        return(
                            <TableRow>
                            <TableCell>{val.name}</TableCell>
                            <TableCell></TableCell>
                            <TableCell></TableCell>    
                        </TableRow>

                        )
                    })}
                   
                </TableBody>
            </Table>
        </TableContainer>
    </div>
  )
}

export default Api