import React from 'react';

import renderer from 'react-test-renderer';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Enzyme from 'enzyme';

import AppMainLayout from '../components/AppMainLayout';

Enzyme.configure({ adapter: new Adapter() });

describe('main layout', () => {
    it('render layout', () => {
        const wrapper = shallow(<AppMainLayout />)
        expect(wrapper.exists()).toBe(true);
    });
});