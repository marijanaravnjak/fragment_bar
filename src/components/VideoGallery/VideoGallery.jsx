import React from 'react'
import { Link } from 'react-router-dom'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'

import VideoCard from './VideoCard'
import { fragments } from '../images'

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
            <Grid
                container
                justifyContent='space-around'>
                {fragments.map((fragment) => (
                    <Grid
                        key={fragment.id}
                        item
                        xs={12}
                        sm={6}
                        md={3} >
                        <VideoCard key={fragment.id}  {...fragment} />
                    </Grid>
                ))}
            </Grid>
        </Box>
    )
}

export default VideoGallery