import { 
    FETCHING_WEATHER,
    GET_WEATHER_SUCCESS,
    GET_WEATHER_ERR,
    FETCHING_FORECAST,
    GET_FORECAST_SUCCESS,
    GET_FORECAST_ERR
 } from '../constants/actionsTypes';

const INITIAL_STATE = {
    weather: {
        isFetching: false, 
    },
    forecast: {
        isFetching: false
    }
    
}

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case FETCHING_WEATHER:
            return {
                ...state, 
                ...{
                    weather: {
                        isFetching: true
                    }
                }
            }
        case GET_WEATHER_SUCCESS:
            return {
                ...state,
                ...{
                    weather: {
                        isFetching: false,
                        ...action.payload
                    }
                }
            }
        case GET_WEATHER_ERR:
            return {
                ...state,
                ...{
                    weather: {
                        isFetching: false,
                        ...action.payload
                    }
                }
            }
        case FETCHING_FORECAST:
            return {
                ...state, 
                ...{
                    forecast: {
                        isFetching: true
                    }
                }
            }
        case GET_FORECAST_SUCCESS:
            return {
                ...state,
                ...{
                    forecast: {
                        isFetching: false,
                        ...action.payload
                    }
                }
            }
        case GET_FORECAST_ERR:
            return {
                ...state,
                ...{
                    forecast: {
                        isFetching: false,
                        ...action.payload
                    }
                }
            }
        default:
            return state
    }
}