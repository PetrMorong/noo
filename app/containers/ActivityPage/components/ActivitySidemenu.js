import React from 'react';
import styled from 'styled-components';

import LandlordIcon from 'material-ui/svg-icons/communication/vpn-key';
import TenantIcon from 'material-ui/svg-icons/social/person';

const Wrap = styled.div`
  min-width: 53px;
  height: 100%;
  display: flex;
  flex-direction: column;

  svg {
    margin-bottom: 30px;
    margin-top: -7px;
  }
`;


function ActivitySidemenu() {
  return (
    <Wrap location={location}>
      <LandlordIcon style={{ color: 'white' }} />
      <TenantIcon style={{ color: 'white' }} />
    </Wrap>
  );
}

/* Header.propTypes = {
  handleBurgerClick: PropTypes.func,
  handleLogin: PropTypes.func,
  handleSignOut: PropTypes.func,
  user: PropTypes.bool,
  location: PropTypes.string,
}; */

export default ActivitySidemenu;
