import React from 'react'
import { Box, Grid, IconButton, Typography } from '@mui/material'
import { Link } from 'react-router-dom'
import LocationOnIcon from '@mui/icons-material/LocationOn'
import InstagramIcon from '@mui/icons-material/Instagram'
import FacebookIcon from '@mui/icons-material/Facebook'



const Contact = () => {

    return (
        <Grid container
            direction="row"
            justifyContent="space-between"
            alignItems="center">
            <Box
                sx={{
                    p: 6,
                    borderRadius: 2,
                    bgcolor: 'background.default',
                    opacity: 0.7,
                }}>
                <Typography variant='div' noWrap>
                    <Typography
                        variant='h5'
                        padding={3}
                        gutterBottom>
                        Kontakt
                    </Typography>
                    <Typography
                        variant='h6'
                        gutterBottom
                        noWrap >
                        <IconButton
                            LinkComponent={Link}
                            to={'/map'}
                            size='small'
                            color='inherit'>
                            <LocationOnIcon />
                            Sremska Mitrovica, Kuzminska 4
                        </IconButton>
                    </Typography>
                    <Grid item xs={2} sm={4} md={4}>
                        <Typography
                            variant='body1'
                            color='GrayText'
                            fontStyle='italic'
                            align='center'
                            padding={3}
                            gutterBottom >
                            Ili nas posetite na
                        </Typography>
                        <IconButton
                            LinkComponent={Link}
                            to={'https://www.facebook.com/profile.php?id=100054432431930'}
                            target='_blank'
                            rel="noreferrer">
                            <FacebookIcon />
                            <Typography
                                variant='inherit'
                                fontSize={18}>
                                Facebook
                            </Typography>
                        </IconButton>
                        <IconButton
                            LinkComponent={Link}
                            to={'https://www.instagram.com/fragment.bar/'}
                            target='_blank'
                            rel="noreferrer">
                            <InstagramIcon />
                            <Typography
                                variant='inherit'
                                fontSize={18}>
                                Instagram
                            </Typography>
                        </IconButton>
                        <IconButton
                            LinkComponent={Link}
                            to={'https://www.tiktok.com/@fragmentbar'}
                            target='_blank'
                            rel="noreferrer">
                            <img style={{ height: 25, weight: 25 }}
                                alt={'tik tok'}
                                src={'tiktok.jpg'} />
                            <Typography
                                variant='inherit'
                                fontSize={18}
                                gutterBottom>
                                TikTok
                            </Typography>
                        </IconButton>
                        <Grid item xs={6} padding={4}>
                            <IconButton
                                LinkComponent={Link}
                                to={'/'}
                                size='small'
                                color='inherit'>
                                <Typography
                                    variant='overline'
                                    fontSize={12} >
                                    Povratak na početnu stranu
                                </Typography>
                            </IconButton>
                        </Grid>
                    </Grid>
                </Typography>
            </Box>
        </Grid>

    )
}


export default Contact