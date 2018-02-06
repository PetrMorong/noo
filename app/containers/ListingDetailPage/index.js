import React from 'react';
import { Helmet } from 'react-helmet';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { makeSelectPathname } from 'components/Sidemenu/Sidemenu.selectors';
import PropTypes from 'prop-types';
import injectSaga from 'utils/injectSaga';
import { compose } from 'redux';
import injectReducer from 'utils/injectReducer';

import ListingDetailHeader from './components/ListingDetailHeader/index';
import ListingDetailDescription from './components/ListingDetailDescription/index';
import ListingDetailPriceCard from './components/ListingDetailPriceCard/index';
import ListingDetailMap from './components/ListingDetailMap';
import {
  ListingDetailPageWrap,
  ListingDetailBodyWrap,
  ListingDetailBodyContainer,
} from './styles';
import {
  getListingDetail,
  submitScheduleViewing,
  handleToggleViewingMobile,
  handleToggleViewingSuccessDialog,
  toggleOfferModal,
} from './ListingDetailPage.actions';
import saga from './ListingDetailPage.saga';
import reducer from './ListingDetailPage.reducer';
import {
  makeSelectData,
  makeSelectLoading,
  makeSelectExpandMobile,
  makeSelectopenSuccessViewingDialog,
  makeSelectOpenOfferModal,
} from './ListingDetailPage.selectors';

class ListingDetailPage extends React.Component {

  componentWillMount() {
    const { getData, pathname } = this.props;
    const id = pathname.replace('/listing-detail/', '');
    getData(id);
  }

  render() {
    const { data, loading, expandMobile, openSuccessViewingDialog, openOfferModal } = this.props;
    if (loading) {
      // TODO make loading placeholders
      return <span>loading</span>;
    }
    return (
      <div>
        <Helmet>
          <title>Search TODO Translate</title>
          <meta name="description" content="Property name TODO get from backend" />
        </Helmet>
        <ListingDetailPageWrap>
          <ListingDetailHeader data={data} />
          <ListingDetailBodyContainer>
            <ListingDetailBodyWrap>
              <ListingDetailDescription data={data} />
              <ListingDetailPriceCard
                data={data}
                handleSubmitViewing={this.props.submitScheduleViewing}
                handleToggleViewingMobile={this.props.handleToggleViewingMobile}
                handleToggleViewingSuccessDialog={this.props.handleToggleViewingSuccessDialog}
                handleToggleOfferModal={this.props.handleToggleOfferModal}
                expandMobile={expandMobile}
                openSuccessViewingDialog={openSuccessViewingDialog}
                openOfferModal={openOfferModal}
              />
            </ListingDetailBodyWrap>
          </ListingDetailBodyContainer>
          <ListingDetailMap title="The neighborhoood" />
        </ListingDetailPageWrap>
      </div>
    );
  }
}

ListingDetailPage.propTypes = {
  pathname: PropTypes.string,
  getData: PropTypes.func,
  data: PropTypes.object,
  loading: PropTypes.bool,
  submitScheduleViewing: PropTypes.func,
  handleToggleViewingMobile: PropTypes.func,
  handleToggleViewingSuccessDialog: PropTypes.func,
  expandMobile: PropTypes.bool,
  openSuccessViewingDialog: PropTypes.bool,
  handleToggleOfferModal: PropTypes.func,
  openOfferModal: PropTypes.bool,
};

export function mapDispatchToProps(dispatch) {
  return {
    getData: (id) => dispatch(getListingDetail(id)),
    submitScheduleViewing: (e) => {
      e.preventDefault();
      dispatch(submitScheduleViewing());
    },
    handleToggleViewingMobile: () => dispatch(handleToggleViewingMobile()),
    handleToggleViewingSuccessDialog: () => dispatch(handleToggleViewingSuccessDialog()),
    handleToggleOfferModal: () => dispatch(toggleOfferModal()),
  };
}

const mapStateToProps = createStructuredSelector({
  pathname: makeSelectPathname(),
  data: makeSelectData(),
  loading: makeSelectLoading(),
  expandMobile: makeSelectExpandMobile(),
  openSuccessViewingDialog: makeSelectopenSuccessViewingDialog(),
  openOfferModal: makeSelectOpenOfferModal(),
});

const withConnect = connect(mapStateToProps, mapDispatchToProps);
const withReducer = injectReducer({ key: 'lisitingDetailPage', reducer });
const withSaga = injectSaga({ key: 'listingDetailPage', saga });


export default compose(
  withReducer,
  withSaga,
  withConnect,
)(ListingDetailPage);
