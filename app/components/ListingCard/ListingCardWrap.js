import styled from 'styled-components';
import { Link } from 'react-router-dom';

export default styled(Link)`
  background: white;
  box-shadow: rgba(0, 0, 0, 0.12) 0px 1px 6px, rgba(0, 0, 0, 0.12) 0px 1px 4px;
  width: calc(50% - 20px);
  margin: 10px;
  cursor: pointer;
  position: relative;
  text-decoration: none;
  padding-bottom: 20px;
  max-width: ${(props) => props.maxWidth ? `${props.maxWidth}` : 'auto'}px;

  @media(max-width: 850px) {
    width: calc(100% - 20px);
  }
`;
