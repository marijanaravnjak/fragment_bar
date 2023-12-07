import React from 'react'
import { Box, Button, Grid, Typography } from '@mui/material'
import Photo from './Photo/Photo'
import { Link } from 'react-router-dom'


const photos = [
    {
        id: 'p1',
        src: 'bar2.jpg',
        title: 'bar1',
    },
    {
        id: 'p2',
        src: 'bar1.jpg',
        title: 'bar2',
    },
    {
        id: 'p3',
        src: 'bar3.jpg',
        title: 'bar3',
    },
    {
        id: 'p4',
        src: 'bar7.jpg',
        title: 'bar4',
    },
    {
        id: 'p5',
        src: 'bar6.jpg',
        title: 'bar5',
    },
    {
        id: 'p6',
        src: 'bar8.jpg',
        title: 'bar6',
    },
    {
        id: 'p7',
        src: 'bar4.jpg',
        title: 'bar7',
    },
    {
        id: 'p8',
        src: 'bar5.jpg',
        title: 'bar8',
    }
]


const Gallery = () => {
    return (
        <Box sx={{ flexGrow: 1 }}>
            <Button
                component={Link}
                to='/'>
                <Typography variant='overline' fontSize={12} fontFamily='cursive' color='whitesmoke'>Povratak na početnu stranu</Typography>
            </Button>
            <Typography  variant='h4' fontFamily='cursive' color='whitesmoke' align='center'>Galerija Fragment bara</Typography>
            <Grid container
                columnSpacing={1}
                rowSpacing={4}
                columns={{ xs: 4, md: 12, }}>
                {photos.map((photo) => (
                    <Grid item xs={1} sm={2} md={3} key={photo.id}>
                        <Photo key={photo.id}  {...photo} />
                    </Grid>
                ))}
            </Grid>
        </Box>
    )
}

export default Gallery;