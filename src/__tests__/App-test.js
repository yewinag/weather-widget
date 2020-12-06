import React from 'react';

import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Enzyme from 'enzyme';

import App from '../containers/App';

Enzyme.configure({ adapter: new Adapter() });

describe('div layout', () => {
    it('render div', () => {
        const wrapper = shallow(<App />)
        expect(wrapper.exists()).toBe(true);
        expect(wrapper).toMatchSnapshot();
    });
});