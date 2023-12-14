import React from 'react'
import { Card, CardContent, CardMedia, Typography } from '@mui/material'


const VideoCard = (fragment) => {

    return (
        <Card sx={{
            maxWidth: 390,
            display: 'flex',
            m: 2,
            borderRadius: '10%'
        }}>
            <CardContent>
                <CardMedia
                    key={fragment.id}
                    sx={{ minHeight: 400, borderRadius: '10%', mb: 1.5 }}
                    component='video'
                    src={fragment.src}
                    alt={fragment.title}
                    controls
                />
                <Typography
                    variant='h5'
                    component='div'
                    fontFamily='cursive'
                    align='center'
                    gutterBottom>
                    {fragment.title}
                </Typography>
            </CardContent>
        </Card>
    )
}

export default VideoCard