import styled from 'styled-components';

export default styled.div`
  background: ${(props) => props.location === '/activity' ? 'none' : 'white'};
  width: 100%;
  height: 60px;
  box-shadow: ${(props) => props.location === '/activity' ? 'none' : '0 1px 8px rgba(0,0,0,.3)'};
  padding: 0 8px;
  display: flex;
  align-items: center;
  position: fixed;
  top: -1px;
  z-index: 54;
  @media(max-width: 1000px) {
    background: white;
    z-index: 80;
    svg {
      color: rgba(0,0,0,.7) !important;
      fill: rgba(0,0,0,.7) !important;
    }
  }
`;
