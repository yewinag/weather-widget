import React from 'react';

import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Enzyme from 'enzyme';

import Input from '../components/Input';

Enzyme.configure({ adapter: new Adapter() });

describe('input', () => {
    it('render input', () => {
        const wrapper = shallow(<Input />)
        expect(wrapper.exists()).toBe(true);
        expect(wrapper).toMatchSnapshot();
    });
});