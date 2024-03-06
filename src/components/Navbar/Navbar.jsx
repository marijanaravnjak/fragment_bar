import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Menu from '@mui/material/Menu'
import MenuItem from '@mui/material/MenuItem'
import IconButton from '@mui/material/IconButton'
import Toolbar from '@mui/material/Toolbar'
import Tooltip from '@mui/material/Tooltip'



const Navbar = () => {

    const [anchorEl, setAnchorEl] = useState(null)
    const open = Boolean(anchorEl)
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget)
    }
    const handleClose = () => {
        setAnchorEl(null)
    }

    return (

        <Box component='nav'>
            <Toolbar variant='dense' disableGutters>
                <Tooltip title='Kliknite za više informacija'>
                    <IconButton
                        onClick={handleClick}
                        size='small'
                        edge='start'
                        color='inherit'
                        aria-label='logo'
                        aria-controls={open ? 'fragment-menu' : undefined}
                        aria-haspopup="true"
                        aria-expanded={open ? 'true' : undefined}
                        sx={{
                            '@media(max-width:1024px)':
                                { display: 'none' }
                        }}>
                        <img alt='fragment' src='/fragment_bar/navbar.png' />
                    </IconButton>
                </Tooltip>
                <Tooltip title='Kliknite za više informacija'>
                    <IconButton
                        onClick={handleClick}
                        size='small'
                        edge='start'
                        color='inherit'
                        aria-label='logo'
                        aria-controls={open ? 'fragment-menu' : undefined}
                        aria-haspopup="true"
                        aria-expanded={open ? 'true' : undefined}
                        sx={{
                            '@media(min-width:1024px)':
                                { display: 'none' },
                            '@media(max-width:600px)':
                                { display: 'none' }
                        }}>
                        <img alt='fragment' src='/fragment_bar/navbar.png'
                            style={{ weight: 400, height: 100 }} />
                    </IconButton>
                </Tooltip>
                <Tooltip title='Kliknite za više informacija'>
                    <IconButton
                        onClick={handleClick}
                        size='small'
                        edge='start'
                        color='inherit'
                        aria-label='logo'
                        aria-controls={open ? 'fragment-menu' : undefined}
                        aria-haspopup="true"
                        aria-expanded={open ? 'true' : undefined}
                        sx={{ display: { sm: 'none' } }}
                    >
                        <img alt='logo' src='/fragment_bar/logo.png'
                            style={{ weight: 60, height: 60 }} />
                    </IconButton>
                </Tooltip>
                <Menu
                    anchorEl={anchorEl}
                    id='fragment-menu'
                    open={open}
                    onClose={handleClose}
                    onClick={handleClose}
                    paper={{
                        elevation: 0,
                        sx: {
                            overflow: 'visible',
                            filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
                            mt: 1.5,
                            '& .MuiImg-root': {
                                minWidth: 32,
                                minHeight: 32,
                                ml: -0.5,
                                mr: 1,
                            },
                            '&:before': {
                                content: '""',
                                display: 'block',
                                position: 'absolute',
                                top: 0,
                                right: 14,
                                width: 10,
                                height: 10,
                                bgcolor: 'background.paper',
                                transform: 'translateY(-50%) rotate(45deg)',
                                zIndex: 0,
                            },
                        },
                    }}
                    transformOrigin={{ horizontal: 'center', vertical: 'top' }}
                    anchorOrigin={{ horizontal: 'center', vertical: 'bottom' }}
                >
                    <MenuItem onClick={handleClose}>
                        <Button
                            LinkComponent={Link}
                            to='/menu-articles'
                            size='large'
                            color='inherit'>
                            Katalog pića
                        </Button>
                    </MenuItem>
                    <MenuItem onClick={handleClose}>
                        <Button
                            LinkComponent={Link}
                            to='/about'
                            size='large'
                            color='inherit'>
                            O nama
                        </Button>
                    </MenuItem>
                    <MenuItem onClick={handleClose}>
                        <Button
                            LinkComponent={Link}
                            to='/gallery'
                            size='large'
                            color='inherit'>
                            Galerija
                        </Button>
                    </MenuItem>
                    <MenuItem onClick={handleClose}>
                        <Button
                            LinkComponent={Link}
                            to='/contact'
                            size='large'
                            color='inherit'>
                            Kontakt
                        </Button>
                    </MenuItem>
                </Menu>
            </Toolbar>
        </Box>
    )
}

export default Navbar