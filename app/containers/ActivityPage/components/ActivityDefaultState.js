import React from 'react';
import styled from 'styled-components';

import AddIcon from 'material-ui/svg-icons/content/add';
import CalendarIcon from 'material-ui/svg-icons/action/date-range';
import OfferIcon from 'material-ui/svg-icons/maps/local-offer';

const Container = styled.div`
  width: 100%;
  padding: 60px 15px 0px 60px;
  color: white;
  text-shadow: 0 2px 4px rgba(0,0,0,0.5);
`;
const Hello = styled.div`
  font-size: 30px;
  font-weight: 400;
  p {
    font-size: 22px;
  }
`;
const Action = styled.div`
  border-radius: 50%;
  width: 100px;
  height: 100px;
  border: 2px solid white;
  margin-right: 50px;
  position: relative;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  transition: 150ms;
  &:hover {
    background: rgba(255,255,255,.15);
  }
  svg {
    fill: white !important;
    width: 35px !important;
    height: 35px !important;
  }
  p {
    position: absolute;
    bottom: -55px;
    text-align: center;
    text-transform: uppercase;
    white-space: nowrap;
  }
`;
const ActionWrap = styled.div`
  display: flex;
  margin-top: 50px;
`;
export default function ActivityDefaultState() {
  return (
    <Container>
      <Hello>
        Hi, Mehdi!<br />
        <p>You can start by creating listing</p>
      </Hello>
      <ActionWrap>
        <Action>
          <AddIcon />
          <p>Create listing</p>
        </Action>
        <Action>
          <OfferIcon />
          <p>Offers</p>
        </Action>
        <Action>
          <CalendarIcon />
          <p>Calendar</p>
        </Action>
      </ActionWrap>
    </Container>
  );
}
