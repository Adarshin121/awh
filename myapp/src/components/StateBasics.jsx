import { Button, TextField, Typography } from '@mui/material'
import React, { useState } from 'react'

const StateBasics = () => {
    // var name='adarshin'
    var[fname,setfname]=useState("adarshin")
    var[a,seta]=useState()


    const handleinput=(e)=>{
        console.log(e.target.value)
        setfname(e.target.value)
    }
    const submitHandler=()=>{
        seta(fname)

    }
   
  return (
    <div>
        <Typography variant='h4' >Welcome  {a}</Typography>
        <TextField variant='outlined' onChange={handleinput}/>
        <Button variant="contained" onClick={submitHandler}>Submit</Button>

        
    </div>
  )
}

export default StateBasics