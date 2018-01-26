import React from 'react';
import { Helmet } from 'react-helmet';
import styled from 'styled-components';

import ListingDetailHeader from './ListingDetailHeader';
import ListingDetailDescription from './ListingDetailDescription';
import ListingDetailPriceCard from './ListingDetailPriceCard';
import ListingDetailMap from './ListingDetailMap';

const ListingDetailPageWrap = styled.div`
  width: 100%;
  svg {
    fill: inherit;
  }
  @media(max-width: 1000px) {
    margin-bottom: 70px;
  }
`;
const ListingDetailBodyWrap = styled.div`
  width: 800px;
  display: flex;
  margin-top: 20px;
  margin-bottom: 20px;
  @media(max-width: 1000px) {
    margin-bottom: 0px;
  }
`;
const ListingDetailBodyContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;

export default class ListingDetailPage extends React.Component { // eslint-disable-line react/prefer-stateless-function

  render() {
    return (
      <div>
        <Helmet>
          <title>Search TODO Translate</title>
          <meta name="description" content="Property name TODO get from backend" />
        </Helmet>
        <ListingDetailPageWrap>
          <ListingDetailHeader />
          <ListingDetailBodyContainer>
            <ListingDetailBodyWrap>
              <ListingDetailDescription />
              <ListingDetailPriceCard />
            </ListingDetailBodyWrap>
          </ListingDetailBodyContainer>
          <ListingDetailMap title="The neighborhoood"/>
        </ListingDetailPageWrap>
      </div>
    );
  }
}
