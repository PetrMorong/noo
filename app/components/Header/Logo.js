import styled from 'styled-components';
import React from 'react';

const LogoWrapper = styled.div`
  margin-left: 15px;
  font-weight: 500;
  font-size: 20px;
`;

function Logo() {
  return (
    <LogoWrapper>
      Nookpad
    </LogoWrapper>
  );
}

export default Logo;
