import React from 'react';
import { shallow } from 'enzyme';
import Search from './Search';

describe("Search", () => {
    let wrapper = shallow(<Search/>)
    it('should match the snapshot', () => {
        expect(wrapper).toMatchSnapshot();
    })
})