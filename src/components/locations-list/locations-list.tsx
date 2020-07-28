import * as React from 'react';
import LocationItem from '../location-item/location-item';

interface Props {
  cities: string[];
  activeItem: string;
  onActiveChange: () => void;
  currentCity: string;
  onCityClick: () => void;
}

const LocationsList: React.FunctionComponent<Props> = (props: Props) => {
  const {cities} = props;

  return (
    <ul className="locations__list tabs__list">
      {cities.map((city, i) => (
        <LocationItem
          {...props}
          key={city + i}
          city={city}
        />
      ))}
    </ul>
  );
};


export default LocationsList;
