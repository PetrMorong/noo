import React from 'react';
import PropTypes from 'prop-types';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { toggleSideMenu } from 'containers/App/actions';
import reducer from 'containers/App/reducer';

import injectReducer from 'utils/injectReducer';
import HeaderWrap from './HeaderWrap';
import HeaderBurger from './HeaderBurger';
import Logo from './Logo';

function Header({ handleBurgerClick }) {
  return (
    <HeaderWrap>
      <HeaderBurger onClick={handleBurgerClick} />
      <Logo />
    </HeaderWrap>
  );
}

Header.propTypes = {
  handleBurgerClick: PropTypes.func,
};

export function mapDispatchToProps(dispatch) {
  return {
    handleBurgerClick: () => dispatch(toggleSideMenu()),
  };
}

const mapStateToProps = createStructuredSelector({
  searchText: () => '',
});

const withConnect = connect(mapStateToProps, mapDispatchToProps);
const withReducer = injectReducer({ key: 'app', reducer });

export default compose(
  withReducer,
  withConnect,
)(Header);
