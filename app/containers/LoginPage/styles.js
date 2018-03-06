import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Wrap = styled.div`
  width: 450px;
  height: 500px;
  background: white;
  box-shadow: 0 2px 2px 0 rgba(0,0,0,0.14), 0 3px 1px -2px rgba(0,0,0,0.12), 0 1px 5px 0 rgba(0,0,0,0.2);
  padding: 40px;
`;

export const Slogan = styled.p`
  margin-top: 30px;
  color: rgba(0,0,0,.85);
  b {
    padding-bottom: 0;
    font-size: 22px;
    font-weight: 500;
    line-height: 1.2333;
    margin-bottom: 0;
    margin-top: 0;
    color: rgba(0,0,0,.95);
  }
`;

export const ClickableLink = styled(Link)`
  color: #009788;
  text-decoration: none;
  cursor: pointer;
`;
