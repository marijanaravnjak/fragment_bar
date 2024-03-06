import React from 'react'
import Button from '@mui/material/Button'
import Card from '@mui/material/Card'
import CardActions from '@mui/material/CardActions'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'

import Typography from '@mui/material/Typography'

import { Link } from 'react-router-dom'

const Articles = (article) => {

    return (
        <Card sx={{
            maxWidth: 390,
            display: 'flex',
            m: 2,
            borderRadius: '10%',
            justifyContent: 'center'
        }}>
            <CardContent>
                <CardMedia
                    key={article.img}
                    sx={{
                        minHeight: 400,
                        borderRadius: '10%',
                        mb: 1.5,
                        alignItems:'center'}}
                    component='img'
                    src={ article.src }
                    alt={ article.title }
                    href={ article.href } />
                <Typography
                    variant='h5'
                    component='div'
                    fontFamily='cursive'
                    gutterBottom>
                    {article.title}
                </Typography>
                <Typography
                    variant='h5'
                    component='div'
                    fontFamily='cursive'
                    gutterBottom>
                    {article.price}
                </Typography>
                <CardActions>
                    <Button
                        LinkComponent={Link}
                        to={article.href}
                        size='small'
                        variant='text'
                        color='inherit'
                        target='_blank'
                        rel='noreferrer'>
                        <Typography
                            variant='h5'
                            component='div'
                            fontFamily='cursive'
                            fontSize='15px'
                            gutterBottom>
                            saznajte više kroz istoriju
                        </Typography>
                    </Button>
                </CardActions>
            </CardContent>
        </Card>
    )
}

export default Articles