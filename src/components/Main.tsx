import React from 'react';
import Products from './Products';
import SearchBar from './SearchBar';
import Container from '@mui/material/Container';

class Main extends React.Component {
    render() {
        return (
            <Container>
                <SearchBar/>
                <Products/>
            </Container>
        );
    }
}

export default Main