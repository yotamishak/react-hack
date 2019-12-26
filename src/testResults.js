import React, { Component } from "react";


import GreenLight from "./GreenLight";
import RedLight from "./RedLight";
import YellowLight from "./YellowLight";
import "./linkTable.css";
import InfoIcon from "./InfoIcon";
import ListGroup from 'react-bootstrap/ListGroup'
import Card from "react-bootstrap/Card";



class TestResults extends Component {
    constructor(props) {
        super(props);

        this.state = {
            linkInfo: this.props.linkInfo,
            trackerID: this.props.testResults.TrackerIdCheck,
            sc: this.props.testResults.TrackerHasSC,
            dealCheck: this.props.testResults.dealCheck,
            country: this.props.testResults.countryCheck,
            account: this.props.testResults.AccountActive,
            server: this.props.testResults.serverResponseCheck ? this.props.testResults.serverResponseCheck : false,
            sub: this.props.testResults.SubidCheck,
            stop: this.props.linkInfo.isStopTrafficLink,
            noDeal: this.props.linkInfo.isNoDealLink

        };
    }
    static getDerivedStateFromProps(props, state) {
        if (props.linkInfo !== state.linkInfo) {
            return {
                linkInfo: props.linkInfo,
                trackerID: props.testResults.TrackerIdCheck,
                sc: props.testResults.TrackerHasSC,
                dealCheck: props.testResults.dealCheck,
                country: props.testResults.countryCheck,
                account: props.testResults.AccountActive,
                server: props.testResults.serverResponseCheck ? props.testResults.serverResponseCheck : false,
                sub: props.testResults.SubidCheck
            }
        }
    }


    render() {

        return (

            <Card className="right">
                <Card.Header className="testHeader">Test Results</Card.Header>
                {(!this.state.linkInfo.isInternalLink || !this.state.stop || !this.state.noDeal) ? <>
                    <ListGroup className="testResults" >
                        <ListGroup.Item className="test">
                            {this.state.trackerID ? <><GreenLight /> Tracker ID<InfoIcon text={`Tracker ID: ${this.state.linkInfo.TrackerId}`} /></> : <><RedLight />Tracker ID<InfoIcon text={`Tracker ID is missing. If your website supports linkset automation, click "update tracker" button in Palcon. If it doesn't support it - contact operations. When TrackerID does not exist we cannot check “Deal Active” , “Country” and “Account Active”  `} /></>}
                        </ListGroup.Item>
                        <ListGroup.Item className="test" >
                            {!this.state.sc ? <> <GreenLight /> Special Characters</> : <><YellowLight /> Special Characters
                        <InfoIcon text={"Special characters in affiliate tracker link MAY break tracking. Please consult with your supervisor."} /></>}
                        </ListGroup.Item>
                        <ListGroup.Item className="test" >
                            {this.state.dealCheck ? <><GreenLight /> Deal Active</> : (this.state.dealCheck === null ? <><YellowLight /> Deal Active<InfoIcon text={`This test requires Tracker Id which is missing. If your website supports linkset automation, click "update tracker" button in Palcon. If it doesn't support it - contact operations' `} /></>
                                : <><RedLight /> Deal Active
                        <InfoIcon text={"This tracker is from an inactive deal. You need to search phoenix for an active deal for this brand in this GEO."} />
                                </>)}
                        </ListGroup.Item>
                        <ListGroup.Item className="test">
                            {this.state.country ? <><GreenLight /> Country</> : (this.state.country === null ? (this.state.linkInfo.DealCountryList ? <><YellowLight /> Country
                                <InfoIcon text={"In order to complete this test, we need to know which GEO your website is targeting. This data needs to be updated in LMS – Please contact LMS administrator "} />
                            </>
                                : <><YellowLight /> Country
                    <InfoIcon text={"In order to complete this test, we need to know which GEO your website is targeting. This data needs to be updated in LMS – Please contact LMS administrator "} /></>)
                                : <><RedLight /> Country
                    <InfoIcon text={"The GEO of this website doesn’t appear in the deal - you need to search phoenix for an active deal with this brand in this GEO"} /></>)}
                        </ListGroup.Item>
                        <ListGroup.Item className="test">
                            {!this.state.account ? (this.state.account === null ? <> <YellowLight /> Account Active
                    <InfoIcon text={`To complete this test, we require Tracker ID and a valid account. If Tracker ID is missing and your website supports linkset automation, click "update tracker" button in Palcon. If it doesn't support it - contact Operations. If Tracker ID exists then there is a problem with the account - contact Operations`} /></> :
                                <> <RedLight /> Account Active
                    <InfoIcon text={"This tracker is from an inactive account. You need to search for an active deal and active account for this brand in this GEO "} /></>) : <><GreenLight /> Account Active </>}
                        </ListGroup.Item>
                        <ListGroup.Item className="test">
                            {this.state.server ? <><GreenLight /> Server Response</> : <> <RedLight /> Server Response
                        <InfoIcon text={"The server response is not 200 (OK). Please look at the screenshot attached and visit the landing page. In some cases, our tests may get blocked because we test from a blocked GEO, our bot was blocked or the test duration timed out(Too long to get a response)"} /></>}
                        </ListGroup.Item>
                        <ListGroup.Item className="test">
                            {this.state.sub ?
                                <><GreenLight /> Sub ID</> : (this.state.sub === null ? <><YellowLight /> Sub ID<InfoIcon text={`To complete this test, we require Tracker ID which is missing. If your website supports linkset automation, click "update tracker" button in Palcon. If it doesn't support it - contact operations `} />
                                </> : <><RedLight /> Sub ID
                             <InfoIcon text={`There is a data discrepancy in the SubID value. This brand supports SubID and the value in Palsys is not the same as the SubID value in palcon. To fix this go to palcon linkset and click the “update tracker” button `} />
                                    </>)

                            } </ListGroup.Item>
                    </ListGroup></> : <></>
                }
            </Card >

        );
    }

}

export default TestResults;

