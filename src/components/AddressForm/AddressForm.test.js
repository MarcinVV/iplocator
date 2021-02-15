import React from "react";
import {shallow} from "enzyme";
import AddressForm from "./AddressForm";

describe("AddressForm Component", () => {
    let wrapper;
    const prop = {
        change: jest.fn()
    };

    beforeEach(() => {
        wrapper = shallow(<AddressForm {...prop} />);
    });

    it("renders", () => {
        expect(wrapper).not.toBeNull();
    });

    it("should update the weight", () => {
        const address = wrapper.find("#address");
        address.simulate("change", {target: {name: "weight", value: "www.wp.pl"}});
        expect(wrapper.find("#address").props().value).toEqual("www.wp.pl");
    });

    it("should call change", () => {
        const address = wrapper.find("#address");
        address.simulate("change", {target: {name: "weight", value: "www.wp.pl"}});
        wrapper.find("button").simulate("click");
        expect(prop.change).toHaveBeenCalledTimes(1);
    });
});
