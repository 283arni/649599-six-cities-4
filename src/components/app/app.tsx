import * as React from 'react';
import Main from '../main/main';
import {offerType, favoriteOfferType} from '../../types/offers';
import {reviewType} from '../../types/reviews';
import {userType} from '../../types/user';
import {messageType} from '../../types/message';
import {Switch, Route, Router, Redirect} from "react-router-dom";
import Property from '../property/property';
import SignScreen from '../sign-screen/sign-screen';
import Favorites from '../favorites/favorites';
import {connect} from "react-redux";
import {ActionCreator} from "../../reducer/site/site";
import {Operation as DataOperation} from '../../reducer/data/data';
import {Operation as UserOperation} from '../../reducer/user/user';
import {getConvertOffers, getReverseReviews, getFiltredNearOffers, getMessageServer, getBlocking, getSortedFavoriteOffers} from '../../reducer/data/selector';
import {getCity, getOffer, getHoverOffer, getSortType} from '../../reducer/site/selector';
import {getUser, checkAuthUser} from '../../reducer/user/selector';
import history from '../../history';
import {AppRoute, NOOP} from '../../const';

interface Props {
    offers: offerType[];
    reviews: reviewType[];
    offer: offerType;
    onTitleClick: () => void;
    onCardHover: () => void;
    currentCity: string;
    onCityClick: () => void;
    hoverOffer: offerType;
    sortType: string;
    onSortChange: () => void;
    nearOffers: offerType[];
    isAuth: boolean;
    onLoginSubmit: () => void;
    user: userType;
    onReviewSubmit: () => void;
    messageServer: messageType;
    isBlocked: boolean;
    onFavoriteOfferClick: () => void;
    favoriteOffers: favoriteOfferType[];
}

class App extends React.PureComponent<Props, {}> {

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
              messageServer={messageServer}
            />
          </Route>
          <Route exact path={`${AppRoute.PROPERTY}/:id`} render={({match}) => {
            const foundOffer = offers.find((item) => item.id === +match.params.id);

            return (offer ?
              <Property
                offer={foundOffer}
                reviews={reviews}
                nearOffers={nearOffers}
                onTitleCardClick={onTitleClick}
                onCardHover={NOOP}
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
                user={user}
                messageServer={messageServer}
              />}
          </Route>
          <Route exact path={AppRoute.FAVORITES}>
            <Favorites
              favoriteOffers={favoriteOffers}
              onFavoriteOfferClick={onFavoriteOfferClick}
              onTitleCardClick={onTitleClick}
              onCardHover={NOOP}
              user={user}
              activeItem={currentCity}
            />
          </Route>
        </Switch>
      </Router>
    );
  }
}

const mapStateToProps = (state) => ({
  offers: getConvertOffers(state),
  reviews: getReverseReviews(state),
  offer: getOffer(state),
  hoverOffer: getHoverOffer(state),
  currentCity: getCity(state),
  sortType: getSortType(state),
  nearOffers: getFiltredNearOffers(state),
  isAuth: checkAuthUser(state),
  user: getUser(state),
  messageServer: getMessageServer(state),
  isBlocked: getBlocking(state),
  favoriteOffers: getSortedFavoriteOffers(state)
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
    dispatch(UserOperation.login(mail))
      .then(() => dispatch(DataOperation.loadFavoriteOffers()));
  },
  onReviewSubmit(id, review) {
    dispatch(DataOperation.sendReview(id, review));
  },
  onFavoriteOfferClick(id, status) {
    dispatch(DataOperation.setFavoriteOffer(id, status));
  }
});


export {App};
export default connect(mapStateToProps, mapDispatchToProps)(App);
