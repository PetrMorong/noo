import React from 'react';
import PropTypes from 'prop-types';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';
import { connect } from 'react-redux';
import HomeIcon from 'material-ui/svg-icons/action/home';
import SearchIcon from 'material-ui/svg-icons/action/search';
import AddIcon from 'material-ui/svg-icons/content/add';
import IconButton from 'material-ui/IconButton';
import AccountIcon from 'material-ui/svg-icons/action/account-circle';
import FavoriteIcon from 'material-ui/svg-icons/action/favorite-border';
import SignOutIcon from 'material-ui/svg-icons/action/exit-to-app';
import NotifyIcon from 'material-ui/svg-icons/social/notifications';
import { toggleSideMenu } from 'containers/App/actions';
import muiThemeable from 'material-ui/styles/muiThemeable';

import AccountWrap from './components/AccountWrap';
import ProfileWrap from './components/ProfileWrap';
import SidemenuWrap from './components/SidemenuWrap';
import Logo from '../Header/components/Logo';
import SidemenuHeader from './components/SidemenuHeader';
import SidemenuLink from './components/SidemenuLink';
import SidemenuOverlay from './components/SidemenuOverlay';
import messages from './messages';
import { makeSelectSideMenuOpen, makeSelectPathname } from './Sidemenu.selectors';
import { HeaderProfileUsername, HeaderProfileEmail } from '../Header/Header.styles';

function Sidemenu({ handleBurgerClick, sideMenuOpen, pathname, muiTheme }) {
  return (
    <div>
      <SidemenuWrap opened={sideMenuOpen}>
        <SidemenuHeader>
          <Logo />
        </SidemenuHeader>
        <AccountWrap>
          <IconButton
            iconStyle={{ height: '100px', width: '100px' }}
            style={{ padding: 0, height: 100, width: 100 }}
          >
            <AccountIcon />
          </IconButton>
          <HeaderProfileUsername>Mehdi Amor</HeaderProfileUsername>
          <HeaderProfileEmail>mehdi.amor@gmail.com</HeaderProfileEmail>
        </AccountWrap>
        <SidemenuLink
          message={messages.home}
          currentPathName={pathname}
          icon={<HomeIcon style={{ color: pathname === '/' ? muiTheme.palette.primary1Color : muiTheme.palette.textColor }} />}
          to="/"
        />
        <ProfileWrap>
          <SidemenuLink
            message={messages.activity}
            currentPathName={pathname}
            icon={<NotifyIcon style={{ color: muiTheme.palette.textColor }} />}
            to="/"
          />
        </ProfileWrap>
        <SidemenuLink
          message={messages.createProperty}
          currentPathName={pathname}
          icon={<AddIcon style={{ color: pathname === '/create-property' ? muiTheme.palette.primary1Color : muiTheme.palette.textColor }} />}
          to="/list-property"
        />
        <SidemenuLink
          message={messages.findProperty}
          currentPathName={pathname}
          icon={<SearchIcon style={{ color: pathname === '/search' ? muiTheme.palette.primary1Color : muiTheme.palette.textColor }} />}
          to="/search"
        />
        <SidemenuLink
          message={messages.favoriteProperty}
          currentPathName={pathname}
          icon={<FavoriteIcon style={{ color: pathname === '/favorite-properties' ? muiTheme.palette.primary1Color : muiTheme.palette.textColor }} />}
          to="/favorite-properties"
        />
        <ProfileWrap>
          <SidemenuLink
            message={messages.signOut}
            currentPathName={pathname}
            icon={<SignOutIcon style={{ color: muiTheme.palette.textColor }} />}
            to="/favorite-properties"
          />
        </ProfileWrap>
      </SidemenuWrap>
      <SidemenuOverlay opened={sideMenuOpen} onClick={handleBurgerClick} />
    </div>
  );
}

Sidemenu.propTypes = {
  handleBurgerClick: PropTypes.func,
  sideMenuOpen: PropTypes.bool,
  pathname: PropTypes.string,
  muiTheme: PropTypes.object,
};

export function mapDispatchToProps(dispatch) {
  return {
    handleBurgerClick: () => dispatch(toggleSideMenu()),
  };
}

const mapStateToProps = createStructuredSelector({
  sideMenuOpen: makeSelectSideMenuOpen(),
  pathname: makeSelectPathname(),
});

const withConnect = connect(mapStateToProps, mapDispatchToProps);

export default compose(
  withConnect,
  muiThemeable(),
)(Sidemenu);
