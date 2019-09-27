import React from "react";
import ReactDOM from "react-dom";
import { shallow } from "enzyme";
import App from "./App";
import { Route, BrowserRouter } from "react-router-dom";

describe("App", () => {
  let wrapper = shallow(<App />);
  it("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(
      <BrowserRouter>
        <Route path="/" component={App} />
      </BrowserRouter>,
      div
    );
    ReactDOM.unmountComponentAtNode(div);
  });
  it("should match the snapshot", () => {
    expect(wrapper).toMatchSnapshot();
  });
});
