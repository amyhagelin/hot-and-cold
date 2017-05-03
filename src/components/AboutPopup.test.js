import AboutPopup from './AboutPopup';
import { shallow } from 'enzyme';
import React from 'react';

it('Renders without crashing', () => {
    shallow(<AboutPopup />);
});

it('Renders correct props when true', () => {
    const wrapper = shallow(<AboutPopup popupOpened={ true }/>);
    expect(wrapper.hasClass('about-popup')).toEqual(true);
});

it('Renders correct props when false', () => {
    const wrapper = shallow(<AboutPopup popupOpened={ false }/>);
    expect(wrapper.hasClass('about-popup')).toEqual(false);
});

it('Fire correct handlers', () => {
	const callback = jest.fn();
    const wrapper = shallow(<AboutPopup popupOpened={ true } aboutPopupHandler={ callback }/>);
    wrapper.find('button').simulate('click');
    expect(callback).toHaveBeenCalled();
});