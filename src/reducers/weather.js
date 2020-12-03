import { 
    FETCHING_WEATHER,
    GET_WEATHER_SUCCESS,
    GET_WEATHER_ERR
 } from '../constants/actionsTypes';

const INITIAL_STATE = {
    isFetching: false    
}

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case FETCHING_WEATHER:
            return {
                ...state, 
                ...{isFetching: true}
            }
        case GET_WEATHER_SUCCESS:
            return {
                ...state,
                ...{ 
                    isFetching: false,                    
                    ...action.payload
                }
            }
        case GET_WEATHER_ERR:
            return {
                ...state,
                ...{ 
                    isFetching: false,                    
                    ...action.payload
                }
            }
        default:
            return state
    }
}