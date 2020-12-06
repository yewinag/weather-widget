import React from 'react';

import renderer from 'react-test-renderer';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Enzyme from 'enzyme';

import Text from '../components/Text';

Enzyme.configure({ adapter: new Adapter() });

describe('P tag', () => {
    it('render p', () => {
        const wrapper = shallow(<Text />)
        expect(wrapper.exists()).toBe(true);
        expect(wrapper).toMatchSnapshot();
    });

});