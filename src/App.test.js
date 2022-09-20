import React from 'react';
import { shallow, render } from 'enzyme';
import App from './App'

describe("App Testing", () => {
    let wrapper;
    
    beforeEach(() => {
        wrapper = shallow(<App />);
    })

    test('renders without crashing', () => {
        const div = document.createElement('div');
        render(<App />, div)
    });
});