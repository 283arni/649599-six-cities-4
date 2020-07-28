import * as React from 'react';
import {offerType} from '../../types/offers';
import {Subtract} from 'utility-types';

interface State {
  viewSort: boolean;
}

interface InjectingProps {
  offers: offerType[];
  onTitleCardClick: () => void;
  onCardHover: () => void;
  onFavoriteOfferClick: () => void;
  className: string;
}

const withSorting = (Component) => {

  type P = React.ComponentProps<typeof Component>
  type T = {} & Subtract<P, InjectingProps>;

  class WithSorting extends React.PureComponent<T, State> {
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
      return (
        <Component
          {...this.props}
          viewSort={this.state.viewSort}
          onSortClick={this.handleSortViewClick}
        />
      );
    }
  }

  return WithSorting;
};

export default withSorting;
