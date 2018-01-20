import styled from 'styled-components';
import React from 'react';

const Wrap = styled.div`
  width: 65%;
  margin-right: 20px;
  background: white;
  box-shadow: 0 1px 4px 0 rgba(0,0,0,0.14);
  padding: 20px;

  @media(max-width: 1000px) {
    margin-right: 0px;
    padding: 15px;
    width: 100%;
    margin: 0 15px 0 15px;
  }
`;
const Title = styled.div`
  font-size: 25px;
  font-weight: 600;
  color: rgba(0,0,0,.8);
  margin-bottom: 5px;
`;
const Address = styled.div`
  font-size: 14px;
  color: rgba(0,0,0,.6);
  margin-bottom: 10px;
`;
const AmenitiesTop = styled.div`
  display: flex;
  span {
    margin-right: 30px;
    color: rgba(0,0,0,.8);
  }
`;
const Description = styled.div`
  margin-top: 20px;
  font-size: 14px;
  color: rgba(0,0,0,.8);
`;
const SeparationLine = styled.div`
  border-top: 1px solid rgba(0,0,0,.1);
  margin: 30px 0;
`;
const Amenities = styled.div`
  h4 {
    color: rgba(0,0,0,.9);
  }
  div {
    width: 50%;
    margin-bottom: 5px;
  }
  display: flex;
  flex-wrap: wrap;
  color: rgba(0,0,0,.7);
  font-size: 14px;
`;
const Terms = styled.div`
  div {
    margin-bottom: 5px;
    width: 50%;
  }
  display: flex;
  flex-wrap: wrap;
  color: rgba(0,0,0,.7);
  font-size: 14px;
`;
const H4 = styled.h4`
  color: rgba(0,0,0,.9);
`;

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

/* ListingDetailDescription.propTypes = {
  message: PropTypes.object,
  icon: PropTypes.any,
  to: PropTypes.string,
  currentPathName: PropTypes.string,
};*/

export default ListingDetailDescription;
