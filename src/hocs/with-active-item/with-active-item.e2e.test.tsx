import * as React from 'react';
import {configure, mount} from 'enzyme';
import * as Adapter from 'enzyme-adapter-react-16';
import withActiveItem from './with-active-item';
import {offers} from '../../mocks/test/offers';
import {offerType} from '../../types/offers';


configure({
  adapter: new Adapter()
});

interface Props {
  onActiveChange: (value: string | offerType) => void;
}

const LocationsList: React.FunctionComponent<Props> = ({onActiveChange}: Props) => {

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

const ListOffer: React.FunctionComponent<Props> = ({onActiveChange}: Props) => {

  return (
    <div className='near-places__card places__list'>
      <article
        className='near-places__card place-card'
        onMouseOver={() => onActiveChange(offers[0])}
      ></article>
    </div>
  );
};


describe(`change activ item through withActiveItem`, () => {
  it(`change active item in LocationsListWrapper`, () => {
    const LocationsListWrapper = withActiveItem(LocationsList);
    const component = mount(<LocationsListWrapper />);

    component.find(`.locations__item-link`).simulate(`click`);

    expect(component.instance().state.activeItem).toBe(`Paris`);

  });

  it(`change active item in ListOfferWrapper`, () => {
    const ListOfferWrapper = withActiveItem(ListOffer);
    const component = mount(<ListOfferWrapper />);

    component.find(`.place-card`).simulate(`mouseover`);

    expect(component.instance().state.activeItem).toBe(offers[0]);

  });
});

