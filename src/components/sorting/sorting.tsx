import * as React from 'react';
import {SortOffersType} from '../../const';

interface Props {
  onSortChange: (type: string) => void;
  sortType: string;
  onSortClick: () => void;
  viewSort: boolean;
}


const Sorting: React.FunctionComponent<Props> = ({onSortChange, sortType, onSortClick, viewSort}: Props) => {

  return (
    <form className="places__sorting" action="#" method="get">
      <span className="places__sorting-caption">Sort by</span>
      <span
        className="places__sorting-type"
        tabIndex={0}
        onClick={onSortClick}
      >
        {sortType}
        <svg className="places__sorting-arrow" width="7" height="4">
          <use xlinkHref="#icon-arrow-select"></use>
        </svg>
      </span>
      <ul className={`places__options places__options--custom ${viewSort ? `places__options--opened` : ``}`}>
        {Object.values(SortOffersType).map((type, i) =>
          <li
            key={type + i}
            className={`places__option ${sortType === type ? `places__option--active` : ``}`}
            tabIndex={0}
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


export default Sorting;
