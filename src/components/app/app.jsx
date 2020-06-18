import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import Main from '../main/main';
import offerType from '../../types/offers';


class App extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      offer: {}
    };

    this.handlerMouseOver = this.handlerMouseOver.bind(this);
    this.handlerTitleCardHandler = this.handlerTitleCardHandler.bind(this);
  }

  handlerMouseOver(offerCard) {
    this.setState({
      offer: offerCard
    });
  }

  handlerTitleCardHandler() {}


  render() {
    const {housingCount, offers} = this.props;

    return (
      <Main
        housingCount={housingCount}
        titleCardHandler={this.handlerTitleCardHandler}
        offers={offers}
        onHover={this.handlerMouseOver}
      />
    );
  }
}

App.propTypes = {
  offers: PropTypes.arrayOf(
      PropTypes.shape(offerType).isRequired
  ),
  housingCount: PropTypes.number.isRequired
};

export default App;
