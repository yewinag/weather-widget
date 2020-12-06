import React from 'react';

import renderer from 'react-test-renderer';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Enzyme from 'enzyme';

import Button from '../components/Button';

Enzyme.configure({ adapter: new Adapter() });

describe('button', () => {
    it('render button', () => {
        const wrapper = shallow(<Button />)
        expect(wrapper.exists()).toBe(true);
        expect(wrapper).toMatchSnapshot();
    });
});