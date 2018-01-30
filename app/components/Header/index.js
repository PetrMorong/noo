import React from 'react';
import PropTypes from 'prop-types';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { toggleSideMenu, login, signOut } from 'containers/App/actions';
import { makeSelectUser } from 'containers/App/selectors';
import reducer from 'containers/App/reducer';

import injectReducer from 'utils/injectReducer';
import HeaderWrap from './HeaderWrap';
import HeaderBurger from './HeaderBurger';
import Notification from './Notification';
import Logo from './Logo';
import HeaderFlatButton from './HeaderFlatButton';
import SearchBar from './SearchBar';
import HeaderProfile from './HeaderProfile';
import { HeaderCreateListingWrap, HeaderFlatButtonWrap } from './Header.styles';

function Header({ handleBurgerClick, handleLogin, user, handleSignOut }) {
  return (
    <HeaderWrap>
      <HeaderBurger onClick={handleBurgerClick} hasAlert />
      <Logo />
      <SearchBar />
      <HeaderCreateListingWrap>
        <HeaderFlatButton
          to="/create-listing"
          labelKey="nookpad.components.Header.createListing.message"
          style={{ minWidth: '150px' }}
        />
      </HeaderCreateListingWrap>
      <Notification hasAlert />
      {user ?
        <HeaderProfile
          onSignOut={handleSignOut}
        />
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
});

const withConnect = connect(mapStateToProps, mapDispatchToProps);
const withReducer = injectReducer({ key: 'app', reducer });

export default compose(
  withReducer,
  withConnect,
)(Header);
