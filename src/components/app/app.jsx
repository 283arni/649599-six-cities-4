import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import Main from '../main/main';
import {offerType} from '../../types/offers';
import {reviewType} from '../../types/reviews';
import {Switch, Route, BrowserRouter} from "react-router-dom";
import Property from '../property/property';
import {connect} from "react-redux";
import {ActionCreator} from "../../reducer/offer/offer";
import {Operation} from '../../reducer/data/data';
import {filterList} from '../../utils';
import {getConvertOffers, getConvertReviews, getConvertNearOffers} from '../../reducer/data/selector';
import {getCity, getOffer, getHoverOffer, getSortType} from '../../reducer/offer/selector';
// import {reviews} from '../../mocks/data/reviews';


class App extends PureComponent {

  _renderApp() {
    const {offer, offers, onTitleClick, onCardHover, currentCity, onCityClick, hoverOffer, sortType, onSortChange, reviews, nearOffers} = this.props;
    
    if (offer) {

      return (
        <Property
          offer={offer}
          reviews={reviews}
          nearOffers={nearOffers.slice(0, 4)}
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
        sortType={sortType}
        onSortChange={onSortChange}
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
            {/* <Property
              offer={this.props.offers[0]}
              nearOffers={this.props.offers}
              reviews={reviews}
              currentCity={this.props.currentCity}
              onTitleCardClick={this.props.onTitleClick}
              onCardHover={this.props.onCardHover}
            /> */}
          </Route>
        </Switch>
      </BrowserRouter>
    );
  }
}

const mapStateToProps = (state) => ({
  offers: getConvertOffers(state),
  reviews: getConvertReviews(state),
  offer: getOffer(state),
  hoverOffer: getHoverOffer(state),
  currentCity: getCity(state),
  sortType: getSortType(state),
  nearOffers: getConvertNearOffers(state)
});

const mapDispatchToProps = (dispatch) => ({
  onTitleClick(offer) {
    dispatch(Operation.loadNearOffers(offer.id))
      .then(() => dispatch(Operation.loadReviews(offer.id)))
      .then(() => dispatch(ActionCreator.setOffer(offer)));
  },
  onCardHover(offer) {
    dispatch(ActionCreator.setHoverOffer(offer));
  },
  onCityClick(city) {
    dispatch(ActionCreator.changeCurrentCity(city));
  },
  onSortChange(valueType) {
    dispatch(ActionCreator.setSortType(valueType));
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
  hoverOffer: PropTypes.shape(offerType),
  sortType: PropTypes.string.isRequired,
  onSortChange: PropTypes.func.isRequired,
  nearOffers: PropTypes.array
};

export {App};
export default connect(mapStateToProps, mapDispatchToProps)(App);
