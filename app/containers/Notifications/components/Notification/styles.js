import styled from 'styled-components';

export const Wrap = styled.div`
  width: 100%;
  height: 60px;
  display: flex;
  align-items: center;
  padding: 0 15px;
  cursor: pointer;
  transition: 100ms;
  .notifications_wrap {
    display: flex;
    flex-direction: column;
    margin-left: 10px;
  }
  .notifications_secondaryText {
    color: rgba(0,0,0,.5);
    font-size: 12px;
  }
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
  width: 40px;
  height: 40px;
`;
