import React from 'react';
import { shallow } from 'enzyme';
import Home from './Home';

describe('Home', () => {
    let wrapper = shallow(<Home/>)
    it('should match the snapshot', () => {
        expect(wrapper).toMatchSnapshot();
    })
})