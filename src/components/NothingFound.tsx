import React from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

function NothingFound() {
    return (
        <Container>
            <Typography variant="h5" component="p">
            Nothing found :(
            </Typography>
        </Container>
    );
}

export default NothingFound;