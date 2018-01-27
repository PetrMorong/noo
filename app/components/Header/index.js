import React from 'react';
import PropTypes from 'prop-types';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { toggleSideMenu, login, signOut } from 'containers/App/actions';
import { makeSelectUser } from 'containers/App/selectors';
import { makeSelectPathname } from 'components/Sidemenu/Sidemenu.selectors';
import reducer from 'containers/App/reducer';
import { Link } from 'react-router-dom';

import injectReducer from 'utils/injectReducer';
import HeaderWrap from './HeaderWrap';
import HeaderBurger from './HeaderBurger';
import Notification from './Notification';
import Logo from './Logo';
import HeaderFlatButton from './HeaderFlatButton';
import SearchBar from './SearchBar';
import HeaderProfile from './HeaderProfile';
import { HeaderCreateListingWrap, HeaderFlatButtonWrap, Flex } from './Header.styles';

function Header({ handleBurgerClick, handleLogin, user, handleSignOut, location }) {
  return (
    <HeaderWrap location={location}>
      <HeaderBurger onClick={handleBurgerClick} hasAlert={1} location={location} />
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
      {user ?
        <Flex location={location}>
          <Link to="/activity">
            <Notification hasAlert={1} location={location} />
          </Link>
          <HeaderProfile onSignOut={handleSignOut} location={location} />
        </Flex>
        :
        <HeaderFlatButtonWrap>
          <HeaderFlatButton
            to="/signIn"
            labelKey="nookpad.components.Header.signIn.message"
            onClick={handleLogin}
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
  user: PropTypes.bool,
  location: PropTypes.string,
};

export function mapDispatchToProps(dispatch) {
  return {
    handleBurgerClick: () => dispatch(toggleSideMenu()),
    handleLogin: () => dispatch(login()),
    handleSignOut: () => dispatch(signOut()),
  };
}

const mapStateToProps = createStructuredSelector({
  user: makeSelectUser(),
  location: makeSelectPathname(),
});

const withConnect = connect(mapStateToProps, mapDispatchToProps);
const withReducer = injectReducer({ key: 'app', reducer });

export default compose(
  withReducer,
  withConnect,
)(Header);
