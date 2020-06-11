import React from 'react';
import renderer from 'react-test-renderer';
import 'jest-styled-components';

import Component from '.';

describe('Dashboard', () => {
  test('renders correctly', () => {
    const tree = renderer.create(<Component>{'Test'}</Component>).toJSON();
    expect(tree).toMatchSnapshot();
  });
});