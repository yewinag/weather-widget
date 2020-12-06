import React from 'react';

import renderer from 'react-test-renderer';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Enzyme from 'enzyme';

import H4 from '../components/H4';

Enzyme.configure({ adapter: new Adapter() });

describe('header h4', () => {
    it('render h4', () => {
        const wrapper = shallow(<H4 />)
        expect(wrapper.exists()).toBe(true);
        expect(wrapper).toMatchSnapshot();
    });
});