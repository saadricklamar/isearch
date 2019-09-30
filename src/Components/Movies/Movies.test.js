import React from "react";
import { shallow } from "enzyme";
import Movies from "./Movies";

describe("Movies", () => {
  let wrapper = shallow(<Movies />);
  it("should match the snapshot", () => {
    expect(wrapper).toMatchSnapshot();
  });
});
