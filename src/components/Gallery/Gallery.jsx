import React from 'react'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'

import Photo from './Photo/Photo'
import { Link } from 'react-router-dom'
import { photos } from '../images'


const Gallery = () => {

    return (

        <Box sx={{
            flexGrow: 1,
            boxSizing: 'border-box',
            width: '100%',
            justifyContent: 'space-around'
        }}>
            <Button
                component={Link}
                to='/'>
                <Typography
                    variant='overline'
                    fontSize={16}
                    fontFamily='cursive'
                    color='whitesmoke'>
                    Povratak na početnu stranu
                </Typography>
            </Button>
            <Typography
                variant='h4'
                fontFamily='cursive'
                color='whitesmoke'
                align='center'>
                Galerija Fragment bara
            </Typography>
            <Grid
                container
                spacing={2}>
                {photos.map((photo) => (
                    <Grid
                        item
                        key={photo.id}
                        xs={10}
                        sm={8}
                        md={4} >
                        <Photo key={photo.id}  {...photo} />
                    </Grid>
                ))}
            </Grid>
        </Box >
    )
}

export default Gallery;