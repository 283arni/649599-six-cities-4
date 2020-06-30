import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import Main from '../main/main';
import {offerType} from '../../types/offers';
import {reviewType} from '../../types/reviews';
import {Switch, Route, BrowserRouter} from "react-router-dom";
import Property from '../property/property';
import {connect} from "react-redux";
import {ActionCreator} from "../../reducer/reducer";


class App extends PureComponent {

  _renderApp() {
    const {offer, offers, reviews, onTitleClick, onCardHover, currentCity, onCityClick, hoverOffer} = this.props;
    const nearOffers = offers.filter((nearOffer) => nearOffer.city.name === currentCity).slice(0, 3);

    if (offer) {
      return (
        <Property
          offer={offer}
          reviews={reviews}
          nearOffers={nearOffers}
          onTitleCardClick={onTitleClick}
          onCardHover={onCardHover}
        />
      );
    }

    return (
      <Main
        currentCity={currentCity}
        onTitleCardClick={onTitleClick}
        hoverOffer={hoverOffer}
        offers={offers}
        onCardHover={onCardHover}
        onCityClick={onCityClick}
      />
    );
  }

  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            {this._renderApp()}
          </Route>
          <Route exact path="/dev-property">
            <Property
              offer={this.props.offers[0]}
              nearOffers={this.props.offers}
              reviews={this.props.reviews}
              currentCity={this.props.currentCity}
              onTitleCardClick={this.props.onTitleClick}
              onCardHover={this.props.onCardHover}
            />
          </Route>
        </Switch>
      </BrowserRouter>
    );
  }
}

const mapStateToProps = (state) => ({
  offers: state.offers,
  reviews: state.reviews,
  offer: state.offer,
  hoverOffer: state.hoverOffer,
  currentCity: state.currentCity
});

const mapDispatchToProps = (dispatch) => ({
  onTitleClick(offer) {
    dispatch(ActionCreator.setOffer(offer));
  },
  onCardHover(offer) {
    dispatch(ActionCreator.setHoverOffer(offer));
  },
  onCityClick(city) {
    dispatch(ActionCreator.changeCurrentCity(city));
  }
});


App.propTypes = {
  offers: PropTypes.arrayOf(
      PropTypes.shape(offerType).isRequired
  ).isRequired,
  reviews: PropTypes.arrayOf(
      PropTypes.shape(reviewType).isRequired
  ).isRequired,
  offer: PropTypes.object,
  onTitleClick: PropTypes.func.isRequired,
  onCardHover: PropTypes.func.isRequired,
  currentCity: PropTypes.string.isRequired,
  onCityClick: PropTypes.func.isRequired,
  hoverOffer: PropTypes.shape(offerType)
};

export {App};
export default connect(mapStateToProps, mapDispatchToProps)(App);
