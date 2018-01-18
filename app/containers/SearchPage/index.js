/*
 * SearchPage
 *
 * Search for listings
 */
import React from 'react';
import { Helmet } from 'react-helmet';
import ListingCard from 'components/ListingCard';
import styled from 'styled-components';

const SearchPageWrap = styled.div`
  width: 100%;
  padding: 10px;
  display: flex;
  flex-wrap: wrap;
`;

export default class FeaturePage extends React.Component { // eslint-disable-line react/prefer-stateless-function

  render() {
    return (
      <div>
        <Helmet>
          <title>Search TODO Translate</title>
          <meta name="description" content="Search page of Nookpad" />
        </Helmet>
        <SearchPageWrap>
          <ListingCard />
          <ListingCard />
          <ListingCard />
          <ListingCard />
          <ListingCard />
          <ListingCard />
          <ListingCard />
        </SearchPageWrap>
      </div>
    );
  }
}
