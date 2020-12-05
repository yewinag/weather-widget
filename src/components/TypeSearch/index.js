import React from 'react';
import Layout from '../Layout';
import Input from '../Input';
import Button from '../Button';

const TypeSearch = (props) => (
            <Layout flex>
                <Input 
                    placeholder="Type city name" 
                    onChange={(e)=> props.onChange(e.target.value)} 
                />
                <Button 
                    onClick={()=> props.onSearch()} 
                    disabled={props.weather.weather.isFetching}
                >
                    Search
                </Button>
            </Layout>
        );
export default TypeSearch;