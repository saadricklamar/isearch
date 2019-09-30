import React from "react";
import { shallow } from "enzyme";
import Music from "./Music";

describe("Music", () => {
  let wrapper = shallow(<Music />);
  it("should match the snapshot", () => {
    expect(wrapper).toMatchSnapshot();
  });
});
