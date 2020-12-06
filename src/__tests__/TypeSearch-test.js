import React from 'react';
import { Provider } from 'react-redux';
import { testStore } from '../utils';
import TypeSearch from '../components/TypeSearch';

import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Enzyme from 'enzyme';

Enzyme.configure({ adapter: new Adapter() });

describe('Type search', () => {
    let store;
    beforeEach(() => {
        store = testStore();
    });   
    
    it('render type search', () => {
        const wrapper = shallow(
            <Provider store={store}>
                <TypeSearch />                
            </Provider>
        )
        expect(wrapper.exists()).toBe(true);
        expect(wrapper).toMatchSnapshot();
    });
});