import React from 'react';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import PropTypes from 'prop-types';
import withActiveItem from './with-active-item';
import {offer} from '../../mocks/test/offers';

Enzyme.configure({
  adapter: new Adapter()
});

const LocationsList = ({onActiveChange}) => {

  return (
    <ul className="locations__list tabs__list">
      <li
        className="locations__item"
      >
        <a
          className='locations__item-link tabs__item tabs__item--active'
          href="#"
          onClick={() => onActiveChange(`Paris`)}
        >
          <span>Paris</span>
        </a>
      </li>
    </ul>
  );
};

const ListOffer = ({onActiveChange}) => {

  return (
    <div className='near-places__card places__list'>
      <article
        className='near-places__card place-card'
        onMouseOver={() => onActiveChange(offer)}
      ></article>
    </div>
  );
};

LocationsList.propTypes = {
  onActiveChange: PropTypes.func.isRequired
};

ListOffer.propTypes = {
  onActiveChange: PropTypes.func.isRequired
};

describe(`change activ item through withActiveItem`, () => {
  it(`change active item in LocationsListWrapper`, () => {
    const LocationsListWrapper = withActiveItem(LocationsList);
    const component = Enzyme.mount(<LocationsListWrapper />);

    component.find(`.locations__item-link`).simulate(`click`);

    expect(component.instance().state.activeItem).toBe(`Paris`);

  });

  it(`change active item in ListOfferWrapper`, () => {
    const ListOfferWrapper = withActiveItem(ListOffer);
    const component = Enzyme.mount(<ListOfferWrapper />);

    component.find(`.place-card`).simulate(`mouseover`);

    expect(component.instance().state.activeItem).toBe(offer);

  });
});

