import React, {useState, useEffect} from 'react';
import { Link, useLocation } from 'react-router-dom';
import Products from './Products';
import SearchBar from './SearchBar';
import Preloader from './Preloader';
import Container from '@mui/material/Container';
import Pagination from '@mui/material/Pagination';
import PaginationItem from '@mui/material/PaginationItem';
import Box from '@mui/material/Box';
import NothingFound from './NothingFound';

function Main() {
    let [products, setProducts] = useState<any[]>([]);;
    const [page, setPage] = useState(1);
    const [id, setId] = useState('');
    const [pagesNumber, setPagesNumber] = useState(1);
    const [loading, setLoading] = useState(true);

    const getProducts = (page: number, id: string) => {
        fetch(`https://reqres.in/api/products?page=${page}&per_page=5&id=${id}`)
        .then((data) => data.json())
            .then((data) => {
                !data.data ? setProducts([]) : 
                data.data instanceof Array ? setProducts(data.data) : setProducts([data.data]);
                
                setLoading(false); 
                setPagesNumber(data.total_pages);})
            .catch((error) => {
                console.error(error);
                setLoading(false);
            });
    };

    useEffect(() => {
        getProducts(page, id);
    }, [page, id]);

    const location = useLocation();
    const query = new URLSearchParams(location.search);
    const currentPage = parseInt(query.get('page') || '1', 10);
    const currentId = query.get('id') || '';
    
    if(currentPage !== page) {
        setPage(currentPage);
    }  
    if(currentId !== id) {
        setId(currentId);
    }

    return (
        <Container>
            <SearchBar/>
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
                              to={`${item.page === 1 ? '?' : `?page=${item.page}`}`}
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