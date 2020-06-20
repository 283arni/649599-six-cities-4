import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import Main from '../main/main';
import {offerType} from '../../types/offers';
import {Switch, Route, BrowserRouter} from "react-router-dom";
import Property from '../property/property';
import {Pages} from '../../mocks/data/const';


class App extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      offer: {},
      page: ``
    };

    this.handlerMouseOver = this.handlerMouseOver.bind(this);
    this.handlerTitleCardHandler = this.handlerTitleCardHandler.bind(this);
    this.handlerTitleClickProperty = this.handlerTitleClickProperty.bind(this);
  }

  handlerMouseOver(offerCard) {
    this.setState({
      offer: offerCard,
    });
  }

  handlerTitleCardHandler() {
    this.setState({
      page: Pages.PROPERTY,
    });
  }

  handlerTitleClickProperty() {}


  _renderApp() {
    const {housingCount, offers} = this.props;

    if (this.state.page === Pages.PROPERTY) {
      return (
        <Property
          offer={this.state.offer}
          titleCardClick={this.handlerTitleClickProperty}
        />
      );
    }

    return (
      <Main
        housingCount={housingCount}
        titleCardHandler={this.handlerTitleCardHandler}
        offers={offers}
        onHover={this.handlerMouseOver}
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
              titleCardClick={this.handlerTitleClickProperty}
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
  housingCount: PropTypes.number.isRequired
};

export default App;
