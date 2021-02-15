import React from 'react';
import {shallow} from 'enzyme';
import Notification from "./Notification";

describe('Notification Component', () => {
    let wrapper;
    beforeEach(() => {
        wrapper = shallow(<Notification/>);
    });

    it('renders', () => {
        expect(wrapper).not.toBeNull();
    });
});
