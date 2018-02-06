import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import muiThemeable from 'material-ui/styles/muiThemeable';
import FavoriteIcon from 'material-ui/svg-icons/action/favorite-border';
import SolidFavoriteIcon from 'material-ui/svg-icons/action/favorite';
import { currencies } from 'constants/backend-constants';

import ListingCardWrap from './ListingCardWrap';
import {
  FirstLineWrap,
  Favorite,
  Img,
  Name,
  Address,
  Amenities,
  AmenitiesWrap,
} from './styles';

function ListingCard({ muiTheme, isFavorite, data }) {
  const Price = styled.div`
    color: ${muiTheme.palette.primary1Color};
    font-size: 18px;
    font-weight: 600;
  `;
  return (
    <ListingCardWrap to={`/listing-detail/${data.id}`} >
      <Img src={data.primaryImage} alt="img" />
      <FirstLineWrap>
        <AmenitiesWrap>
          <Amenities>
            {data.bedrooms} bedrooms
          </Amenities>
          <Amenities>
            {data.bathrooms} baths
          </Amenities>
        </AmenitiesWrap>
        <Price>
          {data.price} {currencies[data.currency]}
        </Price>
      </FirstLineWrap>
      <Name>
        {data.title}
      </Name>
      <Address>
        {data.address.location}
      </Address>
      <Favorite>
        {isFavorite
          ? <SolidFavoriteIcon style={{ color: '#f44336' }} />
          : <FavoriteIcon style={{ color: 'white' }} />
        }
      </Favorite>
    </ListingCardWrap>
  );
}

ListingCard.propTypes = {
  muiTheme: PropTypes.object,
  isFavorite: PropTypes.bool,
  data: PropTypes.object,
};

export default muiThemeable()(ListingCard);
