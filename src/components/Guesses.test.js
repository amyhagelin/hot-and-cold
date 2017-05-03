import Guesses from './Guesses';
import { shallow } from 'enzyme';
import React from 'react';

it('Renders without crashing', () => {
    shallow(<Guesses />);
});