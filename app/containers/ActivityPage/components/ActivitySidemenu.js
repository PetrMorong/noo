import React from 'react';
import styled from 'styled-components';
import _ from 'lodash';
import PropTypes from 'prop-types';

import LandlordIcon from 'material-ui/svg-icons/communication/vpn-key';
import TenantIcon from 'material-ui/svg-icons/social/person';
import IconButton from 'material-ui/IconButton';
import * as types from '../ActivityPage.constants';

const Wrap = styled.div`
  min-width: 53px;
  height: 100%;
  display: flex;
  flex-direction: column;

  button {
    margin-left: -12px !important;
  }
`;

function ActivitySidemenu({ handleChangeActivityMode, mode }) {
  return (
    <Wrap location={location}>
      <IconButton
        onClick={_.partial(handleChangeActivityMode, types.LANDLORD)}
        tooltip="Landlord mode"
        iconStyle={{ color: mode === types.LANDLORD ? 'white' : 'rgba(255,255,255,.4)' }}
      >
        <LandlordIcon />
      </IconButton>
      <IconButton
        onClick={_.partial(handleChangeActivityMode, types.TENANT)}
        tooltip="Tenant mode"
        iconStyle={{ color: mode === types.TENANT ? 'white' : 'rgba(255,255,255,.4)' }}
      >
        <TenantIcon />
      </IconButton>
    </Wrap>
  );
}

ActivitySidemenu.propTypes = {
  handleChangeActivityMode: PropTypes.func,
  mode: PropTypes.string,
};

export default ActivitySidemenu;
