import React from 'react';
import { Helmet } from 'react-helmet';
import styled from 'styled-components';
import 'react-select/dist/react-select.css';
import ListingCard from 'components/ListingCard';

const Wrap = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  background-color: #fafafa;
  padding: 72px 24px;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    padding: 24px 0;
  }
`;

export default class FavoritePage extends React.Component { // eslint-disable-line react/prefer-stateless-function
  constructor(props) {
    super(props);
    this.state = {
      selectedValue: null,
    };
  }

  render() {
    return (
      <div>
        <Helmet>
          <title>Favorite Page</title>
          <meta name="description" content="Favorite page of Nookpad" />
        </Helmet>
        <Wrap>
          <ListingCard isFavorite />
        </Wrap>
      </div>
    );
  }
}
