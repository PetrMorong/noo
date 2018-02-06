import styled from 'styled-components';
import React from 'react';
import PropTypes from 'prop-types';
// import { GoogleMap, Marker, withGoogleMap, withScriptjs } from 'react-google-maps';

import muiThemeable from 'material-ui/styles/muiThemeable';

const Wrap = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 30px;
  @media(max-width: 1000px) {
    margin: 15px;
    margin-bottom: 100px;
  }
`;
const Container = styled.div`;
  width: 800px;
`;
/* const Title = styled.h4`
  color: rgba(0,0,0,.9);
  margin-top: 0px;
  margin-bottom: 10px;
`;
const SmallWrap = styled.div`
  box-shadow: 0 1px 4px 0 rgba(0,0,0,0.14);
  background: white;
  padding: 20px;
`;
const MyMapComponent = withScriptjs(withGoogleMap(() => (
  <GoogleMap
    defaultZoom={12}
    defaultCenter={{ lat: 48.857530, lng: 2.303385 }}
  >
    <Marker position={{ lat: 48.857530, lng: 2.303385 }} />
  </GoogleMap>
))); */

function ListingDetailMap() {
  return (
    <Wrap>
      <Container>
        {/* <SmallWrap>
          <Title>{title}</Title>
          <MyMapComponent
            isMarkerShown
            googleMapURL="https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places"
            loadingElement={<div style={{ height: '100%' }} />}
            containerElement={<div style={{ height: '400px' }} />}
            mapElement={<div style={{ height: '100%' }} />}
          />
        </SmallWrap> */ }
      </Container>
    </Wrap>
  );
}

ListingDetailMap.propTypes = {
  title: PropTypes.string,
};

export default muiThemeable()(ListingDetailMap);
