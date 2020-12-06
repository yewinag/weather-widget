import React from 'react';

import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Enzyme from 'enzyme';

import Layout from '../components/Layout';

Enzyme.configure({ adapter: new Adapter() });

describe('layout', () => {
    it('render layout', () => {
        const wrapper = shallow(<Layout />)
        expect(wrapper.exists()).toBe(true);
        expect(wrapper).toMatchSnapshot();
    });
});