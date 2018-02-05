import React from 'react';
import { Tabs, Tab } from 'material-ui/Tabs';
import FlatButton from 'material-ui/FlatButton';

import ActivityChatHeader from './ActivityChatHeader';
import OfferDetail from './OfferDetail';
import {
  Wrap,
  ChatRow,
  ChatRowInfoWrap,
  OffersWrap,
  RowWrap,
  FiveBest,
  Score,
} from './styles';

const LIST = 'list';
const OFFERS = 'offers';
const OFFER_DETAIL = 'offerDetail';

class ActivityChat extends React.Component {
  constructor() {
    super();
    this.state = {
      listingsStep: LIST,
      headerDataOffers: false,
      headerDataOfferDetail: false,
    };
  }
  listingHeaderBackClick = () => {
    this.setState({ listingsStep: LIST });
  }
  listingRowClick = () => {
    this.setState({
      listingsStep: OFFERS,
      headerDataOffers: {
        img: 'http://www.bloemendaalaanzee.nl/upload/images/comfort-met-sauna/800_3374lowres.jpg',
        label: 'Cozy appartement',
        address: '7 boyd street London',
        backClick: this.listingHeaderBackClick,
        movingDate: '1.3.2018',
        minimumDuration: '1 year',
        price: '1000',
        currency: '$',
      },
    });
  };
  offerClick = () => {
    this.setState({
      listingsStep: OFFER_DETAIL,
      headerDataOfferDetail: {
        img: 'https://scontent-cdg2-1.cdninstagram.com/vp/bda68c4d99a69f81873aee9d7fda6125/5B21E413/t51.2885-19/s150x150/18581446_799236270253402_2643725732747935744_a.jpg',
        label: "J.K Rowling's offer",
        backClick: this.offerDetailBackClick,
      },
    });
  };
  offerDetailBackClick = () => {
    this.setState({ listingsStep: OFFERS });
  };

  render() {
    const { listingsStep, headerDataOffers, headerDataOfferDetail } = this.state;
    return (
      <Wrap step={listingsStep}>
        <Tabs
          inkBarStyle={{ background: 'rgba(0,0,0,.3)' }}
          contentContainerStyle={{ height: 'calc( 100% - 50px )' }}
          style={{ height: '100%' }}
          tabTemplateStyle={{ height: '100%' }}
          tabItemContainerStyle={{ background: 'white', boxShadow: '0 1px 8px rgba(0,0,0,.1)', borderBottom: '1px solid rgba(0,0,0,.1)', color: 'rgba(0,0,0,.7)', borderRadius: '2px' }}
        >
          <Tab label="Listing" buttonStyle={{ color: 'rgba(0,0,0,.7)', textTransform: 'none' }}>
            {listingsStep === LIST &&
              <div style={{ height: '100%' }}>
                <ChatRow onClick={this.listingRowClick}>
                  <img src="http://www.nexalia.fr/wp-content/uploads/2017/02/acheter-un-appartement-neuf-a-beausoleil-monaco-256x256.jpg" alt="" />
                  <ChatRowInfoWrap>
                    <span>7 Boyd street, London</span>
                    You received offer
                  </ChatRowInfoWrap>
                </ChatRow>
                <ChatRow onClick={this.listingRowClick}>
                  <img src="http://www.nexalia.fr/wp-content/uploads/2017/02/appartement-neuf-douvaine-evian-256x256.jpg" alt="" />
                  <ChatRowInfoWrap>
                    <span>4821 Roselyn, Montreal</span>
                    You refused offer
                  </ChatRowInfoWrap>
                </ChatRow>
                <ChatRow onClick={this.listingRowClick}>
                  <img src="https://maison1.advcdn.net/images/medias/000/041/000041568/128.jpg" alt="" />
                  <ChatRowInfoWrap>
                    <span>12 rue Vivienne, Paris</span>
                    You received offer
                  </ChatRowInfoWrap>
                </ChatRow>
              </div>
            }
            {listingsStep === OFFERS &&
              <OffersWrap>
                <ActivityChatHeader data={headerDataOffers} mode="advanced" />
                <RowWrap>
                  <FiveBest>5 best offers</FiveBest>
                  <ChatRow onClick={this.offerClick}>
                    <img src="https://scontent-cdg2-1.cdninstagram.com/vp/bc19f2ba8645cdd18c4491e2995e19c0/5B191A24/t51.2885-19/s150x150/26863827_140525683292884_1210760819864764416_n.jpg" alt="" />
                    <ChatRowInfoWrap>
                      <span>Alex Piterkova</span>
                      + 2 others
                    </ChatRowInfoWrap>
                    <Score>9.1</Score>
                  </ChatRow>
                  <ChatRow onClick={this.offerClick}>
                    <img src="https://scontent-cdg2-1.cdninstagram.com/vp/29dea02204c48087761dbd091efd34fe/5B26D8A2/t51.2885-19/s150x150/26868772_1771104753194326_6099330546502991872_n.jpg" alt="" />
                    <ChatRowInfoWrap>
                      <span>Petra Blechtova</span>
                      + 7 others
                    </ChatRowInfoWrap>
                    <Score>9.0</Score>
                  </ChatRow>
                  <ChatRow onClick={this.offerClick}>
                    <img src="https://scontent-cdg2-1.cdninstagram.com/vp/bda68c4d99a69f81873aee9d7fda6125/5B21E413/t51.2885-19/s150x150/18581446_799236270253402_2643725732747935744_a.jpg" alt="" />
                    <ChatRowInfoWrap>
                      <span>Gary Vaynerchuk</span>
                    </ChatRowInfoWrap>
                    <Score>8.9</Score>
                  </ChatRow>
                  <ChatRow onClick={this.offerClick}>
                    <img src="https://scontent-cdg2-1.cdninstagram.com/vp/a0adbe96a08fd7c9232586d5f4bdbeff/5B157248/t51.2885-19/s150x150/26870576_1558844500902024_3388386999319658496_n.jpg" alt="" />
                    <ChatRowInfoWrap>
                      <span>Anna Gajova</span>
                    </ChatRowInfoWrap>
                    <Score>8.6</Score>
                  </ChatRow>
                  <ChatRow onClick={this.offerClick}>
                    <img src="https://scontent-cdg2-1.cdninstagram.com/vp/960528f2cd7b44c61f776bbf4179e43d/5B072223/t51.2885-19/s150x150/21107564_116302468997615_5422931261045866496_a.jpg" alt="" />
                    <ChatRowInfoWrap>
                      <span>Jerome Boateng</span>
                    </ChatRowInfoWrap>
                    <Score>8.1</Score>
                  </ChatRow>
                  <FlatButton primary label="Show all" />
                </RowWrap>
              </OffersWrap>
            }
            {listingsStep === OFFER_DETAIL &&
              <div style={{ height: '100%' }}>
                <ActivityChatHeader data={headerDataOfferDetail} />
                <OfferDetail />
              </div>
            }
          </Tab>
          <Tab label="Contracts" buttonStyle={{ color: 'rgba(0,0,0,.7)', textTransform: 'none' }}>
            Nothing yet
          </Tab>
        </Tabs>
      </Wrap>
    );
  }
}

export default ActivityChat;
