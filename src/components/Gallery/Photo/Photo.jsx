import React, { useState } from 'react'
import Container from '@mui/material/Container'
import Box from '@mui/material/Box'
import ImageList from '@mui/material/ImageList'
import ImageListItem from '@mui/material/ImageListItem'

const Photo = (photo) => {

    const [viewImg, setViewImg] = useState(true)

    const handleViewImg = () => {
        setViewImg(!viewImg)
    }

    return (
        <Container
            maxWidth='100%'
            onClick={handleViewImg}>
            {viewImg ?
                (<Box>
                    <ImageList
                        key={photo.id}
                        sx={{
                            width: 500,
                            height: 350,
                            border: '1px solid dodgerblue',
                            overflow: 'hidden',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            cursor: 'pointer',
                            WebkitTransitionProperty: 'all',
                            WebkitTransitionDuration: '0.7s',
                            WebkitTransitionTimingFunction: 'ease'
                        }} >
                        <img
                            src={photo.src}
                            alt={photo.title}
                        />

                    </ImageList>
                </Box>) :
                (<Box>
                    <ImageList
                        sx={{
                            position: 'relative',
                            display: 'flex',
                            zIndex: 100,
                            justifyContent: 'center',
                            alignItems: 'center',
                            overflow: 'visible',
                            marginTop: 0,


                        }}>
                        <ImageListItem>
                            <img
                                src={photo.src}
                                alt={photo.title}
                                style={{
                                    width: '1000px',
                                    height: '800px',
                                    marginTop: 0,
                                }}
                            />
                        </ImageListItem>

                    </ImageList>

                </Box >
                )}
        </Container>
    )
}

export default Photo