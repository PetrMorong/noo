import styled from 'styled-components';
import React from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage } from 'react-intl';
import { Link } from 'react-router-dom';

const SidemenuLinkWrap = styled(Link)`
  height: 50px;
  padding-left: 25px;
  display: flex;
  align-items: center;
  color: rgba(0,0,0,.9);
  cursor: pointer;
  text-decoration: none;

  &:hover {
    background: #EEEEEE;
  }
`;

const LabelWrap = styled.div`
  margin-left: 25px;
  color: rgba(0,0,0,.7);
`;

function SidemenuLink({ message, icon, to, currentPathName }) {
  return (
    <SidemenuLinkWrap to={to}>
      {icon}
      <LabelWrap style={{ fontWeight: currentPathName === to ? '600' : 'normal' }}>
        <FormattedMessage {...message} />
      </LabelWrap>
    </SidemenuLinkWrap>
  );
}

SidemenuLink.propTypes = {
  message: PropTypes.object,
  icon: PropTypes.any,
  to: PropTypes.string,
  currentPathName: PropTypes.string,
};

export default SidemenuLink;
