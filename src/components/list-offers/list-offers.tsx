import * as React from 'react';
import Card from '../card/card';
import {offerType} from '../../types/offers';
import {NameBlockCard} from '../../const';

interface Props {
    offers: offerType[];
    className: string;
    onTitleCardClick: (offer: offerType) => void;
    onCardHover: (offer: offerType) => void;
    onActiveChange: (offer: offerType) => void;
    activeItem: boolean;
    onFavoriteOfferClick: (id: number, favorite: boolean) => void;
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

// ListOffers.propTypes = {
//   offers: PropTypes.arrayOf(
//       PropTypes.shape(offerType).isRequired
//   ),
//   className: PropTypes.string.isRequired
// };

export default ListOffers;
