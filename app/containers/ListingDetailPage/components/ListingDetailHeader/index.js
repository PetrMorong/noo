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
    const { expandMobile } = this.props;
    return (
      <ListingDetailHeaderWrap>
        <CoverBorder />
        <Img src="https://www.lesvoletsverts.fr/wp-content/uploads/2017/08/salon7.jpg" />
        <LightboxWrap>
          <Lightbox
            images={[
              { src: 'https://www.lesvoletsverts.fr/wp-content/uploads/2017/08/salon7.jpg', width: 4, height: 3 },
              { src: 'http://static.cotemaison.fr/medias_11456/w_2048,h_1146,c_crop,x_0,y_126/w_640,h_360,c_fill,g_north/v1492703324/salon-ambiance-retro-avec-fauteuil-eames-lampe-pipistrello_5865839.jpg', width: 4, height: 3 },
            ]}
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
};

export default ListingDetailHeader;
