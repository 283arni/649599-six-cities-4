import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import Main from '../main/main';
import {offerType} from '../../types/offers';
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
    const {offers} = this.props;

    if (this.state.offer) {
      return (
        <Property
          offer={this.state.offer}
          onTitleCardClick={this.handlerTitleClick}
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
              onTitleCardClick={this.handlerTitleClick}
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
  ).isRequired
};

export default App;
