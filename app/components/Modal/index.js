import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import ExitIcon from 'material-ui/svg-icons/navigation/close';
import IconButton from 'material-ui/IconButton';

const Container = styled.div`
  width: 100%;
  background: rgba(0,0,0,.7);
  position: fixed;
  top: 0;
  left: 0;
  height: 100%;
  display: ${(props) => props.show ? 'flex' : 'none'};
  opacity: ${(props) => props.show ? '1' : '0'};
  transition: 250ms;
  justify-content: center;
  align-items: center;
  box-shadow: 0 27px 24px 0 rgba(0, 0, 0, 0.2), 0 40px 77px 0 rgba(0, 0, 0, 0.22);
  border-radius: 3px;
  z-index: 255;
`;
const Wrap = styled.div`
  width: 350px;
  height: 300px;
  background: white;
  margin-top: 60px;
`;
const Title = styled.div`
  width: 100%;
  height: 60px;
  border-bottom: 1px solid #eee;
  display: flex;
  align-items: center;
  padding-left: 15px;
  padding-right: 4px;
  justify-content: space-between;
  color: rgba(0,0,0,.6);
  font-weight: 600;
  font-size: 16px;
  b {
    margin-left: 10px;
  }
`;
const Body = styled.div`
  padding: 20px;
  max-height: 70vh;
  overflow-x: overlay;
`;

export default function SearchPage({ title, icon, show, onClose, children, style }) {
  return (
    <Container
      show={show}
      onClick={onClose}
    >
      <Wrap
        onClick={(e) => e.stopPropagation()}
        style={{ ...style }}
      >
        <Title>
          <div>
            {icon}
            <b>{title}</b>
          </div>
          <IconButton
            onClick={onClose}
          >
            <ExitIcon />
          </IconButton>
        </Title>
        <Body>
          {children}
        </Body>
      </Wrap>
    </Container>
  );
}

SearchPage.propTypes = {
  title: PropTypes.string,
  icon: PropTypes.any,
  show: PropTypes.bool,
  onClose: PropTypes.function,
  children: PropTypes.element,
  style: PropTypes.object,
};
