import React from 'react'
import { Box, ImageList, ImageListItem } from '@mui/material'

const Photo = (photo) => {

    return (
        <Box sx={{
            width: 470,
            height: 350,
            ml:2
        }}>
            <ImageList
                key={photo.id}
                sx={{
                    width: 600,
                    height: 350,
                    ml: '10',
                    overflow: 'hidden',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    zIndex: '999',
                    cursor: 'pointer',
                    WebkitTransitionProperty: 'all',
                    WebkitTransitionDuration: '0.7s',
                    WebkitTransitionTimingFunction: 'ease',
                    '&:hover': {
                        position: 'absolute',
                        transform: 'scale(2)',
                        zIndex: 2,
                        overflow: 'visible',
                        height: '250px',
                        width: '250px',
                        margin: '10 auto',
                        animationName: 'stretch',
                        animationDuration: '1.5s',
                        animationTimingFunction: 'ease-out',
                        animationDelay: '0',
                        animationDirection: 'alternate',
                        animationIterationCount: 'infinite',
                        animationFillMode: 'none',
                        animationPlayState: 'running',
                    },

                    '&:@keyframes stretch': {
                        '0%': {
                            transform: 'scale(.3)',
                        },
                        '100%': {
                            transform: 'scale(2.5)',
                        },
                    },
                }}>
                <ImageListItem key={photo.id}>
                    <img
                        src={photo.src}
                        alt={photo.title}
                    />
                </ImageListItem>
            </ImageList>
        </Box >
    )
}

export default Photo