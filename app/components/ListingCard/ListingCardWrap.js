import styled from 'styled-components';

export default styled.div`
  background: white;
  box-shadow: rgba(0, 0, 0, 0.12) 0px 1px 6px, rgba(0, 0, 0, 0.12) 0px 1px 4px;
  width: calc(33% - 20px);
  margin: 10px;
  cursor: pointer;
  position: relative;
  @media(max-width: 850px) {
    width: calc(50% - 20px);
  }
  @media(max-width: 600px) {
    width: calc(100% - 20px);
  }
`;
