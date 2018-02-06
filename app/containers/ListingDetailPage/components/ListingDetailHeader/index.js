import React from 'react';
import Lightbox from 'react-images';
import PropTypes from 'prop-types';

import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import ShareIcon from 'material-ui/svg-icons/social/share';
import FavoriteIcon from 'material-ui/svg-icons/action/favorite-border';
import IconButton from 'material-ui/IconButton';

import { LightboxTheme } from '../../ListingDetailPage.constants';
import { ListingDetailHeaderWrap, Img, LightboxWrap, ShowPhotosWrap, ShareFavoriteWeb, ShareFavoriteMobile, CoverBorder } from './styles';

class ListingDetailHeader extends React.Component {
  constructor() {
    super();
    this.toggleLightbox = this.toggleLightbox.bind(this);
    this.gotoNext = this.gotoNext.bind(this);
    this.gotoPrevious = this.gotoPrevious.bind(this);

    this.state = {
      lightboxIsOpen: false,
      currentImage: 0,
    };
  }

  toggleLightbox() {
    this.setState({
      currentImage: 0,
      lightboxIsOpen: !this.state.lightboxIsOpen,
    });
  }
  gotoPrevious() {
    this.setState({ currentImage: this.state.currentImage - 1 });
  }
  gotoNext() {
    this.setState({ currentImage: this.state.currentImage + 1 });
  }

  render() {
    const { expandMobile, data } = this.props;
    return (
      <ListingDetailHeaderWrap>
        <CoverBorder />
        <Img src={data.primaryImage} />
        <LightboxWrap>
          <Lightbox
            images={data.images.map((item) => ({
              src: item,
            }))}
            isOpen={this.state.lightboxIsOpen}
            onClickPrev={this.gotoPrevious}
            onClickNext={this.gotoNext}
            currentImage={this.state.currentImage}
            onClose={this.toggleLightbox}
            theme={LightboxTheme}
          />
        </LightboxWrap>
        <ShowPhotosWrap expandMobile={expandMobile}>
          <FlatButton label="View photos" secondary onClick={this.toggleLightbox} />
        </ShowPhotosWrap>
        <ShareFavoriteWeb>
          <RaisedButton secondary icon={<ShareIcon />} style={{ margin: '0 10px' }} />
          <RaisedButton secondary icon={<FavoriteIcon />} style={{ margin: '0 10px' }} />
        </ShareFavoriteWeb>
        <ShareFavoriteMobile>
          <IconButton iconStyle={{ fill: 'white' }}>
            <ShareIcon />
          </IconButton>
          <IconButton iconStyle={{ fill: 'white' }}>
            <FavoriteIcon />
          </IconButton>
        </ShareFavoriteMobile>
      </ListingDetailHeaderWrap>
    );
  }
}

ListingDetailHeader.propTypes = {
  expandMobile: PropTypes.bool,
  data: PropTypes.object,
};

export default ListingDetailHeader;
