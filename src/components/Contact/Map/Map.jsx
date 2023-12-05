import React from 'react'
import { Box, IconButton, Typography } from '@mui/material'

const Map = () => {
    
    return (
        <Box
            sx={{
                p: 6,
                borderRadius: 2,
                //bgcolor: 'background.default',
                maxWidth: 500,
                opacity: 0.9
            }}>
            <iframe title='map'
                src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2822.8548030267225!2d19.6129223!3d44.966943699999995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x475ba528db0d03c1%3A0xba1b176e7dfd5027!2sKuzminska%204%2C%20Sremska%20Mitrovica%2022000!5e0!3m2!1sen!2srs!4v1701785690043!5m2!1sen!2srs'
                width='500'
                height='500'
                style={{ border: 0 }}
                allowfullscreen=''
                loading='lazy'
                referrerpolicy='no-referrer-when-downgrade'>
            </iframe>
            <IconButton
                href='/'
                size='small'
                color='inherit'>
                <Typography
                    variant='button'
                    fontSize={12}
                    color={'white'}>
                    Povratak na početnu stranu
                </Typography>
            </IconButton>
        </Box>
    )
}

export default Map