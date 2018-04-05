// Link.react.test.js
import React from 'react';
import App from '../App';
import renderer from 'react-test-renderer';

test('Application loaded', () => {
  const component = renderer.create(
    <App />
  );
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});