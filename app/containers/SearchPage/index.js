
import React from 'react';
import { Helmet } from 'react-helmet';
import { GoogleMap, Marker, withGoogleMap, withScriptjs } from 'react-google-maps';
import { Link } from 'react-router-dom';
import 'react-select/dist/react-select.css';
import Select from 'react-select';
import ListingCard from 'components/ListingCard';
import Pagination from 'components/Pagination';
import {
  SearchPageWrap,
  ListingCardsWrap,
  SearchMapWrap,
  SortBarWrap,
  SearchButton,
  SearchBarWrap,
  ListingWrap,
} from './styles';

const options = [
{ label: '£ 2000 to £ 2200', value: 'price' },
{ label: 'Amenities', value: 'amenities' },
{ label: '2 Beds', value: 'bed2' },
{ label: '2 Baths', value: 'bath2' },
];

const MyMapComponent = withScriptjs(withGoogleMap(() => (
  <GoogleMap
    defaultZoom={12}
    defaultCenter={{ lat: 48.857530, lng: 2.303385 }}
  >
    <Marker position={{ lat: 48.857530, lng: 2.303385 }} />
  </GoogleMap>
)));

export default class SearchPage extends React.Component { // eslint-disable-line react/prefer-stateless-function
  constructor(props) {
    super(props);
    this.state = {
      selectedValue: null,
    };
  }

  handleSelectChange = (value) => {
    this.setState({ selectedValue: value });
  }

  render() {
    const { selectedValue } = this.state;
    return (
      <div>
        <Helmet>
          <title>Search TODO Translate</title>
          <meta name="description" content="Search page of Nookpad" />
        </Helmet>
        <SortBarWrap>
          <SearchButton>
            TYPE
          </SearchButton>
          <SearchButton>
            BED & BATH
          </SearchButton>
          <SearchButton>
            PRICE
          </SearchButton>
          <SearchButton>
            AMENITIES
          </SearchButton>
          <Link to="/sort-settings">
            <SearchButton style={{ marginLeft: 90 }}>
              SORT
            </SearchButton>
          </Link>
        </SortBarWrap>
        <SearchBarWrap>
          <Select
            name="search_selector"
            multi
            onChange={this.handleSelectChange}
            options={options}
            value={selectedValue}
          />
        </SearchBarWrap>
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
