import * as React from 'react';
import * as renderer from 'react-test-renderer';
import NoFavorites from './no-favorites';
import {Router} from 'react-router-dom';
import history from '../../history';


it(`check render NoFavorites`, () => {

  const tree = renderer.create(
      <Router
        history={history}
      >
        <NoFavorites />
      </Router>
  ).toJSON();

  expect(tree).toMatchSnapshot();
});
