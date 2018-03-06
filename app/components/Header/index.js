import React from 'react';
import PropTypes from 'prop-types';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { toggleSideMenu, login, signOut } from 'containers/App/actions';
import { makeSelectUser } from 'containers/App/selectors';
import { makeSelectPathname } from 'components/Sidemenu/Sidemenu.selectors';
import reducer from 'containers/App/reducer';
import CalendarIcon from 'material-ui/svg-icons/action/date-range';
import { toggleNotifications } from 'containers/Notifications/Notifications.actions';
import { makeSelectData } from 'containers/Notifications/Notifications.selectors';

import injectReducer from 'utils/injectReducer';
import HeaderWrap from './components/HeaderWrap';
import HeaderBurger from './components/HeaderBurger';
import Notification from './components/Notification';
import Logo from './components/Logo';
import HeaderFlatButton from './components/HeaderFlatButton';
import SearchBar from './components/SearchBar';
import HeaderProfile from './components/HeaderProfile';
import { HeaderCreateListingWrap, HeaderFlatButtonWrap, Flex, Calendar } from './Header.styles';

function Header({ handleBurgerClick, handleLogin, user, handleSignOut, location, handleToggleNotifications, notifications }) {
  return (
    <HeaderWrap location={location}>
      <HeaderBurger
        onClick={handleBurgerClick}
        location={location}
      />
      <Logo location={location} />
      {location !== '/activity' &&
        <SearchBar />
      }
      {location !== '/activity' &&
        <HeaderCreateListingWrap>
          <HeaderFlatButton
            to="/create-listing"
            labelKey="nookpad.components.Header.createListing.message"
            style={{ minWidth: '150px' }}
          />
        </HeaderCreateListingWrap>
      }
      {location === '/activity' &&
        <Calendar>
          <CalendarIcon />
        </Calendar>
      }
      {user ?
        <Flex location={location}>
          <Notification
            notifications={notifications}
            location={location}
            onClick={handleToggleNotifications}
          />
          <HeaderProfile
            onSignOut={handleSignOut}
            location={location}
          />
        </Flex>
        :
        <HeaderFlatButtonWrap>
          <HeaderFlatButton
            to="/login"
            labelKey="nookpad.components.Header.signIn.message"
          />
        </HeaderFlatButtonWrap>
      }
    </HeaderWrap>
  );
}

Header.propTypes = {
  handleBurgerClick: PropTypes.func,
  handleLogin: PropTypes.func,
  handleSignOut: PropTypes.func,
  user: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.bool,
  ]),
  location: PropTypes.string,
  handleToggleNotifications: PropTypes.func,
  notifications: PropTypes.oneOfType([
    PropTypes.array,
    PropTypes.object,
  ]),
};

export function mapDispatchToProps(dispatch) {
  return {
    handleBurgerClick: () => dispatch(toggleSideMenu()),
    handleLogin: () => dispatch(login()),
    handleSignOut: () => dispatch(signOut()),
    handleToggleNotifications: () => dispatch(toggleNotifications()),
  };
}

const mapStateToProps = createStructuredSelector({
  user: makeSelectUser(),
  location: makeSelectPathname(),
  notifications: makeSelectData(),
});

const withConnect = connect(mapStateToProps, mapDispatchToProps);
const withReducer = injectReducer({ key: 'app', reducer });

export default compose(
  withReducer,
  withConnect,
)(Header);
