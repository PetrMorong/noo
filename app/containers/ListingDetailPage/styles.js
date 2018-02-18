import styled from 'styled-components';

export const LoaderWrap = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 50px;
`;
export const ListingDetailPageWrap = styled.div`
  width: 100%;
  svg {
    fill: inherit;
  }
  @media(max-width: 1000px) {
    margin-bottom: 70px;
  }
`;
export const ListingDetailBodyWrap = styled.div`
  width: 800px;
  display: flex;
  margin-top: 20px;
  margin-bottom: 20px;
  @media(max-width: 1000px) {
    margin-bottom: 0px;
  }
`;
export const ListingDetailBodyContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;

export const LightboxTheme = {
  container: {
    background: 'rgba(0,0,0, 0.9)',
  },
  content: {
    maxWidth: '100vw',
    height: '100vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    width: '100vw',
  },
  header: {
    width: '100vw',
    padding: '10px 20px',
    position: 'absolute',
    right: 0,
    top: 0,
  },
  figure: {
    marginTop: '40px',
  },
  footer: {
    opacity: 0,
  },
  // arrows
  arrow: {
    color: 'white',
    opacity: 0.9,
    transition: 'opacity 200ms',

    ':hover': {
      opacity: 1,
    },
  },
  arrow__size__medium: {
    borderRadius: 40,
    height: 40,
    marginTop: -20,

    '@media (min-width: 768px)': {
      height: 70,
      padding: 15,
    },
  },
  close: {
    color: 'white',
    opacity: 0.9,
    height: '50px',
    width: '50px',
    transition: 'all 200ms',
    ':hover': {
      opacity: 1,
    },
  },
};
