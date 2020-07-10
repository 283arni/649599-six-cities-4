import React, {Component, createRef} from 'react';
import PropTypes from 'prop-types';
import {offerType} from '../../types/offers';
import leaflet from 'leaflet';

const marker = leaflet.icon({
  iconUrl: `img/pin.svg`,
  iconSize: [20, 30]
});

const activeMarker = leaflet.icon({
  iconUrl: `img/pin-active.svg`,
  iconSize: [20, 30]
});


class MapCity extends Component {
  constructor(props) {
    super(props);
    this._mapRef = createRef();
    this._map = null;
  }

  componentDidUpdate(prevProps) {
    if (prevProps.offers[0].city.name !== this.props.offers[0].city.name) {
      this.viewCenterCity();
      this.renderPins();
    }

    if (prevProps.offer !== this.props.offer) {
      this.renderPins();
    }
  }

  componentDidMount() {
    this.renderMap();
  }

  viewCenterCity() {
    const {offers} = this.props;
    this._map.setView(offers[0].city.coords, offers[0].city.zoom);
  }

  renderPins() {
    const {offers, offer} = this.props;
    let icon = marker;


    offers.forEach((item) => {
      if (offer) {
        icon = item.id === offer.id ? activeMarker : marker;
      }
      leaflet
        .marker(item.coords.target, {icon})
        .addTo(this._map);
    });
  }


  renderMap() {
    const {offers} = this.props;

    const city = offers[0].city.coords;
    const zoom = offers[0].city.zoom;

    this._map = leaflet.map(this._mapRef.current, {
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
      <div id="map" ref={this._mapRef} style={{height: `100%`}}></div>
    );
  }
}

MapCity.propTypes = {
  offers: PropTypes.arrayOf(
      PropTypes.shape(offerType).isRequired
  ).isRequired,
  // cityOffers: cityType,
  offer: PropTypes.shape(offerType),
};

export default MapCity;

