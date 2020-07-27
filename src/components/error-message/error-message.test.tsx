import * as React from 'react';
import * as renderer from 'react-test-renderer';
import ErrorMessage from './error-message';
import {messageServer} from '../../mocks/test/message';

it(`check render ErrorMessage`, () => {

  const tree = renderer.create(
      <ErrorMessage
        messageServer={messageServer}
      />
  ).toJSON();

  expect(tree).toMatchSnapshot();
});
