import React from 'react'
import { Button, Card, CardActions, CardContent, CardMedia, Typography } from '@mui/material'
import { Link } from 'react-router-dom'

const Articles = (article) => {

    return (
        <Card sx={{
            maxWidth: 390,
            display: 'flex',
            m: 2,
            borderRadius: '10%',
        }}>
            <CardContent>
                <CardMedia
                    key={article.img}
                    sx={{ minHeight: 400, borderRadius: '10%', mb: 1.5 }}
                    component='img'
                    src={article.src}
                    alt={article.title}
                    href={article.href} />
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