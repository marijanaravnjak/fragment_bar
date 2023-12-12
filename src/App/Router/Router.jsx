import React, { Suspense } from 'react'
import { Routes, Route } from 'react-router-dom'
import PropTypes from 'prop-types'
import { Typography } from '@mui/material'
import About from '../../components/About'
import Gallery from '../../components/Gallery'
import Contact from '../../components/Contact'
import Map from '../../components/Contact/Map'
import MenuArticles from '../../components/MenuArticles'

const Home = React.lazy(() => import('./Home'))

const Router = ({ isLoading }) => {

    if (isLoading) {
        return (
            <Typography variant='body2'>Loading</Typography>
        )
    }

    return (
        <div>
            <Suspense fallback='Loading...'>
                <Routes>
                    <Route key='home' path='/' element={<Home />} />
                    <Route key='about' path='/about' element={<About />} />
                    <Route key='gallery' path='/gallery' element={<Gallery />} />
                    <Route key='contact' path='/contact' element={<Contact />} />
                    <Route key='map' path='/map' element={<Map />} />
                    <Route key='menu-articles' path='/menu-articles' element={<MenuArticles/>}/>

                </Routes>
            </Suspense>
        </div>
    )
}

Router.propTypes = {
    isLoading: PropTypes.bool
}

Router.defaultProps = {
    isLoading: false
}

export default Router