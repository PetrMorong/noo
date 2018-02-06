import styled from 'styled-components';

export const Wrap = styled.div`
  width: 100%;
  height: 70px;
  display: flex;
  align-items: center;
  padding: 0 15px;
  cursor: pointer;
  transition: 100ms;
  span {
    font-size: 14px;
    color: rgba(0,0,0,.85);
    width: 100%;
  }
  &:hover {
    background: rgba(0,0,0,.09);
  }
`;

export const Img = styled.img`
  min-width: 40px;
  min-height: 40px;
  border-radius: 50%;
  margin-right: 10px;
`;

export const Img2 = styled.img`
  width: 60px;
  height: 40px;
  border-radius: 2px;
  margin-left: 10px;
  margin-right: 0;
`;
