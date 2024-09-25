import { Button, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'

const Use = () => {
    var[x,setX] = useState();
    const inpt = ()=>{
        setX("React")
    }
    const inpt2 = ()=>{
        setX("Angular")
    }
    const inpt3 = ()=>{
        setX("Next")
    }
    // useEffect(()=>{},[])
    useEffect(()=>{
        inpt2()
    },[])


  return (
    <div>
        <br /><br /><br />
        <Typography variant='h3'>Welcome to {x} </Typography>
        <br /><br />
        <Button variant='contained' color='primary' onClick={inpt}>React</Button>&nbsp;
        <Button variant='contained' color='secondary' onClick={inpt2}>Angular</Button>&nbsp;
        <Button variant='contained' color='success' onClick={inpt3}>Next</Button>
    </div>
  )
}

export default Use