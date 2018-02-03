import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const MobileActionBarWrap = styled.div`
  height: 65px;
  width: 100%;
  padding: 0 16px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  display: none;

  a {
    cursor: pointer;
    width: 60px;
    height: 16px;
    font-family: Roboto;
    font-size: 16px;
    font-weight: normal;
    font-style: normal;
    font-stretch: normal;
    line-height: 1;
    letter-spacing: normal;
    text-align: left;
    text-decoration: none;
    color: #000;
  }

  @media (max-width: 768px) {
    display: flex;
  }
`;

function MobileActionBar({ onResetClick }) {
  return (
    <MobileActionBarWrap>
      <Link to="/search">
        X
      </Link>
      <a
        role="button"
        onClick={onResetClick}
        tabIndex={0}
      >
        Clear All
      </a>
    </MobileActionBarWrap>
  );
}

MobileActionBar.propTypes = {
  onResetClick: PropTypes.func,
};

export default MobileActionBar;
