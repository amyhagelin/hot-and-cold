import Message from './Message';
import { shallow } from 'enzyme';
import React from 'react';

it('Renders without crashing', () => {
    shallow(<Message />);
});