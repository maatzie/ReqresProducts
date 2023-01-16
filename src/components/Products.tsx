import React from 'react';
import ProductModal from './ProductModal';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';

interface Product {
    id: number,
    name: string,
    year: number,
    color: string,
}

interface ProductsProps {
    products: Array<Product>,
};

class Products extends React.Component<ProductsProps> {
    state = {
        descriptionOpened: false,
        selectedProduct: {},
    }
    handleOpen = (product: Object) => {console.log(product); this.setState({descriptionOpened: true, selectedProduct: product})};
    handleClose = () => this.setState({descriptionOpened: false});
        
    
    
    render() {
        return (
            <div>
            <Box sx={{minHeight: 350}}>
                <TableContainer component={Paper}>
                    <Table sx={{ minWidth: 650 }} aria-label="simple table">
                        <TableHead>
                        <TableRow>
                            <TableCell>ID</TableCell>
                            <TableCell align="right">Name</TableCell>
                            <TableCell align="right">Year</TableCell>
                        </TableRow>
                        </TableHead>
                        <TableBody>
                        {this.props.products.map((row) => (
                            <TableRow
                            key={row.name}
                            sx={{ '&:last-child td, &:last-child th': { border: 0 }, "backgroundColor": row.color }}
                            onClick={() => this.handleOpen({...row})}
                            >
                            <TableCell component="th" scope="row">
                                {row.id}
                            </TableCell>
                            <TableCell align="right">{row.name}</TableCell>
                            <TableCell align="right">{row.year}</TableCell>
                            </TableRow>
                        ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </Box>
            <ProductModal opened={this.state.descriptionOpened} onClose={this.handleClose} {...this.state.selectedProduct}/>
            </div>
        );
    }
}

export default Products