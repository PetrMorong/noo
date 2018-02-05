import React from 'react';
import { Helmet } from 'react-helmet';
import { GoogleMap, Marker, withGoogleMap, withScriptjs } from 'react-google-maps';
import { createStructuredSelector } from 'reselect';
import injectReducer from 'utils/injectReducer';
import injectSaga from 'utils/injectSaga';
import { connect } from 'react-redux';
import { compose } from 'redux';
import ListingCard from 'components/ListingCard';
import Pagination from 'components/Pagination';
import PropTypes from 'prop-types';

import reducer from './SearchPage.reducer';
import saga from './SearchPage.saga';
import { getListings } from './SearchPage.actions';
import { makeSelectData } from './SearchPage.selectors';
import {
  SearchPageWrap,
  ListingCardsWrap,
  SearchMapWrap,
  ListingWrap,
} from './styles';

const MyMapComponent = withScriptjs(withGoogleMap(() => (
  <GoogleMap
    defaultZoom={12}
    defaultCenter={{ lat: 48.857530, lng: 2.303385 }}
  >
    <Marker position={{ lat: 48.857530, lng: 2.303385 }} />
  </GoogleMap>
)));

class SearchPage extends React.Component { // eslint-disable-line react/prefer-stateless-function

  componentWillMount() {
    this.props.getListings();
  }

  render() {
    const { data } = this.props;
    console.log(data);
    return (
      <div>
        <Helmet>
          <title>Search TODO Translate</title>
          <meta name="description" content="Search page of Nookpad" />
        </Helmet>
        <SearchPageWrap>
          <ListingWrap>
            <ListingCardsWrap>
              <ListingCard />
              <ListingCard />
              <ListingCard />
              <ListingCard />
              <ListingCard />
              <ListingCard />
              <ListingCard />
            </ListingCardsWrap>
            <Pagination pageCount={10} />
          </ListingWrap>
          <SearchMapWrap>
            <MyMapComponent
              isMarkerShown
              googleMapURL="https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places"
              loadingElement={<div style={{ height: '100%' }} />}
              containerElement={<div style={{ height: 'calc(100vh - 170px)', margin: 20 }} />}
              mapElement={<div style={{ height: '100%' }} />}
            />
          </SearchMapWrap>
        </SearchPageWrap>
      </div>
    );
  }
}

SearchPage.propTypes = {
  data: PropTypes.object,
  getListings: PropTypes.func,
};

export function mapDispatchToProps(dispatch) {
  return {
    getListings: () => dispatch(getListings()),
  };
}

const mapStateToProps = createStructuredSelector({
  data: makeSelectData(),
  // loading: makeSelectListingsLoading(),
  // error: makeSelectListingsError(),
});

const withConnect = connect(mapStateToProps, mapDispatchToProps);

const withReducer = injectReducer({ key: 'searchPage', reducer });
const withSaga = injectSaga({ key: 'searchPage', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(SearchPage);
