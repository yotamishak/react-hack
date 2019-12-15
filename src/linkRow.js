import React, { Component } from "react";

import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Image from "react-bootstrap/Image"
import ScreenShot from "./ScreenShotModal";
import GreenLight from "./GreenLight"
import RedLight from "./RedLight"
import YellowLight from "./YellowLight"
import "./linkTable.css"
import InfoIcon from "./InfoIcon"
import DealDetails from "./DealDetails"
import DealValue from "./DealValue"



class LinkRow extends Component {
  constructor(props) {
    super(props);

    this.state = {

      linkInfo: this.props.linkInfo,
      index: this.props.index,
      pl: this.props.linkInfo.Prettylink,
      al: this.props.linkInfo.TrackerUrl,
      lp: this.props.linkInfo.LandingPage ? this.props.linkInfo.LandingPage : "No Info",
      screenshot: this.props.linkInfo.Screenshot ? this.props.linkInfo.Screenshot : false,
      testResults: this.props.linkInfo.ListCheck ? this.props.linkInfo.ListCheck : false
    };
  }

  componentDidMount() {
    if (!this.state.testResults) {
      this.props.noData();
    }
    else {
      if (this.state.testResults.TrackerIdCheck === true && this.state.testResults.dealCheck === true && this.state.testResults.countryCheck === true && this.state.testResults.AccountActive === true && this.state.testResults.serverResponseCheck === true) {
        this.props.linkValidator(true);
      }
      else {
        this.props.linkValidator(false);
      }
    }

  }

  render() {

    return (
      <>
        <thead>
          <tr className="mainHeader">
            <th >#</th>
            <th colspan="6">Link Set</th>
            <th>Screenshot</th>

          </tr>

        </thead>
        <tbody className="linkResults">

          <tr>
            <td >{this.state.index + 1}</td>
            <td colspan='6'>
              <Form className="LinkSet">
                <Form.Group as={Row} >
                  <Form.Label column md="2">
                    Pretty Link
              </Form.Label>
                  <Col md="9">
                    <Form.Control
                      type="text"
                      placeholder={this.state.linkInfo.Prettylink}
                      // plaintext={this.state.edit}
                      readOnly={this.state.edit}
                      value={this.state.pl}

                    />
                  </Col>
                </Form.Group>
                <Form.Group as={Row} >
                  <Form.Label column md="2">
                    Affliate Link
              </Form.Label>
                  <Col md="9">
                    <Form.Control
                      type="url"
                      placeholder={this.state.linkInfo.TrackerUrl}
                      plaintext={this.state.edit}
                      readOnly={this.state.edit}
                      value={this.state.al}
                    />
                  </Col>
                </Form.Group>
                <Form.Group as={Row} >
                  <Form.Label column md="2">
                    Landing Page
              </Form.Label>
                  <Col md="9">
                    <Form.Control
                      type="url"
                      placeholder={this.state.linkInfo.LandingPage}
                      // plaintext={this.state.edit}
                      // readOnly={this.state.edit}
                      value={this.state.lp}

                    />
                  </Col>
                </Form.Group>
              </Form>
            </td>
            <td>
              {this.state.screenshot ?
                <ScreenShot
                  src={this.state.screenshot.url}
                  title={this.state.screenshot.title}
                  description={this.state.screenshot.description}
                /> :
                <Image
                  src={
                    `${process.env.PUBLIC_URL}/error_icon.jpg`}
                  width="40px" />
              }
            </td>
          </tr>
          {this.state.testResults ?
            <>
              <tr className="subHeader">
                <th></th>
                <th>Tracker Id</th>
                <th>Special Characters</th>
                <th>Deal Active</th>
                <th>Country</th>
                <th>Account Active</th>
                <th>Server Response</th>
                <th>Sub ID</th>

              </tr>
              <tr className="testRes">
                <td></td>
                <td>
                  {this.state.testResults.TrackerIdCheck ? <GreenLight /> : <><RedLight /><InfoIcon text={"When tracker ID is missing – this means you need to ask operations to create one."} /></>}
                </td>
                <td>
                  {!this.state.testResults.TrackerHasSC ? <GreenLight /> : <><YellowLight />
                    <InfoIcon text={"Special characters in affiliate link MAY break tracking. Please consult with your supervisor."} /></>}
                </td>
                <td>

                  {this.state.testResults.dealCheck ? <GreenLight /> : <><RedLight />
                    <InfoIcon text={"If the deal is not active you need to search phoenix for an active deal for this brand in this GEO."} /></>}

                  {this.state.linkInfo.DealDescription ? <DealDetails description={this.state.linkInfo.DealDescription} /> : <></>}
                  {this.state.linkInfo.DealValue ? <DealValue description={this.state.linkInfo.DealValue} /> : <></>}
                </td>
                <td>
                  {this.state.testResults.DomainCountryISOCode ? <GreenLight /> : <><RedLight />
                    <InfoIcon text={"If the GEO of this website doesn’t appear in the deal - you need to search phoenix for an active deal with this brand for this GEO"} /></>}
                </td>
                <td>
                  {this.state.testResults.AccountActive ? <GreenLight /> : <> <RedLight />
                    <InfoIcon text={"If the account is not active you need to search for an active deal with this brand for this GEO "} /></>}
                </td>
                <td>
                  {this.state.testResults.serverResponseCheck ? <GreenLight /> : <> <RedLight />
                    <InfoIcon text={"If server response is not 200 (OK) then you need to look at the screenshot attached OR visit the Landing Page."} /></>}
                </td>

                <td>
                  {this.state.testResults.serverResponseCheck ? <GreenLight /> : <> <RedLight />
                    <InfoIcon text={'When a brand supports subID and the value in Palsys is not the same as the subid value in Palcon then go to Palcon linkset and click on "update tracker'} /></>}

                </td>

              </tr></>
            : <tr>
              <td className="noData" colspan="8">This link has still not been checked...</td>
            </tr>}
        </tbody>
        <br></br>
      </>
    );
  }

}


export default LinkRow;