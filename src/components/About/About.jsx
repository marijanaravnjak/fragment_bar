import React from 'react'
import Grid  from '@mui/material/Grid'
import IconButton from '@mui/material/IconButton'
import Typography from '@mui/material/Typography'

import { Link } from 'react-router-dom'
import LocalMoviesIcon from '@mui/icons-material/LocalMovies';


const About = () => {

    return (
        <Grid container>
            <Grid
                flexDirection={'column'}
                xs>
                <video
                    style={{
                        position: 'absolute',
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                        backgroundColor: 'rgba(0,0,0,9)',
                        alignItems: 'center',
                    }}
                    src='fragment.mp4'
                    autoPlay
                    loop
                    muted />

                <Grid sx={{
                    position: 'absolute',
                    display: 'flex',
                    flexDirection: 'column',
                    color: 'white',
                    pt: 4,
                    xs: 12
                }}
                >
                    <Typography variant='h4' fontFamily='cursive' color='white' gutterBottom>
                        FRAGMENT BAR – DAN POČINJE OVDE
                    </Typography>
                    <Typography variant='h5' color='white' component='div'>
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
                        <Typography variant='h5' fontFamily='cursive' gutterBottom> I tako je Fragmet zasluio svoje mesto među „izabranima“...</Typography>
                        <Typography variant='overline'>(preuzeto sa https://www.ozon.rs/uncategorized/2021/fragment-bar-dan-pocinje-ovde/)</Typography>
                    </Typography>
                    <Typography variant='h5' fontFamily='cursive' align='center' color={'white'}>Fragment</Typography>
                    <IconButton
                        LinkComponent={Link}
                        to={'/video-gallery'}
                        color='inherit'>
                        (video galerija <LocalMoviesIcon />)
                    </IconButton>
                    <IconButton
                        LinkComponent={Link}
                        to={'/'}>
                        <Typography
                            variant='h5'
                            color={'white'}>
                            povratak na početnu stranu
                        </Typography>
                    </IconButton>

                </Grid>

            </Grid>
        </Grid>

    )
}


export default About