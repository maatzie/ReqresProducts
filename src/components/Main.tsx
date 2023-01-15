import React, {useState, useEffect} from 'react';
import { Link, MemoryRouter, Route, Routes, useLocation, useParams } from 'react-router-dom';
import Products from './Products';
import SearchBar from './SearchBar';
import Preloader from './Preloader';
import Container from '@mui/material/Container';
import Pagination from '@mui/material/Pagination';
import PaginationItem from '@mui/material/PaginationItem';
import Box from '@mui/material/Box';
import NothingFound from './NothingFound';

function Main() {
    const [products, setProducts] = useState([]);
    const [page, setPage] = useState(1);
    const [pagesNumber, setPagesNumber] = useState(1);
    const [loading, setLoading] = useState(true);

    const getProducts = (page: number) => {
        fetch(`https://reqres.in/api/products?page=${page}&per_page=5`)
        .then((data) => data.json())
            .then((data) => {setProducts(data.data); setLoading(false); setPagesNumber(data.total_pages);})
            .catch((error) => {
                console.error(error);
                setLoading(false);
            });
    };

    useEffect(() => {
        getProducts(page);
    }, [page]);

    const location = useLocation();
    const query = new URLSearchParams(location.search);
    const currentPage = parseInt(query.get('page') || '1', 10);
    if(currentPage !== page) {
        setPage(currentPage);
    }

    //setPage(currentPage);
    console.log(products);    

    return (
        <Container>
            <SearchBar />
            {
                loading ? <Preloader/> :
                products.length ?
                ( <Box>
                    <Products products={products}/>
                    <Pagination 
                        sx={{width: 'fit-content', margin: 'auto'}} 
                        count={pagesNumber} 
                        page={page}
                        renderItem={(item) => (
                            <PaginationItem
                              component={Link}
                              to={`${item.page === 1 ? '' : `?page=${item.page}`}`}
                              {...item}
                            />
                          )} 
                        onChange={(event: React.ChangeEvent<unknown>,value:number) => {setPage(value);}} />
                </Box>
                 ) : <NothingFound/>
            }
                        </Container>
    );
}

export default Main;