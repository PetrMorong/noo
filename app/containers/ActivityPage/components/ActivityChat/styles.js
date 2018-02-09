import styled from 'styled-components';

export const Score = styled.div`
  padding: 5px 8px;
  border-radius: 3px;
  color: white;
  font-weight: bold;
  position: absolute;
  right: 15px;
  font-size: 14px;
  top: 10;
  background: #00C853;
`;
export const FiveBest = styled.div`
  padding: 10px 20px 0 20px;
  color: rgba(0,0,0,.7);
  font-weight: 600;
  font-size: 13px;
`;
export const RowWrap = styled.div`
  height: 100%;
  padding-top: 220px;
  button {
    width: 100%;
    margin-top: 10px !important;
    margin-bottom: 5px !important;
  }
`;
export const OffersWrap = styled.div`
  height: 100%;
  overflow-y: scroll;
  ::-webkit-scrollbar {
    display: none;
  }
`;
export const Wrap = styled.div`
  opacity: .95;
  width: 400px;
  min-width: 400px;
  height: 100%;
  display: flex;
  flex-direction: column;
  background: white;
  border-radius: 4px;
  position: relative;
  background: #f8f8f8;
  @media(max-width: 1000px) {
    opacity: 1;
    padding-top: ${(props) => props.step === 'list' ? '58px' : '0'};
    width: 100%;
    min-width: 100%;
    height: 100%;
    position: absolute;
    left: 0;
    z-index: ${(props) => props.step === 'list' ? '50' : '150'};
    top: 0;
    border-radius: 0px;
  }
`;
export const Header = styled.div`
  width: 100%;
  height: 60px;
  border-bottom: 1px solid rgba(0,0,0,.1);
  border-radius: 2px;
  padding: 15px;
  display: flex;
  align-items: center;
  color: rgba(0,0,0,.7);
  font-weight: bold;
`;
export const ChatRow = styled.div`
  width: 100%;
  height: 60px;
  padding:  0 15px;
  display: flex;
  align-items: center;
  cursor: pointer;
  position: relative;
  img {
    width: 40px;
    height: 40px;
    border-radius: 50%;
  }
  span {
    color: rgba(0,0,0,.9);
    font-size: 15px;
  }
  &:hover {
    background: rgba(0,0,0,.05);
  }
`;
export const ChatRowInfoWrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-left: 15px;
  height: 100%;
  color: rgba(0,0,0,.5);
  font-size: 14px;
`;

export const TabsInkBarStyle = { background: 'rgba(0,0,0,.3)' };
export const TabsContentContainerStyle = { height: 'calc( 100% - 50px )' };
export const Height100 = { height: '100%' };
export const TabsItemContainerStyle = {
  background: 'white',
  boxShadow: '0 1px 8px rgba(0,0,0,.1)',
  borderBottom: '1px solid rgba(0,0,0,.1)',
  color: 'rgba(0,0,0,.7)',
  borderRadius: '2px',
};
export const TabButtonStyle = {
  color: 'rgba(0,0,0,.7)',
  textTransform: 'none',
};
