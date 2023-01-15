import React, {useState} from 'react';
import { useNavigate } from 'react-router-dom';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';
import { idText } from 'typescript';

const SearchIconWrapper = styled('div')(({ theme }) => ({
    padding: theme.spacing(1, 0),
    margin: theme.spacing(0, 2, 0, 0),
    height: '100%',
  }));

const Search = styled(Paper)(({ theme }) => ({
    display: "flex", 
    flexDirection: "row", 
    margin: theme.spacing(3, 0),
    padding: theme.spacing(0, 2),
  }));

const SearchInput = styled(InputBase)(({ theme }) => ({
    width: '100%'
  }));
 
function SearchBar() {
    const [inputText, setInputText] = useState('');
    const navigate = useNavigate();

    const inputHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
        const enteredID = event.target.value;
        if (RegExp('^[0-9]+$').test(enteredID) || enteredID === '') {
            setInputText(enteredID);
        }
    };

    const searchHandler = (event: React.KeyboardEvent<HTMLInputElement>) => {
        if (event.code === 'Enter') {
            inputText ? navigate({
                pathname: '/',
                search: `?id=${inputText}`,
              }) : navigate({pathname: '/'});
        }
    };

    return (
        <Search>
            <SearchIconWrapper>
          <SearchIcon />
        </SearchIconWrapper>
            <SearchInput
                value={inputText}
                placeholder="Search products"
                inputProps={{ 'aria-label': 'search', 'onChange' : inputHandler, 'onKeyDown' : searchHandler}}
            />
        </Search>
    );
}

export default SearchBar