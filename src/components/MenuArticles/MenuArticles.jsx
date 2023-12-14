import React from 'react'
import { Link } from 'react-router-dom'
import { Box, Button, Grid, Typography } from '@mui/material'
import Articles from './Articles'

const articles = [
    {
        id: 1,
        title: 'kafa',
        src: 'kafa.jpg',
        price: '100 din',
        href: 'https://sr.wikipedia.org/sr-ec/%D0%9A%D0%B0%D1%84%D0%B0'
    },
    {
        id: 2,
        title: 'knjaz',
        src: 'knjaz.jpg',
        price: '150 din',
        href: 'https://sr.wikipedia.org/sr-ec/%D0%9A%D1%9A%D0%B0%D0%B7_%D0%9C%D0%B8%D0%BB%D0%BE%D1%88_(%D0%BA%D0%BE%D0%BC%D0%BF%D0%B0%D0%BD%D0%B8%D1%98%D0%B0)'
    },
    {
        id: 3,
        title: 'kokta',
        src: 'kokta.jpg',
        price: '200 din',
        href: 'https://sr.wikipedia.org/wiki/Cockta'
    },

]

const MenuArticles = () => {

    return (
        <Box sx={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'center',
            textAlign: 'center',
            m: 10
        }}>
             <Button
                LinkComponent={Link}
                to={'/'}
                size='small'>
                <Typography variant='h6'
                    color='white'
                    fontFamily='cursive'
                    fontSize={18}
                >Povratak na početnu stranu
                </Typography>
            </Button>
            <Grid container justifyContent='space-around'>
                {articles.map((article) => (
                    <Grid item xs={12} sm={6} md={3} key={article.id} >
                        <Articles key={article.id} {...article} />
                    </Grid>
                ))}
            </Grid>
           
        </Box>

    )
}

export default MenuArticles