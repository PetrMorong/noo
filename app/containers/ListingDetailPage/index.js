import React from 'react';
import { Helmet } from 'react-helmet';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { makeSelectPathname } from 'components/Sidemenu/Sidemenu.selectors';
import PropTypes from 'prop-types';
import injectSaga from 'utils/injectSaga';
import { compose } from 'redux';
import injectReducer from 'utils/injectReducer';
import Loader from 'components/Loader/index';
import _ from 'lodash';

import ListingDetailHeader from './components/ListingDetailHeader/index';
import ListingDetailDescription from './components/ListingDetailDescription/index';
import ListingDetailPriceCard from './components/ListingDetailPriceCard/index';
import ListingDetailMap from './components/ListingDetailMap';
import {
  ListingDetailPageWrap,
  ListingDetailBodyWrap,
  ListingDetailBodyContainer,
  LoaderWrap,
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
  makeSelectmakeViewingForm,
} from './ListingDetailPage.selectors';

class ListingDetailPage extends React.Component {

  componentWillMount() {
    const { getData, pathname } = this.props;
    const id = pathname.replace('/listing-detail/', '');
    getData(id);
  }

  render() {
    const { data, loading, expandMobile, openSuccessViewingDialog, openOfferModal, viewingForm } = this.props;
    if (loading) {
      return (
        <LoaderWrap>
          <Loader />
        </LoaderWrap>
      );
    }
    return (
      <div>
        <Helmet>
          <title>{_.get(data, 'title', '')}</title>
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
                viewingForm={viewingForm}
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
  viewingForm: PropTypes.object,
};

export function mapDispatchToProps(dispatch) {
  return {
    getData: (id) => dispatch(getListingDetail(id)),
    submitScheduleViewing: () => dispatch(submitScheduleViewing()),
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
  viewingForm: makeSelectmakeViewingForm(),
});

const withConnect = connect(mapStateToProps, mapDispatchToProps);
const withReducer = injectReducer({ key: 'lisitingDetailPage', reducer });
const withSaga = injectSaga({ key: 'listingDetailPage', saga });


export default compose(
  withReducer,
  withSaga,
  withConnect,
)(ListingDetailPage);
