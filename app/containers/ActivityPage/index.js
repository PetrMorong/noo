import React from 'react';
import { Helmet } from 'react-helmet';
import styled from 'styled-components';

import ActivitySidemenu from './components/ActivitySidemenu';
import ActivityChat from './components/ActivityChat/index';
import ActivityDefaultState from './components/ActivityDefaultState';

const Container = styled.div`
  background: url('http://www.bloemendaalaanzee.nl/upload/images/comfort-met-sauna/800_3374lowres.jpg');
  width: 100%;
  height: 100vh;
  background-size: cover;
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-position: center center;
  margin-top: -60px;
  display: flex;
`;
const Shadow = styled.div`
  background: rgba(0,0,0,.7);
  display: flex;
  width: 100%;
  height: 100%;
  padding: 80px 20px 0 20px;
`;
export default class ActivityPage extends React.Component { // eslint-disable-line react/prefer-stateless-function

  render() {
    return (
      <div>
        <Helmet>
          <title>Feature Page</title>
          <meta name="description" content="Feature page of React.js Boilerplate application" />
        </Helmet>
        <Container>
          <Shadow>
            <ActivitySidemenu />
            <ActivityChat />
            <ActivityDefaultState />
          </Shadow>
        </Container>
      </div>
    );
  }
}
