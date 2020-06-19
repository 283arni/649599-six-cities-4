import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import Main from '../main/main';
import {offerType, propertyType} from '../../types/offers';
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


  _renderApp() {
    const {housingCount, offers, property} = this.props;

    if (this.state.page === Pages.PROPERTY) {
      return (<Property
        property={property}
      />);
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
    const {property} = this.props;
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            {this._renderApp()}
          </Route>
          <Route exact path="/dev-property">
            <Property
              property={property}
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
  ),
  housingCount: PropTypes.number.isRequired,
  property: PropTypes.shape(propertyType).isRequired
};

export default App;
