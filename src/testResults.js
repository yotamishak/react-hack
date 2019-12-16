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
            sub: this.props.testResults.SubidCheck
        };
    }


    render() {

        return (

            <Card className="right">
                <Card.Header className="testHeader">Test Results</Card.Header>
                {!this.state.linkInfo.isInternalLink ? <>
                    <ListGroup className="testResults" >
                        <ListGroup.Item className="test">
                            {this.state.trackerID ? <><GreenLight /> Tracker ID </> : <><RedLight />Tracker ID<InfoIcon text={`Tracker ID is missing, if your website supports linkset automation, click "update tracker button" on Palcon. If it doesn't support- contact operations. When Tracker does not exist we cannot check “Deal Active” or “Country” or “Account Active” tests `} /></>}
                        </ListGroup.Item>
                        <ListGroup.Item className="test" >
                            {!this.state.sc ? <> <GreenLight /> Special Characters</> : <><YellowLight />Special Characters
                            <InfoIcon text={"Special characters in affiliate link MAY break tracking. Please consult with your supervisor."} /></>}
                        </ListGroup.Item>
                        <ListGroup.Item className="test" >
                            {this.state.dealCheck ? <><GreenLight />Deal Active</> : (this.state.dealCheck === null ? <><YellowLight />Deal Active<InfoIcon text={`This test requires Tracker Id that is missing. If your website supports linkset automation, click "update tracker button" on Palcon. If it doesn't support- contact operations' `} /></>
                                : <><RedLight />Deal Active
                            <InfoIcon text={"If the deal is not active you need to search phoenix for an active deal for this brand in this GEO."} />
                                </>)}
                        </ListGroup.Item>
                        <ListGroup.Item className="test">
                            {this.state.country ? <><GreenLight />Country</> : (this.state.country === null ? (this.state.linkInfo.DealCountryList ? <><YellowLight /> Country
                        <InfoIcon text={"we couldn’t check the Country because according to phoenix there is no country in the Deal.  You need to search phoenix for an active deal for this brand in this GEO."} /></>
                                : <><YellowLight /> Country
                        <InfoIcon text={"In order to complete this test, we need to know which GEO your website is targeting. This data needs to be updated in LMS – Please contact LMS administrator "} /></>)
                                : <><RedLight />Country
                        <InfoIcon text={"The GEO of this website doesn’t appear in the deal - you need to search phoenix for an active deal with this brand for this GEO"} /></>)}
                        </ListGroup.Item>
                        <ListGroup.Item className="test">
                            {!this.state.account ? (this.state.account === null ? <> <YellowLight />Account Active
                        <InfoIcon text={`To complete this test, we require Tracker ID. Tracker ID is missing, if your website supports linkset automation, click "update tracker button" on Palcon. If it doesn't support- contact operations. When Tracker does not exist we cannot check “Deal Active” or “Country” or “Account Active” tests`} /></> :
                                <> <RedLight />Account Active
                        <InfoIcon text={"The account is not active you need to search for an active deal and active account with this brand for this GEO "} /></>) : <><GreenLight />Account Active </>}
                        </ListGroup.Item>
                        <ListGroup.Item className="test">
                            {this.state.server ? <><GreenLight />Server Response</> : <> <RedLight />Server Response
                            <InfoIcon text={"If server response is not 200 (OK) then you need to look at the screenshot attached OR visit the Landing Page. In some cases, our tests get blocked (we get a false negative) because we test from a blocked GEO or test duration timed out(Too long to get a response)."} /></>}
                        </ListGroup.Item>
                        <ListGroup.Item className="test">
                            {this.state.sub ?
                                <><GreenLight /> Sub ID</> : (this.state.sub === null ? <><YellowLight /> Sub ID<InfoIcon text={`To complete this test we require Tracker Id. Tracker ID is missing, if your website supports linkset automation, click "update tracker button" on Palcon. If it doesn't support- contact operations. When Tracker does not exist we cannot check “Deal Active” or “Country” or “Account Active” tests `} />
                                </> : <><RedLight />Sub ID
                                 <InfoIcon text={`When a brand supports subid and the value in palsys is not the same as the subid value in palcon then go to palcon linkset and click the “update tracker”. Please make sure you have the updated parameter, if necessary, from Palsys . If you don’t have this feature, contact operations.`} />
                                    </>)

                            } </ListGroup.Item>
                    </ListGroup></> : <></>
                }
            </Card >

        );
    }

}


export default TestResults;

