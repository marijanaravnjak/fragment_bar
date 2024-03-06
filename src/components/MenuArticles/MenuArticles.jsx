import React from 'react'
import { Link } from 'react-router-dom'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'

import Articles from './Articles'
import { articles } from '../images'

const MenuArticles = () => {

    return (
        <Box
            sx={{
                display: 'flex',
                gap: 2,
                flexWrap: 'wrap',
                p: 0,
                m: 0
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
            <Grid
                container
                justifyContent='space-around'>
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