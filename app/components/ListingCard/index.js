import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import muiThemeable from 'material-ui/styles/muiThemeable';
import FavoriteIcon from 'material-ui/svg-icons/action/favorite-border';

import ListingCardWrap from './ListingCardWrap';

function ListingCard({ muiTheme }) {
  const Img = styled.img`
    width: 100%;
    object-fit: cover
  `;
  const Name = styled.div`
    padding: 0 10px;
    color: rgba(0,0,0,.8);
    font-size: 17px;
    font-weight: 600;
  `;
  const Address = styled.div`
    padding: 0 10px 10px 10px;
    color: rgba(0,0,0,.6);
    font-size: 15px;
  `;
  const Amenities = styled.div`
    color: rgba(0,0,0,.6);
    font-size: 12px;
    margin-right: 15px;
  `;
  const AmenitiesWrap = styled.div`
    display: flex;
  `;
  const Price = styled.div`
    color: ${muiTheme.palette.primary1Color};
    font-size: 18px;
    font-weight: 600;
  `;
  const FirstLineWrap = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 3px 10px 0 10px;
  `;
  const Favorite = styled.div`
    position: absolute;
    right: 10px;
    top: 10px;
  `;

  return (
    <ListingCardWrap to="/listing-detail" >
      <Img src="https://s-ec.bstatic.com/images/hotel/max1024x768/360/36022959.jpg" alt="img" />
      <FirstLineWrap>
        <AmenitiesWrap>
          <Amenities>
            3 beds
          </Amenities>
          <Amenities>
            1 bath
          </Amenities>
        </AmenitiesWrap>
        <Price>
          255 $
        </Price>
      </FirstLineWrap>
      <Name>
        Cozy Appartement London
      </Name>
      <Address>
        23 rue de Exposition Paris
      </Address>
      <Favorite>
        <FavoriteIcon style={{ color: 'white' }} />
      </Favorite>
    </ListingCardWrap>
  );
}

ListingCard.propTypes = {
  muiTheme: PropTypes.object,
};

export default muiThemeable()(ListingCard);
