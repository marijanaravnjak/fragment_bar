import React, { memo } from 'react'
import Navbar from '../../../components/Navbar/Navbar'
import Box from '@mui/material/Box'

const Home = () => {
    
    return (

        <Box sx={{ flexGrow:1 }}>
            <Navbar/>
        </Box>
    )
}
export default memo(Home)
