import * as React from 'react';
import {configure, mount} from 'enzyme';
import * as Adapter from 'enzyme-adapter-react-16';
import withSorting from './with-sorting';

configure({
  adapter: new Adapter()
});

interface Props {
  onSortClick: () => void;
}

const Sorting: React.FunctionComponent<Props> = (props: Props) => {
  const {onSortClick} = props;

  return (
    <form className="places__sorting" action="#" method="get">
      <span className="places__sorting-caption">Sort by </span>
      <span className="places__sorting-type" tabIndex={0} onClick={onSortClick}></span>
    </form>
  );
};


it(`change veiwSort on true in SortingWrapper`, () => {
  const SortingWrapper = withSorting(Sorting);
  const component = mount(<SortingWrapper />);

  component.find(`.places__sorting-type`).simulate(`click`);

  expect(component.instance().state.viewSort).toBe(true);

});
