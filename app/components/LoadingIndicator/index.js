import React from 'react';
import LinearProgress from 'material-ui/LinearProgress';
import styled from 'styled-components';

export const Wrap = styled.div`
  position: fixed;
  width: 100%;
  top: -1px;
  left: 0;
  z-index: 777;
`;

const LoadingIndicator = () => (
  <Wrap>
    <LinearProgress mode="indeterminate" />
  </Wrap>
);

export default LoadingIndicator;
