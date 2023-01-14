import React from 'react';
import Box from '@mui/material/Box';
import CircularProgress from '@mui/material/CircularProgress';

function Preloader() {
    return (
        <Box sx={{ display: 'flex' }}>
            <CircularProgress sx={{margin: 'auto'}} />
        </Box>
    );
}

export default Preloader;