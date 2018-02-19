import React from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';

import IconButton from 'material-ui/IconButton';
import AccountIcon from 'material-ui/svg-icons/action/account-circle';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import ProfileIcon from 'material-ui/svg-icons/action/perm-contact-calendar';
import ExitIcon from 'material-ui/svg-icons/action/exit-to-app';

import { dimensions35, dropdownAnchorOrigin, dimensions45, paddingLeft75 } from '../Header.constants';
import { HeaderProfileAccount, HeaderProfileUsername, HeaderProfileEmail, HeaderProfileWrap } from '../Header.styles';

function HeaderProfile({ onSignOut, history, location }) {
  const navigateToProfile = () => history.push('/profile-settings');
  return (
    <HeaderProfileWrap>
      <IconMenu
        iconButtonElement={
          <IconButton
            iconStyle={{ ...dimensions35, fill: location.pathname === '/activity' ? 'white' : 'currentColor' }}
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
          primaryText="Profile"
          leftIcon={<ProfileIcon />}
          innerDivStyle={paddingLeft75}
          onClick={navigateToProfile}
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
  location: PropTypes.PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.string,
  ]),
  history: React.PropTypes.shape({
    push: React.PropTypes.func.isRequired,
  }).isRequired,
};

export default withRouter(HeaderProfile);
