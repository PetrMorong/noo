import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Wrap = styled.div`
  width: 650px;
  height: 450px;
  background: white;
  box-shadow: 0 2px 2px 0 rgba(0,0,0,0.14), 0 3px 1px -2px rgba(0,0,0,0.12), 0 1px 5px 0 rgba(0,0,0,0.2);
  padding: 40px;
  position: relative;

  .createAccount-field {
    width: 325px !important;
    margin-top: -10px !important;
  }

  .buttonWrap {
    position: absolute;
    right: 20px;
    bottom: 20px;
  }
`;

export const Slogan = styled.p`
  margin-top: 0px;
  color: rgba(0,0,0,.85);
  margin: 0;
  b {
    padding-bottom: 0;
    font-size: 22px;
    font-weight: 500;
    line-height: 1.2333;
    margin-bottom: 0;
    margin-top: 0;
    color: rgba(0,0,0,.75);
  }
`;

export const ClickableLink = styled(Link)`
  color: #009788;
  text-decoration: none;
  cursor: pointer;
`;

export const FieldRow = styled.div`
  display: flex;
  .createAccount-firstName {
    margin-right: 25px;
    width: 150px !important;
  }
  .createAccount-lastName {
    width: 150px !important;
  }
`;

export const Photo = styled.div`
  position: relative;
  height: 180px;
  cursor: pointer;
  @media(max-width: 800px) {
    height: 100px;
  }
  img {
    border-radius: 50%;
    min-width: 180px;
    height: 180px;
    @media(max-width: 800px) {
      min-width: 100px;
      height: 100px;
    }
  }
  div {
    display: none;
    width: 100%;
    border-radius: 50%;
    height: 100%;
    top: 0;
    bottom: 0;
    position: absolute;
    background: rgba(0,0,0,.5);
    justify-content: center;
    align-items: center;
  }
  &:hover {
    div {
      display: flex;
    }
  }
`;
