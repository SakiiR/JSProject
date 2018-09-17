import React from 'react';
import ReactDOM from 'react-dom';
import LMenu from './LMenu';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<LMenu />, div);
  ReactDOM.unmountComponentAtNode(div);
});
