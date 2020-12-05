import H4 from '../H4';
import Layout from '../Layout';
import Text from '../Text';
import Div from '../Div';
import React, { Component } from 'react';
var moment = require('moment-timezone');

class WeatherBoard extends Component {

    renderLoading = () => (        
        <Layout>loading..</Layout>
    )
    handleTime(time, timezone){
        var b = moment.tz(time, timezone);
        return(
            <span>
                {b.format('LT')}
            </span>
        )
    }
    renderCityWeather = (weather) => (
        <Layout margin>
            <H4>{weather.weather.name}</H4>
            <Layout flex justify>
                <div>
                    <img src={`http://openweathermap.org/img/wn/${weather.weather.weather[0].icon}.png`} alt="icon"/>
                    <Text>{weather.weather.main.temp} °C</Text>
                </div>                
                <div>
                    <Text>
                        winds: {weather.weather.wind.speed} m/s
                    </Text>
                    <Text>
                        Sunrise: {moment(weather.weather.sys.sunrise).format('LT')}
                    </Text>
                    <Text>
                        Sunset: {moment(weather.weather.sys.sunset).format('LT')}
                    </Text>
                </div>
            </Layout>
        </Layout>
    )
    renderError = (weather) => (
        <Layout>
            {weather.weather.message}
        </Layout>
    )
    renderForecast = (weather) => (
        <Layout flex justify>
            {
                weather.forecast.daily.map((day, index) => (
                    <Div key={index}>
                        <Text>{this.handleTime(day.sunrise, weather.forecast.timezone)}</Text>
                        <img src={`http://openweathermap.org/img/wn/${day.weather[0].icon}.png`} alt="icon"/>
                        <Text>{day.temp.day} °C</Text>
                    </Div>
                ))
            }
        </Layout>
    )
    render() {
        const { weather } = this.props;
        return (
            <Layout section>
                {weather.weather.isFetching && this.renderLoading()}
                {weather.weather.cod === 200 && this.renderCityWeather(weather)}
                {weather.weather.cod === '404' && this.renderError(weather)}
                {weather.weather.cod === '400' && this.renderError(weather)}
                {weather.forecast.hasOwnProperty('daily') && this.renderForecast(weather)}                                                        
            </Layout>
        );
    }
}

export default WeatherBoard;