import styled from 'styled-components';
import React from 'react';
import PropTypes from 'prop-types';

const LogoWrapper = styled.div`
  margin-left: 15px;
  font-weight: 500;
  font-size: 25px;
  margin-right: 80px;
  color: ${(props) => props.location === '/activity' ? 'white' : 'rgba(0,0,0,.65)'};
  width: ${(props) => props.location === '/activity' ? '250px' : 'auto'};
  font-weight: 500;
    span {
    font-size: 18px;
    font-wight: 400;
    margin-left: 10px;
  }

  @media(max-width: 768px) {
    margin-right: 40px;
  }

  @media(max-width: 600px) {
    width: 100%;
    display: flex;
    justify-content: center;
    margin-right: 15px;
  }
`;

function Logo({ location }) {
  return (
    <LogoWrapper location={location}>
      <p>
        Nookpad {location === '/activity' && <span>Activity</span> }
      </p>
    </LogoWrapper>
  );
}

Logo.propTypes = {
  location: PropTypes.string,
};

export default Logo;
