import React, { Component } from 'react';
import styled from 'styled-components';
 
const TypeSearch = (props) => (
            <SearchLayout onSubmit={()=> props.onSearch()}>
                <SearchInput 
                    placeholder="Type city name" 
                    onChange={(e)=> props.onChange(e.target.value)} 
                />
                <SearchButton 
                    onClick={()=> props.onSearch()} 
                    disabled={props.weather.weather.isFetching}
                >
                    Search
                </SearchButton>
            </SearchLayout>
        );
export default TypeSearch;

const SearchLayout = styled.div`
    display: flex;        
`
const SearchInput = styled.input`
    font-size: 18px;
    padding: 10px;
    color: #000;
`;

const SearchButton = styled.button`
    padding: 10px;
    color: #fff;
    background: #0A56BB;
    border:0;
    border-radius: 4px;
    padding-left: 16px;
    padding-right: 16px;
`