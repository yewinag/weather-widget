import React, { Component } from 'react';
import HomePage from '../HomePage';
import AppMainLayout from '../../components/AppMainLayout';
class App extends Component {
    render() { 
        return (
            <AppMainLayout>
                <HomePage />
            </AppMainLayout>
        );
    }
}
 
export default App;