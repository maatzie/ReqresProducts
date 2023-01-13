import React from 'react';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';
import autocompleteClasses from '@mui/material/Autocomplete/autocompleteClasses';

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

 
interface SearchBarProps {

};  
interface SearchBarState {
    inputText: string,
}; 
class SearchBar extends React.Component<SearchBarProps, SearchBarState> {
    constructor(props: SearchBarProps) {
        super(props);
        this.state = {
            inputText: '',
        }
    }

    inputHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
        const enteredID = event.target.value;
        if (RegExp('^[0-9]+$').test(enteredID) || enteredID === '') {
            this.setState({inputText: enteredID});
        }
    };

    searchHandler = (event: React.KeyboardEvent<HTMLInputElement>) => {
        if (event.code === 'Enter') {
            console.log("Search");
            
        }
    };

    render() {
        return (
            <Search>
                <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
                <SearchInput
                    value={this.state.inputText}
                    placeholder="Search products"
                    inputProps={{ 'aria-label': 'search', 'onChange' : this.inputHandler, 'onKeyDown' : this.searchHandler}}
                />
            </Search>
        );
    }
}

export default SearchBar