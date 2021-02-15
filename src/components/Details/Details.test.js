import React from "react";
import {shallow} from "enzyme";
import Details from "./Details";

describe("Info Component", () => {
    let wrapper;
    const props = {
        address: "www.wp.pl",
        ip: "212.77.98.9",
        country_name: "Poland",
        region_name: "Pomerania",
        city: "Sopot",
        latitude: 54.31930923461914,
        longitude: 18.63736915588379,
        title: "test"
    }
    beforeEach(() => {
        wrapper = shallow(<Details {...props} />);
    });

    it("renders", () => {
        expect(wrapper).not.toBeNull();
    });

    it("renders with address", () => {
        expect(wrapper.find("[data-test='address']").text()).toEqual("address: www.wp.pl");
    });
    it("renders with ip", () => {
        expect(wrapper.find("[data-test='ip']").text()).toEqual("ip: 212.77.98.9");
    });
    it("renders with country_name", () => {
        expect(wrapper.find("[data-test='country']").text()).toEqual("country: Poland");
    });
    it("renders with region_name", () => {
        expect(wrapper.find("[data-test='region']").text()).toEqual("region: Pomerania");
    });
    it("renders with city", () => {
        expect(wrapper.find("[data-test='city']").text()).toEqual("city: Sopot");
    });
    it("renders with latitude", () => {
        expect(wrapper.find("[data-test='latitude']").text()).toEqual("latitude: 54.31930923461914");
    });
    it("renders with longitude", () => {
        expect(wrapper.find("[data-test='longitude']").text()).toEqual("longitude: 18.63736915588379");
    });
});
