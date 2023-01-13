import React from 'react';
import Products from './Products';
import SearchBar from './SearchBar';
import Container from '@mui/material/Container';

class Main extends React.Component {
    
    state = {
        products: [],
        loading: true,
    }
    
    getProducts = (page: number) => {
        fetch(`https://reqres.in/api/products?page=${page}&per_page=5`)
        .then((data) => data.json())
            .then((data) => this.setState({products: data.data, loading: false}))
            .catch((error) => {
                console.error(error);
                this.setState({loading: false});
            });
    }

    componentDidMount(): void {
        this.getProducts(2);
    }

    render() {
        return (
            <Container>
                <SearchBar/>
                <Products products={this.state.products}/>
            </Container>
        );
    }
}

export default Main