import styled from 'styled-components';
import React from 'react';
import PropTypes from 'prop-types';

import IconButton from 'material-ui/IconButton';
import AccountIcon from 'material-ui/svg-icons/action/account-circle';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import ProfileIcon from 'material-ui/svg-icons/action/perm-contact-calendar';
import ExitIcon from 'material-ui/svg-icons/action/exit-to-app';

import { dimensions35, dropdownAnchorOrigin, dimensions45, paddingLeft75 } from './Header.constants';
import { HeaderProfileAccount, HeaderProfileUsername, HeaderProfileEmail, HeaderProfileWrap } from './Header.styles';

function HeaderProfile({ onSignOut }) {
  return (
    <HeaderProfileWrap>
      <IconMenu
        iconButtonElement={
          <IconButton
            iconStyle={dimensions35}
            style={{ padding: 0 }}
          >
            <AccountIcon />
          </IconButton>
        }
        anchorOrigin={dropdownAnchorOrigin}
        targetOrigin={dropdownAnchorOrigin}
      >
        <HeaderProfileAccount className="header-actionIcons-account">
          <AccountIcon
            style={{ ...dimensions45, fill: '#757575' }}
          />
          <div className="header-actionIcons-flexColumn">
            <HeaderProfileUsername>Mehdi Amor</HeaderProfileUsername>
            <HeaderProfileEmail>mehdi.amor@gmail.com</HeaderProfileEmail>
          </div>
        </HeaderProfileAccount>
        <MenuItem
          primaryText="Profile translate"
          leftIcon={<ProfileIcon />}
          innerDivStyle={paddingLeft75}
        />
        <MenuItem
          primaryText="Sign out "
          leftIcon={<ExitIcon />}
          innerDivStyle={paddingLeft75}
          onClick={onSignOut}
        />
      </IconMenu>

    </HeaderProfileWrap>
  );
}

HeaderProfile.propTypes = {
  onSignOut: PropTypes.func,
};

export default HeaderProfile;
