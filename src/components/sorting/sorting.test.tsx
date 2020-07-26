import * as React from 'react';
import * as renderer from 'react-test-renderer';
import Sorting from './sorting';

const nameSort = `Popular`;
const onSortChange = jest.fn();
const onSortClick = jest.fn();

it(`check render Sorting`, () => {
  const tree = renderer.create(
      <Sorting
        sortType={nameSort}
        onSortChange={onSortChange}
        onSortClick={onSortClick}
        viewSort={false}
      />
  ).toJSON();

  expect(tree).toMatchSnapshot();
});
