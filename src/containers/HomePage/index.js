import React, { Component } from 'react';
import { connect } from 'react-redux';

import TypeSearch from '../../components/TypeSearch';
import WeatherBoard from '../../components/WeatherBoard';

import { fetchWeather } from '../../actions/weatherActions';
class HomePage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            city: ''
        };
    }
     
    render() { 
        return (
            <React.Fragment>
                <TypeSearch 
                    onChange={(value)=> this.setState({ city: value})}
                    onSearch={()=> this.props.fetchWeather(this.state.city)}
                />                
                <WeatherBoard />
            </React.Fragment>
        );
    }
}
 
const mapDispatchToProps = (dispatch) => {
    return {
        fetchWeather: (params) => dispatch(fetchWeather(params))                    
    }
}
const mapStateToProps = (state) => {
    return {
        weather: state.weather
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(HomePage)