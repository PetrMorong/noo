import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const ActionBarWrap = styled.div`
  height: 65px;
  width: 100%;
  padding: 0 16px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  a {
    cursor: pointer;
    width: 40px;
    height: 16px;
    font-family: Roboto;
    font-size: 16px;
    font-weight: normal;
    font-style: normal;
    font-stretch: normal;
    line-height: 1;
    letter-spacing: normal;
    text-align: left;
    color: rgba(0, 0, 0, 0.87);
  }

  @media (max-width: 768px) {
    display: none;
  }
`;

function ActionBar({
  onCancelClick,
  onApplyClick,
  }) {
  return (
    <ActionBarWrap>
      <a
        role="button"
        onClick={onCancelClick}
        tabIndex={0}
      >
        Cancel
      </a>
      <a
        role="button"
        onClick={onApplyClick}
        tabIndex={0}
      >
        Apply
      </a>
    </ActionBarWrap>
  );
}

ActionBar.propTypes = {
  onApplyClick: PropTypes.func,
  onCancelClick: PropTypes.func,
};

export default ActionBar;
