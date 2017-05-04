import Guesses from './Guesses';
import { shallow } from 'enzyme';
import React from 'react';

it('Renders without crashing', () => {
    const mockArray = [1, 3, 4, 5]
	const wrapper = shallow(<Guesses guessesArray={mockArray} />)
});

it('Renders correct list of guesses for given array', () => {
	const mockArray = [1, 3, 4, 5]
	const wrapper = shallow(<Guesses guessesArray={mockArray} />)
	expect(wrapper.find('h3').text()).toEqual(mockArray.join(" "));
});