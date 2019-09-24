import React from 'react';
import { shallow } from 'enzyme';
import Home from './Home';
import { fetchFromITunes } from '../../Utilities/apiCalls';
import { mockData } from '../../Utilities/mockData';


describe('Home', () => {
    let mockUrl;
    let wrapper = shallow(<Home/>)
    beforeEach (()=> {
        mockUrl = 'https://itunes.apple.com/search?term=JackJohnson'
        window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
            ok: true,
            json: () => Promise.resolve(mockData)
          }));
    });
    it('should match the snapshot', () => {
        expect(wrapper).toMatchSnapshot();
    });
    it('should set state with user inpur', () => {
        wrapper.setState({ userInput: 'Jack Johnson'})
        expect(wrapper.state('userInput')).toEqual('Jack Johnson')
    });
    it("calls fetch with the correct params", () => {
        fetchFromITunes('JackJohnson');
        expect(fetch).toHaveBeenCalledWith(mockUrl);
    });
    it("should return the correct data", async () => {
        const result = await fetchFromITunes('JackJohnson');
        expect(result).toEqual(mockData);
      });
})