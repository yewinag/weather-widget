import React, { Component } from 'react';
import styled from 'styled-components';

const LoadingLayout = styled.div`
    display: 'flex';
    align-items: 'center';
`
const WeatherLayout = styled.div`
    min-height: 400px;
    border: 1px solid #ddd;
    padding: 20px;
`
const Header = styled.h4`
    font-weight: bold;
    font-size: 24px;
    text-align: center;
`

const WeatherTempLayout = styled.div`
    display: flex;
    justify-content: space-between;
`

const Text = styled.p`
    font-size: 18px;
`

const ForecastLayout = styled.div`
    display: flex;
    justify-content: space-between;
`
const ForecastItem = styled.div`
    padding: 10;
    align-items: center;
    font-weight: bold;
`
const Layout = styled.div`

`
class WeatherBoard extends Component {

    renderLoading = () => (        
        <LoadingLayout>loading..</LoadingLayout>
    )
    renderCityWeather = (weather) => (
        <Layout>
            <Header>{weather.weather.name}</Header>
            <WeatherTempLayout>
                <Text>{weather.weather.main.temp}</Text>
                <div>
                    <Text>
                        winds: {weather.weather.wind.speed}
                    </Text>
                    <Text>
                        Sunrise: {weather.weather.sys.sunrise}
                    </Text>
                    <Text>
                        Sunset: {weather.weather.sys.sunset}
                    </Text>
                </div>
            </WeatherTempLayout>
        </Layout>
    )
    renderError = (weather) => (
        <div>
            {weather.weather.message}
        </div>
    )
    renderForecast = (weather) => (
        <ForecastLayout>
            {
                weather.forecast.daily.map((day, index) => (
                    <ForecastItem key={index}>
                        {day.temp.day}
                    </ForecastItem>
                ))
            }
        </ForecastLayout>
    )
    render() {
        const { weather } = this.props;
        return (
            <WeatherLayout>
                {weather.weather.isFetching && this.renderLoading()}
                {weather.weather.cod === 200 && this.renderCityWeather(weather)}
                {weather.weather.cod == 404 && this.renderError(weather)}
                {weather.weather.cod == 400 && this.renderError(weather)}
                {weather.forecast.hasOwnProperty('daily') && this.renderForecast(weather)}                                                        
            </WeatherLayout>
        );
    }
}

export default WeatherBoard;