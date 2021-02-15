import React from "react";
import {shallow} from "enzyme";
import DetailsForm from "./DetailsForm";

describe("DetailsForm Component", () => {
    let wrapper;
    describe("DetailsForm Component Empty", () => {
        const props = {
            state: undefined,
            title: "test",
        };
        beforeEach(() => {
            wrapper = shallow(<DetailsForm {...props} />);
        });

        it("renders", () => {
            expect(wrapper).not.toBeNull();
        });

        it("renders emptyDetails", () => {
            expect(wrapper.find("[data-test='emptyDetails']")).toHaveLength(1);
        });

        it("renders emptyMap", () => {
            expect(wrapper.find("[data-test='emptyMap']")).toHaveLength(1);
        });
    });
    describe("DetailsForm Component Data", () => {
        const props = {
            state: {
                "address": "www.wp.pl",
                "ip": "212.77.98.9",
                "country_name": "Poland",
                "region_name": "Pomerania",
                "city": "Sopot",
                "latitude": 54.31930923461914,
                "longitude": 18.63736915588379
            },
            title: "test"
        }
        beforeEach(() => {
            wrapper = shallow(<DetailsForm {...props} />);
        });
        it("renders", () => {
            expect(wrapper).not.toBeNull();
        });

        it("renders dataDetails", () => {
            expect(wrapper.find("[data-test='dataDetails']")).toHaveLength(1);
        });

        it("renders dataMap", () => {
            expect(wrapper.find("[data-test='dataMap']")).toHaveLength(1);
        });
    })
});
