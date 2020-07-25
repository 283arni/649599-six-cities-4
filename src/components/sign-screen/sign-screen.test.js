import * as React from 'react';
import renderer from 'react-test-renderer';
import SignScreen from './sign-screen';
import {Router} from 'react-router-dom';
import history from '../../history';


const onLoginSubmit = jest.fn();

it(`check render SignScreen`, () => {
  const tree = renderer.create(
      <Router
        history={history}
      >
        <SignScreen
          onLoginSubmit={onLoginSubmit}
        />
      </Router>
  ).toJSON();

  expect(tree).toMatchSnapshot();
});
