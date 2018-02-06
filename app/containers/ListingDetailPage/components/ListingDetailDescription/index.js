import React from 'react';
import PropTypes from 'prop-types';

import { Wrap, Title, Address, AmenitiesTop, Description, SeparationLine, H4, Amenities, Terms } from './styles';

function ListingDetailDescription({ data }) {
  return (
    <Wrap>
      <Title>
        {data.title}
      </Title>
      <Address>
        {data.address.location}
      </Address>
      <AmenitiesTop>
        <span>{data.bedrooms} beds</span>
        <span>{data.bathrooms} bath</span>
        <span>{data.propertySize} m2</span>
      </AmenitiesTop>
      <Description>
        {data.description}
      </Description>
      <SeparationLine />
      <H4>Amenities</H4>
      <Amenities>
        {data.amenities.map((item) => <div key={item}>{item}</div>)}
      </Amenities>
      <SeparationLine />
      <H4>Terms</H4>
      <Terms>
        <div>Available on:</div>
        <div><b>{data.propertyMoveInDate}</b></div>
        <div>Minimum lease term:</div>
        <div><b>{data.leaseDuration} moths</b></div>
        <div>Security deposit:</div>
        <div><b>{data.depositPolicy} month</b></div>
      </Terms>
    </Wrap>
  );
}

ListingDetailDescription.propTypes = {
  data: PropTypes.object,
};

export default ListingDetailDescription;
