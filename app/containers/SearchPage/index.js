/*
 * SearchPage
 *
 * Search for listings
 */
import React from 'react';
import { Helmet } from 'react-helmet';
import { GoogleMap, Marker, withGoogleMap, withScriptjs } from 'react-google-maps';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import 'react-select/dist/react-select.css';
import Select from 'react-select';
import ListingCard from 'components/ListingCard';
import Pagination from 'components/Pagination';

const SearchPageWrap = styled.div`
  display: flex;
`;
const ListingCardsWrap = styled.div`
  width: 100%;
  padding: 0px 24px 0px 48px;
  
  display: flex;
  flex-wrap: wrap;
  height: calc(100vh - 250px);
  overflow: auto;
  margin-top: 48px;
  margin-bottom: 80px;
  position: relative;

  @media (max-width: 768px) {
    margin-top: 48px;
    width: 100%;
    padding: 0 60px;
  }

  @media (max-width: 450px) {
    width: 100%;
    padding: 20px;
  }
`;

const SearchMapWrap = styled.div`
  width: 35%;

  @media (max-width: 768px) {
    display: none;
  }
`;

// Search Bar Items

const SortBarWrap = styled.div`
  width: 100%;
  height: 55px;
  background-color: #ffffff;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.5);
  padding-top: 10px;

  @media (max-width: 768px) {
    display: none;
  }
`;

const SearchButton = styled.button`
  width: 110px;
  height: 36px;
  color: #009688;
  border-radius: 2px;
  font-size: 14px;
  font-weight: bold;
  font-style: normal;
  letter-spacing: 0.5px;
  background-color: #ffffff;
  box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.24), 0 0 2px 0 rgba(0, 0, 0, 0.12);
  margin-left: 24px;
  font-family: Roboto, sans-serif;
`;

const SearchBarWrap = styled.div`
  width: 100%;
  height: 55px;
  background-color: #ffffff;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.5);
  display: none;

  .Select {
    height: 100%;
    padding-top: 10px;
    padding-bottom: 10px;
  }

  .Select-control {
    height: 100%;
    border: none;
  }

  .Select--multi .Select-multi-value-wrapper {
    display: flex;
    flex-wrap: wrap;
  }

  .Select--multi .Select-value {
    border-radius: 15px;
    background-color: #e0e0e0;
    color: #535353;
    display: flex;
    flex-direction: row-reverse;
  }

  .Select--multi .Select-value-icon {
    background-color: black;
    height: 20px;
    border-radius: 10px;
    color: white;
    margin-top: 3px;
    margin-right: 5px;
    padding-top: 0px;
  }

  @media (max-width: 768px) {
    display: block;
  }
`;

const ListingWrap = styled.div`
  position: relative;
  width: 64%;

  @media (max-width: 768px) {
    width: 100%;
  }
`;

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
