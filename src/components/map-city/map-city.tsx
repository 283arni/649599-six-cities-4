import * as React from 'react';
import {offerType} from '../../types/offers';
import * as leaflet from 'leaflet';

const marker = leaflet.icon({
  iconUrl: `img/pin.svg`,
  iconSize: [20, 30]
});

const activeMarker = leaflet.icon({
  iconUrl: `img/pin-active.svg`,
  iconSize: [20, 30]
});

interface Props {
  offers: offerType[];
  offer: offerType;
}

class MapCity extends React.PureComponent<Props, {}> {
  private _mapRef: React.RefObject<HTMLDivElement>;
  private _map;
  private _markers;

  constructor(props) {
    super(props);
    this._mapRef = React.createRef();
    this._map = null;
    this._markers = null;
  }

  componentDidUpdate(prevProps) {
    if (prevProps.offers[0].city.name !== this.props.offers[0].city.name) {
      this.viewCenterCity();
      this.renderPins();
    }

    if (prevProps.offer && prevProps.offer.id !== this.props.offer.id) {
      this._markers.clearLayers();
      this.renderPins();
    }
  }

  componentDidMount() {
    this.renderMap();
  }

  componentWillUnmount() {
    this._map = null;
  }

  viewCenterCity() {
    const {offers} = this.props;
    this._map.setView(offers[0].city.coords, offers[0].city.zoom);
  }

  renderPins() {
    const {offers, offer} = this.props;
    this._markers = leaflet.layerGroup().addTo(this._map);

    if (offer) {
      this.setTypePin(offer, activeMarker);
    }

    offers.forEach((item) => {
      if (offer && offer.id === item.id) {
        this.setTypePin(offer, activeMarker);
        return;
      }

      this.setTypePin(item, marker);
    });

    leaflet.layerGroup(this._markers);
  }

  setTypePin(offer, type) {
    const icon = type;

    leaflet
      .marker(offer.coords.target, {icon})
      .addTo(this._markers);
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

export default MapCity;

