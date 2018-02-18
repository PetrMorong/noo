import styled from 'styled-components';
import React from 'react';
import PropTypes from 'prop-types';

const LogoWrapper = styled.div`
  margin-left: 15px;
  font-weight: 500;
  font-size: 22px;
  margin-right: 80px;
  color: ${(props) => props.location === '/activity' ? 'white' : 'rgba(0,0,0,.65)'};
  width: ${(props) => props.location === '/activity' ? '250px' : 'auto'};
  span {
    font-size: 18px;
    font-wight: 400;
    margin-left: 10px;
  }

  @media(max-width: 768px) {
    width: calc(100% - 16px);
    display: flex;
    justify-content: center;
    position: fixed;
    margin: 0;
  }

  @media(max-width: 600px) {
    color: rgba(0,0,0,.65);
    display: flex;
  }
`;

function Logo({ location }) {
  return (
    <LogoWrapper location={location}>
      <p>
        Nookpad
      </p>
    </LogoWrapper>
  );
}

Logo.propTypes = {
  location: PropTypes.string,
};

export default Logo;
