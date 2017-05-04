import MainForm from './Form';
import { shallow, mount } from 'enzyme';
import React from 'react';

it('Renders without crashing', () => {
    shallow(<MainForm />);
});

it('Renders correct number of guesses for given array', () => {
	const mockArray = [1, 3, 4, 5]
	const wrapper = shallow(<MainForm guessesArray={mockArray} />)
	expect(wrapper.find('h3').text()).toEqual('Guess # ' + mockArray.length);
});

it('Fires correct handler', () => {
	const callback = jest.fn();
    const wrapper = mount(<MainForm onValueSubmitted={ callback } />);
    wrapper.find('button').simulate('submit');
    expect(callback).toHaveBeenCalled();
});