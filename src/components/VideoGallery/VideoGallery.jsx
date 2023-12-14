import React from 'react'
import { Link } from 'react-router-dom'
import { Box, Grid, IconButton, Typography } from '@mui/material'
import VideoCard from './VideoCard'

const fragments = [
    {
        id: 1,
        src: 'fragment-selidba.MP4',
        title: 'fragment od 2017. do 2021.'
    },
    {
        id: 3,
        src: 'žurka1.mp4',
        title: 'fragment žurka'
    },
    {
        id: 3,
        src: 'fragment-žurka.mp4',
        title: 'fragment žurka'
    },
]

const VideoGallery = () => {

    return (
        <Box
            sx={{
                display: 'flex',
                gap: 2,
                flexWrap: 'wrap',
                p: 0,
                m: 0
            }}>
            <IconButton
                LinkComponent={Link}
                to={'/'}>
                <Typography
                    variant='h5'
                    color='white'
                    fontFamily='cursive'>
                    povratak na početnu stranu
                </Typography>
            </IconButton>
            <Grid container
                columnSpacing={1}
                rowSpacing={4}
                columns={{ xs: 4, md: 12, }}
                justifyContent='space-around'>
                {fragments.map((fragment) => (
                    <Grid item xs={1} sm={2} md={3} key={fragment.id}>
                        <VideoCard key={fragment.id}  {...fragment} />
                    </Grid>
                ))}
            </Grid>
        </Box>
    )
}

export default VideoGallery