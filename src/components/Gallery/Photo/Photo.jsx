import React from 'react'
import { Box, ImageList, ImageListItem } from '@mui/material'

const Photo = (photo) => {
    return (
        <Box sx={{
            width: 470,
            height: 350,
            background: 'linear-gradient(to bottom, rgba(0,0,0,0.7) 100%, ' +
                'rgb(245,245,245) 10%, rgba(0,0,0,0) 100%)',
                borderRadius: '10%'
        }}>
            <ImageList
                sx={{
                    width: 600,
                    height: 350,
                    ml: 10
                }}>
                <ImageListItem key={photo.img}>
                    <img
                        src={photo.src}
                        alt={photo.title} />
                </ImageListItem>
            </ImageList>
        </Box>
    )
}

export default Photo