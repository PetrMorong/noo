export const GET_LISTING_DETAIL = 'ListingDetailPage/GET_LISTING_DETAIL';
export const GET_LISTING_DETAIL_SUCCESS = 'ListingDetailPage/GET_LISTING_DETAIL_SUCCESS';
export const GET_LISTING_DETAIL_ERROR = 'ListingDetailPage/GET_LISTING_DETAIL_ERROR';

export const SUBMIT_SCHEDULE_VIEWING = 'ListingDetailPage/SUBMIT_SCHEDULE_VIEWING';
export const SUBMIT_SCHEDULE_VIEWING_SUCCESS = 'ListingDetailPage/SUBMIT_SCHEDULE_VIEWING_SUCCESS';
export const SUBMIT_SCHEDULE_VIEWING_ERROR = 'ListingDetailPage/SUBMIT_SCHEDULE_VIEWING_ERROR';

export const TOGGLE_VIEWING_MOBILE = 'lisitingDetailPage/TOGGLE_VIEWING_MOBILE';
export const TOGGLE_VIEWING_SUCCESS_DIALOG = 'lisitingDetailPage/TOGGLE_VIEWING_SUCCESS_DIALOG';
export const TOGGLE_OFFER_MODAL = 'lisitingDetailPage/TOGGLE_OFFER_MODAL';

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
