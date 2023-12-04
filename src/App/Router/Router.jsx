import React, { Suspense } from 'react'
import { Routes, Route } from 'react-router-dom'
import PropTypes from 'prop-types'
import { Typography } from '@mui/material'

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
                    <Route />
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