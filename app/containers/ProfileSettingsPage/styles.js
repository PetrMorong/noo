import styled from 'styled-components';

export const Wrap = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 35px;
  @media(max-width: 1000px) {
    flex-direction: column;
    margin-top: 0;
    padding: 15px;
  }
`;
export const Card = styled.div`
  width: 450px;
  height: 370px;
  background: white;
  display: flex;
  padding: 20px;
  margin: 15px;
  position: relative;
  box-shadow: 0 0 1px 1px rgba(0, 0, 0, 0.07), 0 2px 3px 0 rgba(0, 0, 0, 0.11), 0 0 7px 0 rgba(0, 0, 0, 0.05);
  @media(max-width: 600px) {
    width: 100%;
    margin: 0 20px;
  }
`;
export const Card2 = styled.div`
  flex-direction: column;
  width: 450px;
  height: 370px;
  background: white;
  display: flex;
  padding: 20px;
  margin: 15px;
  position: relative;
  box-shadow: 0 0 1px 1px rgba(0, 0, 0, 0.07), 0 2px 3px 0 rgba(0, 0, 0, 0.11), 0 0 7px 0 rgba(0, 0, 0, 0.05);
  @media(max-width: 600px) {
    width: 100%;
    margin: 20px;
  }
`;
export const Photo = styled.div`
  position: relative;
  height: 150px;
  cursor: pointer;
  @media(max-width: 800px) {
    height: 100px;
  }
  img {
    border-radius: 50%;
    min-width: 150px;
    height: 150px;
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
export const InfoWrap = styled.div`
  margin-left: 25px;
  margin-bottom: 60px;
  .profile_input {
    margin-top: -10px;
  }
`;
export const SaveButtonWrap = styled.div`
  width: 100%;
  display: flex;
  position: absolute;
  bottom: 0;
  padding: 0 20px 15px 20px;
  left: 0;
  align-items: center;
  justify-content: space-between;
  margin-top: 30px;
`;
export const VerifyLineWrap = styled.div`
  display: flex;
  height: 80px;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  margin: 0 5px;
  padding: 30px 0;
  border-bottom: 1px solid rgba(0,0,0,.07);
  svg {
    fill: rgba(0,0,0,.55) !important;
    width: 40px !important;
    height: 40px !important;
  }
`;
export const VerifyLineWrapSmall = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-left: 20px;
  color: rgba(0,0,0,.7);
  font-size: 15px;
  b {
    color: rgba(0,0,0,.80);
  }
`;
export const Flex = styled.div`
  display: flex;
`;
