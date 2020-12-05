import React, { Component } from 'react';
import styled from 'styled-components';
 
class TypeSearch extends Component {
    render() { 
        return (
            <div>
                <SearchInput 
                    placeholder="Type city name" 
                    onChange={(e)=> this.props.onChange(e.target.value)} 
                />
                <SearchButton onClick={()=> this.props.onSearch()}>
                    Search
                </SearchButton>
            </div>
        );
    }
}
 
export default TypeSearch;

const SearchInput = styled.input`
    font-size: 18px;
    padding: 10px;
    color: #000;
`;

const SearchButton = styled.button`
    padding: 10px;
    color: '#000';
    backgroundColor: palevioletred;
`