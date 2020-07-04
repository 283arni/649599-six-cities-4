import React from 'react';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import PropTypes from 'prop-types';
import withSorting from './with-sorting';

Enzyme.configure({
  adapter: new Adapter()
});

const Sorting = (props) => {
  const {onSortClick} = props;

  return (
    <form className="places__sorting" action="#" method="get">
      <span className="places__sorting-caption">Sort by </span>
      <span className="places__sorting-type" tabIndex={0} onClick={onSortClick}></span>
    </form>
  );
};

Sorting.propTypes = {
  onSortClick: PropTypes.func.isRequired
};


it(`change veiwSort on true in SortingWrapper`, () => {
  const SortingWrapper = withSorting(Sorting);
  const component = Enzyme.mount(<SortingWrapper />);

  component.find(`.places__sorting-type`).simulate(`click`);

  expect(component.instance().state.viewSort).toBe(true);

});
