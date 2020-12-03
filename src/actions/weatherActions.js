import { FETCHING_WEATHER } from '../constants/actionsTypes';
import axios from 'axios'

export const fetchWeather = () => async dispatch => {
    dispatch(fetchingWeatherApi())
    try{
        const res = await axios.get(`http://yewin/3`)
        dispatch(getWeatherApiSuccess(res.data))        
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
    payload: data
})