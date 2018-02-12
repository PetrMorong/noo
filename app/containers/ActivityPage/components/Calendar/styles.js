import styled from 'styled-components';

export const ViewingDetailButtons = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  margin: -5px -10px;
`;
export const ViewingDetailTitle = styled.div`
  position: absolute;
  bottom: 10px;
  left: 68px;
  color: white;
  font-size: 18px;
  font-weight: 600;
  display: flex;
  flex-direction: column;
  span {
    font-size: 12px;
    font-weight: 500;
  }
`;
export const ViewingDetailRow = styled.div`
  display: flex;
  align-items: center;
  padding: 10px 20px 5px 20px;
  color: rgba(0,0,0,.75);
  font-size: 14px;
  img {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    margin-right: 10px;
  }
  div {
    margin-left: 18px;
    display: flex;
    flex-direction: column;
    svg {
      margin-left: 7px;
    }
    span {
      font-size: 12px;
      color: rgba(0,0,0,.6);
    }
  }
`;
export const ViewingDetailHeader = styled.div`
  width: 400px;
  height: 115px;
  background: #019082;
  display: flex;
  justify-content: flex-end;
  position: relative;
  margin-bottom: 7px;
`;
export const ViewingDetailWrap = styled.div`
  width: 400px;
  height: 270px;
  background: white;
  box-shadow: 0 24px 38px 3px rgba(0,0,0,0.14), 0 9px 46px 8px rgba(0,0,0,0.12), 0 11px 15px -7px rgba(0,0,0,0.2);
`;
export const ViewingDetailContainer = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  left: 0;
  top: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  .ViewingDetailRow {
    margin-left: 7px;
  }
`;

export const Viewing = styled.div`
  height: 18px;
  width: calc( 100% - 4px );
  border-radius: 2px;
  background: #019082;
  color: white;
  padding: 0px 5px;
  display: flex;
  align-items: center;
  position: absolute;
  left: 2px;
  cursor: pointer;
  span {
    white-space: nowrap;
    font-size: 11px;
  }
`;
export const ContainerHeader = styled.div`
  background: #fdfdfd;
  height: 100%;
  width: 100%;
  margin-left: 50px;
  border-radius: 2px;
  opacity: 0.98;
  position: relative;
`;
export const Header = styled.div`
  background: white;
  height: 50px;
  width: 100%;
  border-radius: 2px;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 1px 8px;
  display: flex;
  align-items: center;
  padding-left: 15px;
  .activity-calendar {
    hr {
      display: none
    }
    width: 100px;
    color: rgba(0,0,0,.8);
  }
  .activity-options {
    flex: 1;
    display: flex;
    justify-content: flex-end;
  }
`;
export const DaysRow = styled.div`
  height: 70px;
  width: 100%;
  display: flex;
  border-bottom: 1px solid rgba(0,0,0,.1);
  padding-left: 50px;
`;
export const DaysCol = styled.div`
  height: 100%;
  border-left: 1px solid rgba(0,0,0,.1);
  flex: 1;
  padding: 8px;
  flex-direction: column;
  color: rgba(0,0,0,.6);
  b {
    font-size: 14px;
  }
`;
export const TimeCol = styled.div`
  width: 50px;
  height: 100%;
`;
export const TimeRow = styled.div`
  height: 60px;
  border-bottom: 1px solid rgba(0,0,0,.1);
  font-size: 13px;
  color: rgba(0,0,0,.7);
  div {
    padding: 5px 7px;
  }
`;
export const DataWrap = styled.div`
  display: flex;
  overflow: overlay;
  height: calc( 100% - 120px );
  ::-webkit-scrollbar {
    background: transparent;
    height: 8px;
    width: 8px;
    border-left: 1px solid rgba(0,0,0,.1);
  }
  ::-webkit-scrollbar-thumb {
    border: none;
    -webkit-box-shadow: none;
    box-shadow: none;
    background: #ddd
  }
`;
export const Day = styled.div`
  flex: 1;
`;
export const Hour = styled.div`
  border-bottom: 1px solid rgba(0,0,0,.1);
  border-left: 1px solid rgba(0,0,0,.1);
  height: 60px;
  position: relative;
`;
