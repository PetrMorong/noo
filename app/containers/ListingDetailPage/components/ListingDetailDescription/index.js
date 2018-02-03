import React from 'react';

import { Wrap, Title, Address, AmenitiesTop, Description, SeparationLine, H4, Amenities, Terms } from './styles';

function ListingDetailDescription() {
  return (
    <Wrap>
      <Title>
        Cozy appartement London
      </Title>
      <Address>
        23 rue de Exposition
      </Address>
      <AmenitiesTop>
        <span>3 beds</span>
        <span>1 bath</span>
        <span>66 m2</span>
      </AmenitiesTop>
      <Description>
        The apartment is in the clock tower above St Pancras International Station. This guest suite with a double bedroom on the 4th floor looks out over Kings Cross Station. The apartment has another double bedroom, also on the 4th floor being used by the owner or by other guests. This guest suite has all its own facilities not shared with others including in addition to the bed, a living area, a small kitchen/dining area and its own bathroom and shower.

        As the apartment is on the 4th and 5th floors and fully equipped with secondary glazing, the road and railway noise is very low and almost nobody notices it but I would advise delicate sleepers to be aware of it before booking.

        The suite is available for short or long-term letting and ideally suits couples on holiday in London for a few days or a week.

      </Description>
      <SeparationLine />
      <H4>Amenities</H4>
      <Amenities>
        <div>Kitchen</div>
        <div>Elevator</div>
        <div>Wireless Internet</div>
        <div>Suitable for events</div>
        <div>Family/kid friendly</div>
      </Amenities>
      <SeparationLine />
      <H4>Terms</H4>
      <Terms>
        <div>Available on:</div>
        <div><b>September 30, 2018</b></div>
        <div>Minimum lease term:</div>
        <div><b>1 Year</b></div>
        <div>Security deposit:</div>
        <div><b> 1 month</b></div>
      </Terms>
    </Wrap>
  );
}

export default ListingDetailDescription;
