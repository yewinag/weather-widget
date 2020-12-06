import { 
    FETCHING_WEATHER,
    GET_WEATHER_SUCCESS,
    GET_WEATHER_ERR,
    FETCHING_FORECAST,
    GET_FORECAST_SUCCESS,
    GET_FORECAST_ERR
} from '../constants/actionsTypes';

import Api from '../api';
// fetch current weaterh
export const fetchWeather = (params) => async dispatch => {
    dispatch(fetchingWeatherApi())
    try{
        const res = await Api.fetchCurrentWeather(params);        
        dispatch(getWeatherApiSuccess(res.data)) 
        dispatch(featherWeaterForecast(res.data))       
    }
    catch(e){
        dispatch(getWeatherApiErr(e))
    }
}
const fetchingWeatherApi = () => ({
    type: FETCHING_WEATHER
})
const getWeatherApiSuccess = (data) => ({
    type: GET_WEATHER_SUCCESS,
    payload: data
})
const getWeatherApiErr = (data)=> ({
    type: GET_WEATHER_ERR,
    payload: data.response.data
})
// fetch weater forecast
export const featherWeaterForecast = (params) => async dispatch => {
    dispatch(fetchingForecast())    
    try{
        const res = await Api.fetchWeatherForecast(params.coord.lat, params.coord.lon);        
        dispatch(getForecastSuccess(res.data))        
    }
    catch(e){
        dispatch(getForecastErr(e))
    }
}
const fetchingForecast = () => ({
    type: FETCHING_FORECAST
})
const getForecastSuccess = (data) => ({
    type: GET_FORECAST_SUCCESS,
    payload: data
})  
const getForecastErr = (data) => ({
    type: GET_FORECAST_ERR,
    payload: data
})