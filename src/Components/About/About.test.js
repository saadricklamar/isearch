import React from "react";
import { shallow } from "enzyme";
import About from "./About";

describe("About", () => {
  let wrapper = shallow(<About />);
  it("should match the snapshot", () => {
    expect(wrapper).toMatchSnapshot();
  });
  it('renders component with correct path when back arrow is clicked', () =>{
    expect(wrapper.find('Link').prop('to')).toEqual('/');
  })
});
