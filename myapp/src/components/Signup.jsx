import { Button, TextField } from '@mui/material'
import React from 'react'

const Signup = () => {
  return (
    <div>
        <TextField variant='outlined' label="name"/> <br /><br />
        <TextField variant='outlined' label="age"/> <br /><br />
        <TextField variant='outlined' label="phone"/> <br /><br />
        <Button variant='contained' >submit</Button>

    </div>
  )
}

export default Signup