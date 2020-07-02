import React, {PureComponent} from 'react';


const withActiveItem = (Component) => {
  class WithActiveItem extends PureComponent {
    constructor(props) {
      super(props);
      this.state = {
        hoverOffer: null,
        currentCity: `Amsterdam`,
      };

      this.handleOfferHover = this.handleOfferHover.bind(this);
      this.handleCityClick = this.handleCityClick.bind(this);
    }

    handleOfferHover(offer) {
      this.setState({
        hoverOffer: offer
      });
    }

    handleCityClick(city) {
      this.setState({
        currentCity: city
      });
    }

    render() {

      return (
        <Component
          {...this.props}
          currentCity={this.state.currentCity}
          onCardHover={this.handleOfferHover}
          onCityClick={this.handleCityClick}
        />
      );
    }
  }

  return WithActiveItem;
};

export default withActiveItem;
