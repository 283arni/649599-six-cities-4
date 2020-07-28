import * as React from 'react';
import * as renderer from 'react-test-renderer';
import SignScreen from './sign-screen';
import {Router} from 'react-router-dom';
import history from '../../history';
import {user} from '../../mocks/test/user';
import {messageServer} from '../../mocks/test/message';


const onLoginSubmit = jest.fn();

it(`check render SignScreen`, () => {
  const tree = renderer.create(
      <Router
        history={history}
      >
        <SignScreen
          onLoginSubmit={onLoginSubmit}
          user={user}
          messageServer={messageServer}
        />
      </Router>
  ).toJSON();

  expect(tree).toMatchSnapshot();
});
