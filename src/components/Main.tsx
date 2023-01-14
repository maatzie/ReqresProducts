import React from 'react';
import Products from './Products';
import SearchBar from './SearchBar';
import Preloader from './Preloader';
import Container from '@mui/material/Container';
import Pagination from '@mui/material/Pagination';
import Box from '@mui/material/Box';
import CircularProgress from '@mui/material/CircularProgress';
import NothingFound from './NothingFound';

class Main extends React.Component {
    
    state = {
        products: [],
        loading: true,
        page: 1,
        pagesNumber: 1,
    }
    
    getProducts = (page: number) => {
        fetch(`https://reqres.in/api/products?page=${page}&per_page=5`)
        .then((data) => data.json())
            .then((data) => this.setState({products: data.data, loading: false, pagesNumber: data.total_pages}))
            .catch((error) => {
                console.error(error);
                this.setState({loading: false});
            });
    }

    componentDidMount(): void {
        this.getProducts(this.state.page);
    }

    componentDidUpdate(): void {
        this.getProducts(this.state.page);
    }

    render() {
        return (
            <Container>
                <SearchBar />
                {
                    this.state.loading ? <Preloader/> :
                    this.state.products.length ?
                    ( <Box>
                        <Products products={this.state.products}/>
                        <Pagination 
                            sx={{width: 'fit-content', margin: 'auto'}} 
                            count={this.state.pagesNumber} 
                            page={this.state.page} 
                            onChange={(event: React.ChangeEvent<unknown>,value:number) => {this.setState({page: value})}} />
                    </Box>
                     ) : <NothingFound/>
                }
                            </Container>
        );
    }
}

export default Main