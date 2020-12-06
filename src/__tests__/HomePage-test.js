import React from 'react';
import { Provider } from 'react-redux';
import { testStore } from '../utils';
import HomePage from '../containers/HomePage';

import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Enzyme from 'enzyme';

Enzyme.configure({ adapter: new Adapter() });

describe('Home page container', () => {
    let store;
    beforeEach(() => {
        store = testStore();
    });   
    
    it('render home page container', () => {
        const wrapper = shallow(
            <Provider store={store}>
                <HomePage />                
            </Provider>
        )
        expect(wrapper.exists()).toBe(true);
        expect(wrapper).toMatchSnapshot();
    });
});