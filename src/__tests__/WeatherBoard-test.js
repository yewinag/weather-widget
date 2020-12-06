import React from 'react';
import { Provider } from 'react-redux';
import { testStore } from '../utils';
import WeatherBoard from '../components/WeatherBoard';

import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Enzyme from 'enzyme';

Enzyme.configure({ adapter: new Adapter() });

describe('weather board', () => {
    let store;
    beforeEach(() => {
        store = testStore();
    });   
    const testProps = {
        weather: {},
        forecast: {}
    }
    it('render weather board', () => {
        const wrapper = shallow(
            <Provider store={store}>
                <WeatherBoard weather={testProps}/>                
            </Provider>
        )
        expect(wrapper.exists()).toBe(true);
        expect(wrapper.props().children.props.weather).toBe(testProps);
        expect(wrapper).toMatchSnapshot();
    });
});