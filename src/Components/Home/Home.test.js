import React from 'react';
import { shallow } from 'enzyme';
import Home from './Home';


describe('Home', () => {
    let wrapper = shallow(<Home/>)
    it('should match the snapshot', () => {
        expect(wrapper).toMatchSnapshot();
    });
    it('should set state with user inpur', () => {
        wrapper.setState({ userInput: 'Jack Johnson'})
        expect(wrapper.state('userInput')).toEqual('Jack Johnson')
    });
})