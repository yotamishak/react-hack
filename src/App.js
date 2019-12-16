import React, { Component } from "react";

import Header from "./Header";
import ScrollUpButton from "react-scroll-up-button";
import "./App.css";
import LinkList from "./linkList";
// import NewLinkRow from "./newLinkRow"
// import LinkAccordion from "./linkAccordian"

// const linkInfo = {
//   "LsId": 1,
//   "Screenshot": {
//     "title": "Pardon Our Interruption",
//     "url": "https://linkchecker-images.s3.amazonaws.com/1_-1_1576161438863.png"
//   },
//   "TrackerUrl": "https://www.norsknettcasino.net/anbefalte-casino/",
//   "PalconBrandId": 728,
//   "LandingPage": "https://www.norsknettcasino.net/anbefalte-casino/",
//   "Prettylink": "links/verajohn-casino",
//   "PalconBrandName": "VeraJohn Casino",
//   "ListCheck": {
//     "SubidCheck": false,
//     "TrackerIdCheck": false,
//     "DealStatusCode": null,
//     "AccountActive": null,
//     "DomainCountryISOCode": true,
//     "dealCheck": null,
//     "serverResponseCheck": false,
//     "DealCountryList": null,
//     "countryCheck": null,
//     "TrackerHasSC": false
//   },
//   "BrandPicUrl": "https://www.norsknettcasino.net/v2/wp-content/uploads/2012/03/verajohn_210x100.png",
//   "DomainName": "norsknettcasino.net"
// };
// const linkInfo1 = {
//   "LsId": 6,
//   "Screenshot": {
//     "title": "Play Online Slots & Games on the Best UK Casino Site | Prime Slots",
//     "description": "Prime Slots offers the best online casino experience in the UK. Join now to play hundreds of slot games on our site & get up to 100 Spins Welcome bonus!",
//     "url": "https://linkchecker-images.s3.amazonaws.com/6_5183585_1576161440859.png"
//   },
//   "TrackerUrl": "https://www.primeslots.com/?AR=10025799&prc=62879_0",
//   "PalconBrandId": 766,
//   "LandingPage": "https://www.primeslots.com/en-GB/",
//   "Prettylink": "links/primeslots",
//   "PalconBrandName": "PrimeSlots",
//   "DealValue": "Revshare - Mega Casino DK - 30% - EUR ; Revshare - Mega Casino - 30% - EUR ; All Brands-Revshare - 30% - EUR ; Revshare - Simba Games - 30% - EUR ; Revshare - Simba Games DK - 30% - EUR ; Revshare - PrimeSlot - 45% - EUR ; Revshare - PrimeSlots - 45% - EUR ; RMP - Mega Casino DK - 150 - EUR ; RMP - Mega Casino - 150 - EUR ; All-Brands Rmp - 150 - EUR ; RMP - Simba Games - 150 - EUR ; RMP - Simba Games DK - 150 - EUR ; RMP - PrimeSlot - 0% - EUR ; RMP - PrimeSlots - 0% - EUR",
//   "ListCheck": {
//     "SubidCheck": true,
//     "TrackerIdCheck": true,
//     "DealStatusCode": true,
//     "AccountActive": true,
//     "DomainCountryISOCode": true,
//     "dealCheck": true,
//     "serverResponseCheck": true,
//     "DealCountryList": true,
//     "countryCheck": true,
//     "TrackerHasSC": false
//   },
//   "DealDescription": "NO DISPLAY TRAFFIC IS ALLOWED\nSimba + Mega casino on hybrid\nPrime slots on 45% rev share\n\nVideo Poker added only for DK and only for the brands Simba + Mega Casino",
//   "BrandPicUrl": "https://www.norsknettcasino.net/v2/wp-content/uploads/2015/08/PrimeSlots_210x100.png",
//   "DomainName": "norsknettcasino.net"
// };

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      site: false
    }


  }


  render() {
    return (
      <div>
        <Header />

        <LinkList />
        <ScrollUpButton />
      </div>
    );
  }
}

export default App;
