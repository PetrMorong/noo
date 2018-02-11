import React from 'react';
import { Tabs, Tab } from 'material-ui/Tabs';
import PropTypes from 'prop-types';
import _ from 'lodash';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { toggleConfirmDialog } from 'containers/App/actions';

import * as types from '../../ActivityPage.constants';
import {
  makeListingsStep,
  makeSelectSelectedListing,
  makeSelectSelectedOffer,
} from '../../ActivityPage.selectors';
import { changeListingsStep, selectListing, selectOffer, clearOffers } from '../../ActivityPage.actions';
import ActivityChatHeader from './ActivityChatHeader';
import ActivityPageListings from './ActivityPageListings';
import ActivityPageListingsOffers from './ActivityPageListingsOffers';
import OfferDetail from './OfferDetail';
import {
  Wrap,
  OffersWrap,
  TabsInkBarStyle,
  TabsContentContainerStyle,
  Height100,
  TabsItemContainerStyle,
  TabButtonStyle,
} from './styles';

function ActivityChat({
  mode,
  listingsStep,
  handleChangeListingsStep,
  selectedListing,
  selectedOffer,
  handleChangeGoToOfffers,
  handleToggleConfirmDialog,
}) {
  return (
    <Wrap step={listingsStep}>
      <Tabs
        inkBarStyle={TabsInkBarStyle}
        contentContainerStyle={TabsContentContainerStyle}
        style={Height100}
        tabTemplateStyle={Height100}
        tabItemContainerStyle={TabsItemContainerStyle}
      >
        {mode === types.LANDLORD &&
          <Tab label="Listing" buttonStyle={TabButtonStyle}>
            {listingsStep === types.LISTINGS_STEP_LIST &&
              <ActivityPageListings
                listingRowClick={_.partial(handleChangeListingsStep, types.LISTINGS_STEP_OFFERS)}
              />
            }
            {listingsStep === types.LISTINGS_STEP_OFFERS &&
              <OffersWrap>
                <ActivityChatHeader
                  data={selectedListing}
                  mode="advanced"
                  backClick={_.partial(handleChangeListingsStep, types.LISTINGS_STEP_LIST)}
                  actions={[
                    {
                      primaryText: 'Edit',
                      onClick: () => {},
                    },
                    {
                      primaryText: 'Unpublish',
                      onClick: _.partial(handleToggleConfirmDialog, {
                        message: 'Unpublish ?',
                        cancelLabel: 'Cancel',
                        confirmLabel: 'Unpublish',
                        confirmOnClick: 'unpublishListing',
                      }),
                    },
                    {
                      primaryText: 'Delete',
                      onClick: _.partial(handleToggleConfirmDialog, {
                        message: 'Delete ?',
                        cancelLabel: 'Cancel',
                        confirmLabel: 'Delete',
                        confirmOnClick: 'deleteListing',
                      }),
                    },
                  ]}
                />
                <ActivityPageListingsOffers
                  data={selectedListing}
                  offerClick={_.partial(handleChangeListingsStep, types.LISTINGS_STEP_OFFER_DETAIL)}
                />
              </OffersWrap>
            }
            {listingsStep === types.LISTINGS_STEP_OFFER_DETAIL &&
              <div style={{ height: '100%' }}>
                <ActivityChatHeader
                  data={selectedOffer}
                  backClick={handleChangeGoToOfffers}
                />
                <OfferDetail data={selectedOffer} />
              </div>
            }
          </Tab>
        }
        {mode === types.LANDLORD &&
          <Tab label="Contracts" buttonStyle={TabButtonStyle}>
            Contracts landlord
          </Tab>
        }
        {mode === types.TENANT &&
          <Tab label="Offers" buttonStyle={TabButtonStyle}>
            Offers tenant
          </Tab>
        }
        {mode === types.TENANT &&
          <Tab label="Contracts" buttonStyle={TabButtonStyle}>
            Contracts tenant
          </Tab>
        }
      </Tabs>
    </Wrap>
  );
}

ActivityChat.propTypes = {
  mode: PropTypes.string,
  listingsStep: PropTypes.bool,
  handleChangeListingsStep: PropTypes.func,
  selectedListing: PropTypes.object,
  selectedOffer: PropTypes.object,
  handleChangeGoToOfffers: PropTypes.func,
  handleToggleConfirmDialog: PropTypes.func,
};

export function mapDispatchToProps(dispatch) {
  return {
    handleChangeListingsStep: (step, item) => {
      dispatch(changeListingsStep(step));
      if (step === types.LISTINGS_STEP_LIST) {
        dispatch(clearOffers());
      }
      if (step === types.LISTINGS_STEP_OFFERS) {
        dispatch(selectListing(item));
      }
      if (step === types.LISTINGS_STEP_OFFER_DETAIL) {
        dispatch(selectOffer(item));
      }
    },
    handleChangeGoToOfffers: () => dispatch(changeListingsStep(types.LISTINGS_STEP_OFFERS)),
    handleToggleConfirmDialog: (data) => dispatch(toggleConfirmDialog(data)),
  };
}

const mapStateToProps = createStructuredSelector({
  listingsStep: makeListingsStep(),
  selectedListing: makeSelectSelectedListing(),
  selectedOffer: makeSelectSelectedOffer(),
});

export default connect(mapStateToProps, mapDispatchToProps)(ActivityChat);
