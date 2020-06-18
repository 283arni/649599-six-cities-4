import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import Card from '../card/card';
import offerType from '../../types/offers';

class ListOffers extends PureComponent {
  constructor(props) {
    super(props);
    this.props = props;
    this.state = {
      offer: {}
    };
  }

  render() {
    const {offers, titleCardHandler} = this.props;

    return (
      <div className="cities__places-list places__list tabs__content">
        {offers.map((offer) =>
          <Card
            key={offer.id}
            offer={offer}
            titleCardHandler={titleCardHandler}
            onHover={() => {
              this.setState({offer});
            }}
          />
        )}
      </div>
    );
  }
}

ListOffers.propTypes = {
  offers: PropTypes.arrayOf(
      PropTypes.shape(offerType).isRequired
  ),
  titleCardHandler: PropTypes.func.isRequired
};

export default ListOffers;
