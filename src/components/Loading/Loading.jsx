import React from 'react'
import Box from '@mui/material/Box'
import CircularProgress from '@mui/material/CircularProgress'
import Skeleton from '@mui/material/Skeleton'

import PropTypes from 'prop-types'


const Loading = ({ loading }) => {

    return (

        <Box sx={{
            display: 'flex',
            width: 500,
            height: 500,
            background: 'linear-gradient(#f07e6e, #84cdfa, #5ad1cd)',
            opacity: 0.7
        }}>
            {loading &&
                <><Skeleton variant='rectangular' animation='wave' />
                    <CircularProgress style={{ width: 300, height: 300, margin: '18%' }} />
                </>}
        </Box>
    )
}
Loading.propTypes = {
    loading: PropTypes.bool
}
Loading.defaultProps = {
    loading: false
}
export default Loading