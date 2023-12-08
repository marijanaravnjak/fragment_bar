import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Button, Menu, MenuItem, IconButton, Toolbar, Tooltip, Typography, } from '@mui/material'

const Navbar = () => {

    const [anchorEl, setAnchorEl] = useState(null)
    const open = Boolean(anchorEl)
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget)
    }
    const handleClose = () => {
        setAnchorEl(null);
    }

    return (
        <Toolbar>
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
                >
                    <img alt='fragment-ime' src='/fragment.jpg' style={{ width: 600, height: 120 }} />
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

    )
}

export default Navbar