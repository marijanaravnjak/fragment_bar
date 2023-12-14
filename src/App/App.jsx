import React, { useEffect, useState } from 'react'
import Router from './Router/Router'
import { Box } from '@mui/material'


function App() {

    const [loading, setLoading] = useState(true)

    useEffect(() => {
        Promise.all([

        ]).then(() => {
            setLoading(false)
        })
    }, [])

    return (
        
        <Box sx={{flexGrow:1}}>
            <Router isLoading={loading} />
        </Box >
    )
}

export default App
