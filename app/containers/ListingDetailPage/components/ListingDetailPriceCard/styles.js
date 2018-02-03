import styled from 'styled-components';

export const Wrap = styled.div`
  background: white;
  box-shadow: 0 1px 4px 0 rgba(0,0,0,0.14);
  width: 35%;
  height: 290px;
  padding: 20px;

  @media(max-width: 1000px) {
    height: ${(props) => props.expandMobile ? '100vh' : '80px'};
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
    border-top: 1px solid rgba(0,0,0,.1);
    padding: ${(props) => props.expandMobile ? '20px' : '0'};
    display: ${(props) => props.expandMobile ? 'block' : 'flex'};
    justify-content: center;
    transition: 250ms ease-out;
    z-index: 55;
    overflow: hidden;
  }
`;
export const SmallWrap = styled.div`
  @media(max-width: 1000px) {
    width: 100%;
    display: ${(props) => props.expandMobile ? 'block' : 'flex'};
    align-items: center;
  }
`;
export const ImageWrap = styled.div`
  display: none;
  @media(max-width: 1000px) {
    display: ${(props) => props.expandMobile ? 'block' : 'none'};
  }
`;
export const Price = styled.div`
  font-size: 18px;
  font-weight: 600;
  color: rgba(0,0,0,.8);
  span {
    font-size: 12px;
  }
  strong {
    font-size: 18px;
    font-weight: 600;
  }
  p {
    font-size: 12px;
    font-weight: 400;
    margin-top: 1px;
    color: rgba(0,0,0,.7);
    @media(max-width: 1000px) {
      display: block;
    }
  }
  @media(max-width: 1000px) {
    display: ${(props) => props.expandMobile ? 'block' : 'flex'};
    flex: 1;
    align-items: flex-start;
    flex-direction: column;
    margin-left: ${(props) => props.expandMobile ? '0' : '15px'};
    span {
      margin-left: 5px;
    }
    br {
      display: none;
    }
    p {
      margin-left: 5px;
    }
  }
`;
export const DateInputWrap = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;

  @media(max-width: 1000px) {
    display: ${(props) => props.expandMobile ? 'flex' : 'none'};
    div {
      width: 50%;
    }
  }

  @media(max-width: 450px) {
    display: ${(props) => props.expandMobile ? 'flex' : 'none'};
    flex-direction: column;
    div {
      width: 100%;
    }
  }
`;
export const H5 = styled.h5`
  margin-bottom: -3px;
  color: rgba(0,0,0,.75);
  font-weight: 600;
  @media(max-width: 1000px) {
    display: ${(props) => props.expandMobile ? 'block' : 'none'};
  }
`;
export const Rbmobile = styled.div`
  display: none;
  padding-top: 5px;
  @media(max-width: 1000px) {
    display: block;
    margin-left: ${(props) => props.expandMobile ? '0' : '20px'};
    margin-top: ${(props) => props.expandMobile ? '0' : '-7px'};
    margin-right: ${(props) => props.expandMobile ? '0' : '20px'};
    div {
      width: ${(props) => props.expandMobile ? '100%' : 'auto'};
    }
  }
`;
export const Rbweb = styled.div`
  @media(max-width: 1000px) {
    display: none;
  }
`;
export const Fbmobile = styled.div`
  display: none;
  padding-top: 5px;
  @media(max-width: 1000px) {
    display: ${(props) => props.expandMobile ? 'none' : 'block'};
  }
`;
export const Fbweb = styled.div`
  margin-top: 20px;
  @media(max-width: 1000px) {
    display: none;
  }
`;
export const FlatButtonWrap = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  border: 1px solid #009788;
  border-radius: 2px;
  margin-top: -5px;
`;
export const IconButtonWrap = styled.div`
  display: none;
  @media(max-width: 1000px) {
    margin-left: -15px;
    margin-bottom: 15px;
    display: ${(props) => props.expandMobile ? 'flex' : 'none'};
    justify-content: flex-end;
  }
`;
