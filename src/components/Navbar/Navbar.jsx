import React from 'react'
import { Link } from 'react-router-dom'
import { Avatar, AppBar, Button, IconButton, Stack, Toolbar, Typography, } from '@mui/material'

const Navbar = () => {
    return (
        <AppBar position='static' color='inherit'>
            <Toolbar>
                <IconButton size='large' edge='start' color='inherit' aria-label='logo'>
                    <Avatar src='/fragment-naziv.jpg' />
                </IconButton>
                <Typography variant='h6' component='div' sx={{ flexGrow: 1 }}>Fragment Bar</Typography>
                <Stack direction='row' spacing={2}>
                    <Button
                        LinkComponent={Link}
                        to='/about'
                        size='large'
                        color='inherit'>
                        O nama
                    </Button>
                    <Button
                        LinkComponent={Link}
                        to='/gallery'
                        size='large'
                        color='inherit'>
                        Galerija
                    </Button>
                    <Button
                        LinkComponent={Link}
                        to='/contact'
                        size='large'
                        color='inherit'>
                        Kontakt
                    </Button>
                </Stack>
            </Toolbar>
        </AppBar>
    )
}

export default Navbar