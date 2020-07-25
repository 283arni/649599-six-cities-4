import * as React from 'react';
import LocationItem from '../location-item/location-item';
import {MAX_RENDER_CITY} from '../../const';

interface Props {
  cities: string[];
  activeItem: string;
  onActiveChange: () => void;
  currentCity: string;
  onCityClick: () => void;
}

const LocationsList: React.FunctionComponent<Props> = (props: Props) => {
  const {cities} = props;
  const citiesList = cities.slice(0, MAX_RENDER_CITY);

  return (
    <ul className="locations__list tabs__list">
      {citiesList.map((city, i) => (
        <LocationItem
          {...props}
          key={city + i}
          city={city}
        />
      ))}
    </ul>
  );
};

// LocationsList.propTypes = {
//   cities: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired
// };

export default LocationsList;
