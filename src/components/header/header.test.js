import React from 'react';
import renderer from 'react-test-renderer';
import Header from './header';
import {user} from '../../mocks/test/user';
import {Router} from 'react-router-dom';
import history from '../../history';


it(`check render Header`, () => {
  const tree = renderer.create(
      <Router
        history={history}
      >
        <Header
          user={user}
        />
      </Router>
  ).toJSON();

  expect(tree).toMatchSnapshot();
});
