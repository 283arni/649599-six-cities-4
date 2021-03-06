import * as React from 'react';
import Card from '../card/card';
import {offerType} from '../../types/offers';
import {userType} from '../../types/user';
import {NameBlockCard} from '../../const';

interface Props {
    offers: offerType[];
    className: string;
    onTitleCardClick: (offer: offerType) => void;
    onCardHover: (offer: offerType) => void;
    onActiveChange: (offer: offerType) => void;
    activeItem: offerType;
    onFavoriteOfferClick: (id: number, favorite: boolean) => void;
    user: userType;
}

const ListOffers: React.FunctionComponent<Props> = (props: Props) => {
  const {offers, className} = props;
  const tabsContent = className.includes(NameBlockCard.CITIES) ? `` : `tabs__content`;
  const currentClass = className.includes(NameBlockCard.CITIES) ? `cities__place-card` : `near-places__card`;

  return (
    <div className={`${className} places__list ${tabsContent}`}>
      {offers.map((offer) =>
        <Card
          {...props}
          offer={offer}
          key={offer.id}
          className={currentClass}
        />
      )}
    </div>
  );
};


export default ListOffers;
