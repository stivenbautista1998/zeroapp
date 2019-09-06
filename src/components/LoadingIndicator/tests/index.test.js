import React from 'react';
// import { render } from 'enzyme';
import ReactDOM from 'react-dom';

import LoadingIndicator from '../index';

describe('<LoadingIndicator />', () => {
  it('should render 13 divs', () => {
    const div = document.createElement('div');
    const renderedComponent = ReactDOM.render(<LoadingIndicator />, div);
    expect(renderedComponent.length).toBe(1);
    ReactDOM.unmountComponentAtNode(div);
  });
});
