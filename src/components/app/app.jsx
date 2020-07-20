import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import Main from '../main/main';
import {offerType} from '../../types/offers';
import {reviewType} from '../../types/reviews';
import {Switch, Route, Router, Redirect} from "react-router-dom";
import Property from '../property/property';
import SignScreen from '../sign-screen/sign-screen';
import Favorites from '../favorites/favorites';
import {connect} from "react-redux";
import {ActionCreator} from "../../reducer/site/site";
import {Operation as DataOperation} from '../../reducer/data/data';
import {Operation as UserOperation} from '../../reducer/user/user';
import {getConvertOffers, getConvertReviews, getConvertNearOffers, getMessageServer, getBlocking, getConvertFavoriteOffers} from '../../reducer/data/selector';
import {getCity, getOffer, getHoverOffer, getSortType} from '../../reducer/site/selector';
import {getUser, checkAuthUser} from '../../reducer/user/selector';
import history from '../../history';
import {AppRoute} from '../../const';


class App extends PureComponent {

  render() {
    const {
      isBlocked,
      onReviewSubmit,
      offer,
      offers,
      onTitleClick,
      onCardHover,
      currentCity,
      onCityClick,
      hoverOffer,
      sortType,
      onSortChange,
      reviews,
      nearOffers,
      isAuth,
      onLoginSubmit,
      user,
      messageServer,
      onFavoriteOfferClick,
      favoriteOffers
    } = this.props;

    return (
      <Router
        history={history}
      >
        <Switch>
          <Route exact path={AppRoute.MAIN}>
            {isAuth ?
              <Main
                currentCity={currentCity}
                onTitleCardClick={onTitleClick}
                hoverOffer={hoverOffer}
                offers={offers}
                onCardHover={onCardHover}
                onCityClick={onCityClick}
                sortType={sortType}
                onSortChange={onSortChange}
                user={user}
                onFavoriteOfferClick={onFavoriteOfferClick}
              />
              : <Redirect to={AppRoute.LOGIN}/>
            }
          </Route>
          <Route exact path={`${AppRoute.PROPERTY}/:id`} render={({match}) => {
            const foundOffer = offers.find((item) => item.id === +match.params.id);


            return (offer ?
              <Property
                offer={foundOffer}
                reviews={reviews}
                offers={offers}
                nearOffers={nearOffers.slice(0, 4)}
                onTitleCardClick={onTitleClick}
                onCardHover={() => {}}
                user={user}
                onReviewSubmit={onReviewSubmit}
                messageServer={messageServer}
                isBlocked={isBlocked}
                onFavoriteOfferClick={onFavoriteOfferClick}
              /> : null);

          }}/>
          <Route exact path={AppRoute.LOGIN}>
            {isAuth ? <Redirect to={AppRoute.MAIN}/>
              :
              <SignScreen
                onLoginSubmit={onLoginSubmit}
              />}
          </Route>
          <Route exact path={AppRoute.FAVORITES}>
            <Favorites
              offers={favoriteOffers}
              onFavoriteOfferClick={onFavoriteOfferClick}
              onTitleCardClick={onTitleClick}
              onCardHover={() => {}}
              user={user}
            />
          </Route>
        </Switch>
      </Router>
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
  nearOffers: getConvertNearOffers(state),
  isAuth: checkAuthUser(state),
  user: getUser(state),
  messageServer: getMessageServer(state),
  isBlocked: getBlocking(state),
  favoriteOffers: getConvertFavoriteOffers(state)
});

const mapDispatchToProps = (dispatch) => ({
  onTitleClick(offer) {
    dispatch(DataOperation.loadNearOffers(offer.id))
      .then(() => dispatch(DataOperation.loadReviews(offer.id)))
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
  },
  onLoginSubmit(mail) {
    dispatch(UserOperation.login(mail));
    dispatch(DataOperation.loadFavoriteOffers());
  },
  onReviewSubmit(id, review) {
    dispatch(DataOperation.sendReview(id, review));
  },
  onFavoriteOfferClick(id, status) {
    dispatch(DataOperation.setFavoriteOffer(id, status));
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
  nearOffers: PropTypes.array,
  isAuth: PropTypes.bool.isRequired,
  onLoginSubmit: PropTypes.func.isRequired,
  user: PropTypes.object,
  onReviewSubmit: PropTypes.func,
  messageServer: PropTypes.object,
  isBlocked: PropTypes.bool,
  onFavoriteOfferClick: PropTypes.func.isRequired,
  favoriteOffers: PropTypes.arrayOf(
      PropTypes.shape(offerType).isRequired
  ).isRequired,
};

export {App};
export default connect(mapStateToProps, mapDispatchToProps)(App);
