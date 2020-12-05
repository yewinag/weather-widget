import React, { Component } from 'react';
import { connect } from 'react-redux';

import TypeSearch from '../../components/TypeSearch';
import WeatherBoard from '../../components/WeatherBoard';

import { fetchWeather } from '../../actions/weatherActions';
import AppTitle from '../../components/AppTitle';
class HomePage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            city: ''
        };
    }
     
    render() { 
        const { weather } = this.props
        return (
            <React.Fragment>
                <AppTitle>Open Weather</AppTitle>
                <TypeSearch 
                    weather={ weather }
                    onChange={(value)=> this.setState({ city: value})}
                    onSearch={()=> this.props.fetchWeather(this.state.city)}
                />                
                <WeatherBoard weather={ weather }/>
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