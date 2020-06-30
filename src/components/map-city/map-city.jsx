import React, {Component, createRef} from 'react';
import PropTypes from 'prop-types';
import {offerType} from '../../types/offers';
import {cityType} from '../../types/city';
import {ZOOM_MAP} from '../../mocks/data/const';
import leaflet from 'leaflet';

const marker = leaflet.icon({
  iconUrl: `img/pin.svg`,
  iconSize: [30, 45]
});

const activeMarker = leaflet.icon({
  iconUrl: `img/pin-active.svg`,
  iconSize: [30, 45]
});


class MapCity extends Component {
  constructor(props) {
    super(props);
    this._mapRef = createRef();
    this._map = null;
  }

  componentDidUpdate(prevProps) {
    if (prevProps.cityOffers.name !== this.props.cityOffers.name) {
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
    const {cityOffers} = this.props;
    this._map.setView(cityOffers.coords);
  }

  renderPins() {
    const {offers, offer} = this.props;
    let icon = marker;


    offers.forEach((item) => {
      if (offer) {
        icon = item.id === offer.id ? activeMarker : marker;
      }
      leaflet
        .marker(item.coords, {icon})
        .addTo(this._map);
    });
  }


  renderMap() {
    const {cityOffers} = this.props;

    const city = cityOffers.coords;

    this._map = leaflet.map(this._mapRef.current, {
      center: city,
      zoom: ZOOM_MAP,
      zoomControl: false,
      marker: true,
      scrollWheelZoom: false
    });
    this._map.setView(city, ZOOM_MAP);

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
  cityOffers: cityType,
  offer: PropTypes.shape(offerType)
};

export default MapCity;

