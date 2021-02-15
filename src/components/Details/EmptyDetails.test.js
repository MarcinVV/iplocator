import React from "react";
import {shallow} from "enzyme";
import EmptyDetails from "./EmptyDetails";

describe("EmptyDetails Component", () => {
    let wrapper;
    const props = {
        title: "test"
    };
    beforeEach(() => {
        wrapper = shallow(<EmptyDetails {...props} />);
    });

    it("renders", () => {
        expect(wrapper).not.toBeNull();
    });

    it("renders with props", () => {
        expect(wrapper.find("[data-test='noAddress']").text()).toEqual("No address found");
    });

});
