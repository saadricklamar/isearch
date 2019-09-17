import React from 'react';
import { shallow } from 'enzyme';
import Search from './Search';

describe("Search", () => {
    let wrapper = shallow(<Search/>)
    it('should match the snapshot', () => {
        expect(wrapper).toMatchSnapshot();
    });
    it('should accept user inputs', () => {
        wrapper.find('input').simulate('change', {
            target: { value: 'Jack Johnson'}
        })
    });
})