import React from 'react'
import { Link } from 'react-router-dom'
import { Box, Button, Grid, Typography } from '@mui/material'
import VideoCard from './VideoCard'

const fragments = [
    {
        id: 1,
        src: 'fragment-selidba.MP4',
        title: 'fragment od 2017. do 2021.'
    },
    {
        id: 2,
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
            <Button
                LinkComponent={Link}
                to={'/'}
                size='small'>
                <Typography
                    variant='h5'
                    color='white'
                    fontFamily='cursive'
                    fontSize={18}
                >
                    Povratak na početnu stranu
                </Typography>
            </Button>
            <Grid container justifyContent='space-around'>
                {fragments.map((fragment) => (
                    <Grid item xs={12} sm={6} md={3} key={fragment.id}>
                        <VideoCard key={fragment.id}  {...fragment} />
                    </Grid>
                ))}
            </Grid>
        </Box>
    )
}

export default VideoGallery