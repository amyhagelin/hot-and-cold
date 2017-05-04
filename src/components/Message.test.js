import Message from './Message';
import { shallow } from 'enzyme';
import React from 'react';

it('Renders without crashing', () => {
    shallow(<Message />);
});

it('Renders the correct message', () => {
	const mockSolution = 20;
	const mockCurrentGuess = 60;
	const wrapper = shallow(<Message 
		solution={mockSolution} 
		currentGuess={mockCurrentGuess}
 	/>)
	expect(wrapper.find('h2').text()).toEqual('Cold'); 
});

it('Renders the correct message', () => {
	const mockSolution = 60;
	const mockCurrentGuess = 52;
	const wrapper = shallow(<Message 
		solution={mockSolution} 
		currentGuess={mockCurrentGuess}
 	/>)
	expect(wrapper.find('h2').text()).toEqual('Warm'); 
});

it('Renders the correct message', () => {
	const mockSolution = 15;
	const mockCurrentGuess = 19;
	const wrapper = shallow(<Message 
		solution={mockSolution} 
		currentGuess={mockCurrentGuess}
 	/>)
	expect(wrapper.find('h2').text()).toEqual('Hot!'); 
});

it('Renders the correct message', () => {
	const mockSolution = 45;
	const mockCurrentGuess = 45;
	const wrapper = shallow(<Message 
		solution={mockSolution} 
		currentGuess={mockCurrentGuess}
 	/>)
	expect(wrapper.find('h2').text()).toEqual('Correct!'); 
});
