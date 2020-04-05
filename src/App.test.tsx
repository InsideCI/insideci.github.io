import React from "react";
import App from "./App";
import { shallow, ShallowWrapper } from "enzyme";

describe("<App /> tests", () => {
  let wrapper: ShallowWrapper;

  beforeEach(() => {
    wrapper = shallow(<App />);
  });

  test("renders start page", () => {
    expect(wrapper.find("#start-page")).toHaveLength(1);
  });
});
