import React from 'react';
import {TypeSortOffers} from '../../mocks/data/const';
import PropTypes from 'prop-types';


const Sorting = ({onSortChange, sortType, onSortClick, viewSort}) => {

  return (
    <form className="places__sorting" action="#" method="get">
      <span className="places__sorting-caption">Sort by</span>
      <span
        className="places__sorting-type"
        tabIndex="0"
        onClick={onSortClick}
      >
        {sortType}
        <svg className="places__sorting-arrow" width="7" height="4">
          <use xlinkHref="#icon-arrow-select"></use>
        </svg>
      </span>
      <ul className={`places__options places__options--custom ${viewSort ? `places__options--opened` : ``}`}>
        {Object.values(TypeSortOffers).map((type, i) =>
          <li
            key={type + i}
            className={`places__option ${sortType === type ? `places__option--active` : ``}`}
            tabIndex="0"
            onClick={() => {
              onSortClick();
              onSortChange(type);
            }}
          >
            {type}
          </li>
        )}
      </ul>
    </form>
  );

};

Sorting.propTypes = {
  onSortChange: PropTypes.func.isRequired,
  sortType: PropTypes.string.isRequired,
  onSortClick: PropTypes.func.isRequired,
  viewSort: PropTypes.bool.isRequired
};


export default Sorting;
