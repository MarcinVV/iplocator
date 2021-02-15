import React from 'react';
import {shallow} from 'enzyme';
import Map from "./Map";

describe('Notification Component', () => {
    let wrapper;
    beforeEach(() => {
        wrapper = shallow(<Map/>);
    });

    it('renders', () => {
        expect(wrapper).not.toBeNull();
    });
});
