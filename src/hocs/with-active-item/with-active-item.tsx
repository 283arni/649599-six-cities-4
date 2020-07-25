import * as React from 'react';
import {offerType} from '../../types/offers';
import {Subtract} from "utility-types";

interface State {
  activeItem: boolean | null;
}

interface InjectingProps {
  offers: offerType[];
  className: string;
  onTitleCardClick: () => void;
  onCardHover: () => void;
  onActiveChange: () => void;
  activeItem: boolean;
  onFavoriteOfferClick: () => void;
}

const withActiveItem = (Component) => {

  type P = React.ComponentProps<typeof Component>;
  type T = Subtract<P, InjectingProps>;

  class WithActiveItem extends React.PureComponent<T, State> {
    constructor(props) {
      super(props);
      this.state = {
        activeItem: null,
      };

      this.handleActiveChange = this.handleActiveChange.bind(this);
    }

    handleActiveChange(item) {
      this.setState({
        activeItem: item
      });
    }

    render() {
      return (
        <Component
          {...this.props}
          activeItem={this.state.activeItem}
          onActiveChange={this.handleActiveChange}
        />
      );
    }
  }

  return WithActiveItem;
};

export default withActiveItem;
