import styled from 'styled-components';

export default styled.div`
  position: absolute;
  float: right;
  width: 6px;
  height: 6px;
  top: 14px;
  right: 12px;
  border-radius: 3px;
  background-color: #f44336;
  border: solid 1px #f44336;

  @media (max-width: 600px) {
    display: ${(props) => props.type === 'burger' ? 'block' : 'none'};
  }

  @media (min-width: 600px) {
    display: ${(props) => props.type === 'burger' ? 'none' : 'block'};
  }
`;
