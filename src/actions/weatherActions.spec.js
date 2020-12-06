require('isomorphic-fetch'); // to run test spec fetch %%
import { testStore } from '../utils';
import { 
    fetchWeather, 
    featherWeaterForecast 
} from './weatherActions';

describe('dispatch weather api action', () => {
    let store;
    beforeEach(() => {
        store = testStore();
    });  
    it('store update weather data for city correctly', async () => {
        const params = 'yangon'; // sample payload
        return store.dispatch(fetchWeather(params))
            .then(()=> {
                const newState = store.getState();                                
                expect(newState.weather).toHaveProperty('weather');
                expect(newState.weather.weather.cod).toBe(200);                
            })
    });
    it('store update response data of worng city name ', () => {
        const params = 'mm'; // sample worng payload
        return store.dispatch(fetchWeather(params))
            .then(()=> {
                const newState = store.getState();                                          
                expect(newState.weather).toHaveProperty('weather');
                expect(newState.weather.weather.cod).toBe('404');
            })
    });
    it('store update res data of empty input', () => {
        const params = ''; // sample empty payload
        return store.dispatch(fetchWeather(params))
            .then(()=> {
                const newState = store.getState();
                expect(newState.weather).toHaveProperty('weather');
                expect(newState.weather.weather.cod).toBe('400');
            })
    });    
    it('store udpate forecast api res of city', () => {
        const params = {
            coord: {
                lon: 96.16, 
                lat: 16.81
            }
        }; // sample lat lon payload
        return store.dispatch(featherWeaterForecast(params))
            .then(()=> {
                const newState = store.getState();                
                expect(newState.weather).toHaveProperty('forecast');
                expect(newState.weather.forecast.lat).toBe(params.coord.lat);
                expect(newState.weather.forecast.lon).toBe(params.coord.lon);
        })
    });
    it('store udpate forecast api res of empty', () => {
        const params = null; // test empty payload
        return store.dispatch(featherWeaterForecast(params))
            .then(()=> {
                const newState = store.getState();                   
                expect(newState.weather).toHaveProperty('forecast');            
        })
    });
});

