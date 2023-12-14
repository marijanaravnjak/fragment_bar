import React from 'react'
import { Card, CardContent, CardMedia, Grid, IconButton, Typography } from '@mui/material'
import { Link } from 'react-router-dom'


const About = () => {

    return (
        <Grid container>
            <Card sx={{ display: 'flex', flexDirection: 'row', backgroundColor: 'ghostwhite' }}>
                <CardContent >
                    <Grid item xs={12} sm={6} md={6} lg>
                        <Typography component='div' variant='h4' fontFamily='cursive' noWrap>
                            FRAGMENT BAR – DAN POČINJE OVDE
                        </Typography><br />
                        <Typography variant='h5' color='text.secondary' component='div'>
                            <Typography variant='h5' fontFamily='cursive' gutterBottom>Fragment je spoj udobnog kafića i kluba, na odličnoj lokaciji, u Kuzminskoj ulici.</Typography>
                            <Typography variant='h5' fontFamily='cursive' gutterBottom>Izdvaja enterijerom koji je mešavina umetničke galerije i kafića koje obilazimo u velikim gradovima.</Typography>
                            <Typography variant='h5' fontFamily='cursive' gutterBottom>Bilo da ste tu zbog kafe sa prijateljima ili koktela sa društvom,</Typography>
                            <Typography variant='h5' fontFamily='cursive' gutterBottom>biće vam udobno i prijatno u ovom ušuškanom ambijentu.</Typography>
                            <Typography variant='h5' fontFamily='cursive' gutterBottom> Svetlo je blago, prigušeno, pa je idealan izbor za sve dnevne varijante:</Typography>
                            <Typography variant='h5' fontFamily='cursive' gutterBottom> druženje sa prijateljicama, ili muško okupljanje,</Typography>
                            <Typography variant='h5' fontFamily='cursive' gutterBottom>pijuckanje kafe uz dnevni posao na kompu,</Typography>
                            <Typography variant='h5' fontFamily='cursive' gutterBottom>brzinska kafica i piće u toku dana, a cene su fantastične…</Typography>
                            <Typography variant='h5' fontFamily='cursive' gutterBottom>Fragment je popularno  mesto u sremskomitrovačkom krugu izlazaka.</Typography>
                            <Typography variant='h5' fontFamily='cursive' gutterBottom> Jedinstveno mesto u kojem se, već na prvi pogled, vidi da se mislilo na sve detalje.</Typography>
                            <Typography variant='h5' fontFamily='cursive' gutterBottom> Kafić u kojem je kafa uvek dobra, a konobari znaju više o nama od nekih prijatelja.</Typography>
                            <Typography variant='h5' fontFamily='cursive' gutterBottom>Često Fragment završi na mnogim Instagram profilima,</Typography>
                            <Typography variant='h5' fontFamily='cursive' gutterBottom>fotke se dele...</Typography>
                            <Typography variant='h5' fontFamily='cursive' gutterBottom> I tako je Fragmet zaslužio svoje mesto među „izabranima“...</Typography>
                            <Typography variant='overline'>(preuzeto sa https://www.ozon.rs/uncategorized/2021/fragment-bar-dan-pocinje-ovde/)</Typography>
                        </Typography>
                        <Grid item sx={{ display: 'flex', flexDirection: 'column', fontFamily: 'cursive' }}>
                            <Typography variant='h5' fontFamily='cursive' align='center'>Fragment</Typography>
                            <IconButton
                                LinkComponent={Link}
                                to={'/video-gallery'}
                                color='inherit'>
                                (video)
                            </IconButton>
                            <IconButton
                                LinkComponent={Link}
                                to={'/'}>
                                povratak na početnu stranu
                            </IconButton>
                        </Grid>
                    </Grid>
                </CardContent>
                <CardContent>
                    <CardMedia sx={{ minHeight: 800, minWidth: 300, }}
                        component='video'
                        src='fragment.mp4'
                        controls>
                    </CardMedia>
                </CardContent>
            </Card >
        </Grid>
    )
}


export default About