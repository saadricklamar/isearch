import React from "react";
import { shallow } from "enzyme";
import Television from "./Television";

describe("Television", () => {
  let wrapper = shallow(<Television />);
  it("should match the snapshot", () => {
    expect(wrapper).toMatchSnapshot();
  });
});
