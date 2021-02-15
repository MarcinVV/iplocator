import React from "react";
import {shallow} from "enzyme";
import Info from "./Info";

describe("Info Component", () => {
    let wrapper;
    const props = {
        address: "www.wp.pl",
        id: "2b926f1b-db1f-45ac-af87-2130da1e1a2f",
        deleteCard: jest.fn()
    };
    beforeEach(() => {
        wrapper = shallow(<Info {...props} />);
    });

    it("renders", () => {
        expect(wrapper).not.toBeNull();
    });

    it("renders with props", () => {
        expect(wrapper.find("[data-test='address']").text()).toEqual("address: www.wp.pl");
    });

    it("should delete the card", () => {
        wrapper.find("button").simulate("click");

        expect(props.deleteCard).toHaveBeenCalledTimes(1);
    });
});
