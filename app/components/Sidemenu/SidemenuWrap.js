import styled from 'styled-components';

export default styled.div`
  background: #F5F5F5;
  width: 250px;
  height: 100%;
  position: fixed;
  z-index: 100;
  left: ${(props) => props.opened ? '0px' : '-300px'};
  transition: 200ms;
  top: 0px;
`;
