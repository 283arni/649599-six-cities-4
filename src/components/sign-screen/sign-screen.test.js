import React from 'react';
import renderer from 'react-test-renderer';
import SignScreen from './sign-screen';


const onLoginSubmit = jest.fn();

it(`check render SignScreen`, () => {
  const tree = renderer.create(
      <SignScreen
        onLoginSubmit={onLoginSubmit}
      />
  ).toJSON();

  expect(tree).toMatchSnapshot();
});
