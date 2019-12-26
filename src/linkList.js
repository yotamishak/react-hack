import React, { Component } from "react";
import SearchBar from "./SearchBar"
import { GridLoader } from 'react-spinners'


const SiteCard = React.lazy(() => import("./siteCard"));

const style = { position: "fixed", top: "50%", left: "50%", transform: "translate(-50%, -50%)" };

class LinkList extends Component {
  constructor(props) {
    super(props);

    this.state = {

      siteList: [],
      chooseSite: this.props.site,
      siteName: '',
      Loaded: false,
      siteInfo: []
    }


    this.pickSite = this.pickSite.bind(this);

  }


  pickSite(site) {
    this.setState(() => ({ Loaded: false }));
    fetch(`https://tqesa6enj4.execute-api.us-east-1.amazonaws.com/default/getTrackers?domainName=${site}`)
      .then(res => res.json())
      .then(res => {
        this.setState((prev, props) => ({ siteInfo: res, chooseSite: true, siteName: site, Loaded: true }));
      });


  }

  componentDidMount() {
    fetch("https://dnh7j1p4z2.execute-api.us-east-1.amazonaws.com/default/getDomainList")
      .then(res => res.json())
      .then(res => {
        this.setState({ siteList: res.body, Loaded: true });
      });
  }

  render() {
    if (this.state.Loaded) {
      if (!this.state.chooseSite) {
        return <SearchBar sitelist={this.state.siteList} pickSite={this.pickSite} value={this.state.siteName} />
      }
      else {

        return (
          <div>
            {/* <SearchBar sitelist={this.state.siteList} pickSite={this.pickSite} value={this.state.siteName} /> */}

            <React.Suspense fallback={<GridLoader color={'#36d7b7'} size={100} sizeUnit={"px"} css={style} />}  >
              <SiteCard siteInfo={this.state.siteInfo} siteName={this.state.siteName} />
            </React.Suspense>

          </div>
        );

      }
    }
    return <GridLoader color={'#36d7b7'} size={100} sizeUnit={"px"} css={style} />;
  }


}


export default LinkList;
