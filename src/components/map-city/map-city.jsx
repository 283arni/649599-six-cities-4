import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {offerType} from '../../types/offers';
import {cityType} from '../../types/city';
import leaflet from 'leaflet';

const icon = leaflet.icon({
  iconUrl: `img/pin.svg`,
  iconSize: [30, 30]
});


class MapCity extends Component {
  constructor(props) {
    super(props);

    this._map = null;
  }

  componentDidUpdate(prevProps) {
    if (prevProps.cityOffers.name !== this.props.cityOffers.name) {
      this.viewCenterCity();
      this.renderPins();
    }
  }

  componentDidMount() {
    this.renderMap();
  }

  viewCenterCity() {
    const {cityOffers} = this.props;
    this._map.setView(cityOffers.coords);
  }

  renderPins() {
    const {offers} = this.props;
    offers.forEach((offer) =>
      leaflet
        .marker(offer.coords, {icon})
        .addTo(this._map)
    );
  }


  renderMap() {
    const {cityOffers} = this.props;

    const city = cityOffers.coords;

    const zoom = 12;
    this._map = leaflet.map(`map`, {
      center: city,
      zoom,
      zoomControl: false,
      marker: true,
      scrollWheelZoom: false
    });
    this._map.setView(city, zoom);

    leaflet
      .tileLayer(`https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png`, {
        attribution: `&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>`
      })
      .addTo(this._map);

    this.renderPins();
  }

  render() {
    return (
      <div id="map" style={{height: `100%`}}></div>
    );
  }
}

MapCity.propTypes = {
  offers: PropTypes.arrayOf(
      PropTypes.shape(offerType).isRequired
  ).isRequired,
  cityOffers: cityType
};

export default MapCity;

