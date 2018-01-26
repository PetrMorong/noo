import styled from 'styled-components';
import React from 'react';

const LogoWrapper = styled.div`
  margin-left: 15px;
  font-weight: 500;
  font-size: 20px;
  margin-right: 80px;

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

function Logo() {
  return (
    <LogoWrapper>
      Nookpad
    </LogoWrapper>
  );
}

export default Logo;
