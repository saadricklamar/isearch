import React from "react";
import { shallow } from "enzyme";
import Music from "./Music";
import { mockData } from "../../Utilities/mockData";

describe("Music", () => {
  let wrapper = shallow(<Music results={mockData}/>);
  it("should match the snapshot", () => {
    expect(wrapper).toMatchSnapshot();
  });
});
