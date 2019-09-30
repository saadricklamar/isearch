import React from "react";
import { shallow } from "enzyme";
import Home from "./Home";
import { fetchFromITunes } from "../../Utilities/apiCalls";
import { mockData } from "../../Utilities/mockData";
import { Link, MemoryRouter, Route} from 'react-router';

describe("Home", () => {
  let mockUrl;
  let wrapper = shallow(<Home />);
  beforeEach(() => {
    mockUrl = "https://itunes.apple.com/search?term=JackJohnson";
    window.fetch = jest.fn().mockImplementation(() =>
      Promise.resolve({
        ok: true,
        json: () => Promise.resolve(mockData)
      })
    );
  });
  it("should match the snapshot", () => {
    expect(wrapper).toMatchSnapshot();
  });
  it("should set state with user input", () => {
    wrapper.setState({ userInput: "Jack Johnson" });
    expect(wrapper.state("userInput")).toEqual("Jack Johnson");
  });
  it("calls fetch with the correct params", () => {
    fetchFromITunes("JackJohnson");
    expect(fetch).toHaveBeenCalledWith(mockUrl);
  });
  it("should return the correct data", async () => {
    const result = await fetchFromITunes("JackJohnson");
    expect(result).toEqual(mockData);
  });
  it("should throw an error if the response is not ok", async () => {
    window.fetch = jest.fn().mockImplementationOnce(() =>
      Promise.resolve({
        ok: false
      })
    );
    try {
      await fetchFromITunes("JackJohnson");
    } catch (error) {
      expect(error.message).toBe("Failed to fetch ITunes data");
    }
  });
  it('renders component with associated path when About is clicked', () => {
    expect(wrapper.find('Link').prop('to')).toEqual('/About');
  });
});
