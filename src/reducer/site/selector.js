import NameSpace from '../name-space';
import {createSelector} from 'reselect';


const getSelector = (state) => state[NameSpace.SITE];

export const getCity = createSelector(
    getSelector,
    (state) => state.currentCity
);

export const getOffer = createSelector(
    getSelector,
    (state) => state.offer
);

export const getHoverOffer = createSelector(
    getSelector,
    (state) => state.hoverOffer
);

export const getSortType = createSelector(
    getSelector,
    (state) => state.sortType
);

