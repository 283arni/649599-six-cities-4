import React, {PureComponent} from 'react';
import {TypeSortOffers} from '../../mocks/data/const';
import PropTypes from 'prop-types';


class Sorting extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      viewSort: false
    };

    this.handleSortViewClick = this.handleSortViewClick.bind(this);
  }

  handleSortViewClick() {
    this.setState({
      viewSort: !this.state.viewSort,
    });
  }

  render() {
    const {onSortChange, sortType} = this.props;

    return (
      <form className="places__sorting" action="#" method="get">
        <span className="places__sorting-caption">Sort by</span>
        <span
          className="places__sorting-type"
          tabIndex="0"
          onClick={this.handleSortViewClick}
        >
          {sortType}
          <svg className="places__sorting-arrow" width="7" height="4">
            <use xlinkHref="#icon-arrow-select"></use>
          </svg>
        </span>
        <ul className={`places__options places__options--custom ${this.state.viewSort ? `places__options--opened` : ``}`}>
          {Object.values(TypeSortOffers).map((type, i) =>
            <li
              key={type + i}
              className={`places__option ${sortType === type ? `places__option--active` : ``}`}
              tabIndex="0"
              onClick={() => {
                this.handleSortViewClick();
                onSortChange(type);
              }}
            >
              {type}
            </li>
          )}
        </ul>
      </form>
    );
  }
}

Sorting.propTypes = {
  onSortChange: PropTypes.func.isRequired,
  sortType: PropTypes.string.isRequired
};


export default Sorting;
