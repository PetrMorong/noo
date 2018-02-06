import styled from 'styled-components';

export const Wrap = styled.div`
  display: ${(props) => props.opened ? 'block' : 'none'};
  width: 360px;
  height: 350px;
  background: #fbfbfb;
  position: fixed;
  top: 55px;
  right: 65px;
  z-index: 89;
  border: 1px solid #ccc;
  box-shadow: 0 16px 24px 2px rgba(0, 0, 0, 0.14), 0 6px 30px 5px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(0, 0, 0, 0.4);
`;
export const Header = styled.div`
  width: 100%;
  height: 50px;
  background: #EEEEEE;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-left: 15px;
  padding-right: 5px;
  p {
    font-size: 14px;
    color: rgba(0,0,0,.65);
    font-weight: 600;
  }
  button {
    position: absolute !important;
    right: 5px;
  }
`;
export const Close = styled.div`
  width: 100vw;
  height: 100vw;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 88;
`;
export const Body = styled.div`
`;
