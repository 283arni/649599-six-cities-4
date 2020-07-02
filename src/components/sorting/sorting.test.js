import React from 'react';
import renderer from 'react-test-renderer';
import Sorting from './sorting';

const nameSort = `Popular`;
const onSortChange = jest.fn();

it(`check render Sorting`, () => {
  const tree = renderer.create(
      <Sorting
        sortType={nameSort}
        onSortChange={onSortChange}
      />
  ).toJSON();

  expect(tree).toMatchSnapshot();
});
