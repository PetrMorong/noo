import styled from 'styled-components';
import React from 'react';
import PropTypes from 'prop-types';

const Wrap = styled.div`
  background: rgba(0,0,0,.5);
  z-index: ${(props) => props.opened ? '99' : '-1'};
  opacity: ${(props) => props.opened ? '1' : '0'};
  transition: 50ms;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`;

function SidemenuOverlay({ onClick, opened }) {
  return (
    <div
      tabIndex="0"
      onClick={onClick}
      role="button"
    >
      <Wrap opened={opened} />
    </div>
  );
}

SidemenuOverlay.propTypes = {
  onClick: PropTypes.func,
  opened: PropTypes.bool,
};

export default SidemenuOverlay;
