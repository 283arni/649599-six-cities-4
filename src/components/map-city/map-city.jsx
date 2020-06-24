import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import {offerType} from '../../types/offers';
import leaflet from 'leaflet';


class MapCity extends PureComponent {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    const {offers} = this.props;

    const icon = leaflet.icon({
      iconUrl: `img/pin.svg`,
      iconSize: [30, 30]
    });

    const city = [52.38333, 4.9];

    const zoom = 12;
    const map = leaflet.map(`map`, {
      center: city,
      zoom,
      zoomControl: false,
      marker: true
    });
    map.setView(city, zoom);

    leaflet
      .tileLayer(`https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png`, {
        attribution: `&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>`
      })
      .addTo(map);

    offers.forEach((offer) =>
      leaflet
        .marker(offer.coords, {icon})
        .addTo(map)
    );

  }

  render() {
    return (
      <div className="cities__right-section">
        <section className="cities__map map">
          <div id="map" style={{height: `100%`}}></div>
        </section>
      </div>
    );
  }
}

MapCity.propTypes = {
  offers: PropTypes.arrayOf(
      PropTypes.shape(offerType).isRequired
  ).isRequired
};

export default MapCity;

