import { AppBar, Button, Toolbar, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
        <AppBar>
            <Toolbar>
                <Typography variant="h6">Myapp</Typography>

                <Link to='/' >
                <Button variant='contained'>login</Button>
                </Link>

                <Link to='/s' >
                <Button variant='contained'>signup</Button>
                </Link>

                <Link to='/state' >
                <Button variant='contained'>state</Button>
                </Link>

                <Link to='/api' >
                <Button variant='contained'>api</Button>
                </Link>

                <Link to='/poki' >
                <Button variant='contained'>poki</Button>
                </Link>

            </Toolbar>
        </AppBar>
        <br /><br /><br /><br />
    </div>
  )
}

export default Navbar