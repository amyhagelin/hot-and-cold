import About from './About';
import { shallow } from 'enzyme';
import React from 'react';

it('Renders without crashing', () => {
    shallow(<About />);
});

it('Fires correct handler', () => {
	const callback = jest.fn();
    const wrapper = shallow(<About aboutHandler={ callback } />);
    wrapper.find('a').simulate('click');
    expect(callback).toHaveBeenCalled();
});