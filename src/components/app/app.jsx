import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import Main from '../main/main';
import {offerType} from '../../types/offers';
import {reviewType} from '../../types/reviews';
import {Switch, Route, BrowserRouter} from "react-router-dom";
import Property from '../property/property';


class App extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      offer: null
    };

    this.handlerCardMouseOver = this.handlerCardMouseOver.bind(this);
    this.handlerTitleClick = this.handlerTitleClick.bind(this);
  }

  handlerTitleClick(offerCard) {
    this.setState({
      offer: offerCard,
    });
  }

  handlerCardMouseOver() {}


  _renderApp() {
    const {offers, reviews} = this.props;
    const nearOffers = offers.slice(0, 3);

    if (this.state.offer) {
      return (
        <Property
          offer={this.state.offer}
          reviews={reviews}
          nearOffers={nearOffers}
          onTitleCardClick={this.handlerTitleClick}
          onCardHover={this.handlerCardMouseOver}
        />
      );
    }

    return (
      <Main
        onTitleCardClick={this.handlerTitleClick}
        offers={offers}
        onCardHover={this.handlerCardMouseOver}
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
              onTitleCardClick={this.handlerTitleClick}
              onCardHover={this.handlerCardMouseOver}
            />
          </Route>
        </Switch>
      </BrowserRouter>
    );
  }
}


App.propTypes = {
  offers: PropTypes.arrayOf(
      PropTypes.shape(offerType).isRequired
  ).isRequired,
  reviews: PropTypes.arrayOf(
      PropTypes.shape(reviewType).isRequired
  ).isRequired
};

export default App;
