import NewGame from './NewGame';
import { shallow } from 'enzyme';
import React from 'react';

it('Renders without crashing', () => {
    shallow(<NewGame />);
});

it('Fires the correct handlers', () => {
	const callback = jest.fn();
    const wrapper = shallow(<NewGame solutionHandler={ this.solutionHandler }/>);
    wrapper.find('link').simulate('click');
    expect(callback).toHaveBeenCalled();
});