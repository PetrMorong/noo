import styled from 'styled-components';
import { Link } from 'react-router-dom';

export default styled(Link)`
  height: 130px;
  width: 100%;
  background: #009788;
  color: white;
  display: flex;
  flex-direction: column;
  padding: 16px 25px;
  font-size: 14px;
  cursor: pointer;
  text-decoration: none;
  img {
    width: 50px;
    height: 50px;
    border-radius: 50%;
    margin-bottom: 15px;
    min-width: 50px;
    min-height: 50px;
  }
  p {
    margin-top: -3px;
  }
  @media (min-width: 768px) {
    display: none;
  }
`;
