import React from 'react';

import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Enzyme from 'enzyme';

import AppTitle from '../components/AppTitle';

Enzyme.configure({ adapter: new Adapter() });

describe('App title', () => {
    it('render title', () => {
        const wrapper = shallow(<AppTitle />)
        expect(wrapper.exists()).toBe(true);        
    });
});