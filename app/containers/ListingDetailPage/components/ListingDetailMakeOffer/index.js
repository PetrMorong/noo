import React from 'react';
import PropTypes from 'prop-types';

import Modal from 'components/Modal/index';
import OfferIcon from 'material-ui/svg-icons/action/assignment';

export default function ListingDetailMakeOffer({ openOfferModal, handleToggleOfferModal }) {
  return (
    <Modal
      show={openOfferModal}
      title="Submit offer"
      icon={<OfferIcon />}
      onClose={handleToggleOfferModal}
    />
  );
}

ListingDetailMakeOffer.propTypes = {
  openOfferModal: PropTypes.bool,
  handleToggleOfferModal: PropTypes.func,
};
