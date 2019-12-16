import React, { Component } from "react";

import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";
import TestResults from "./testResults";
import ScreenShot from "./ScreenShotModal";
import Image from "react-bootstrap/Image"
import DealValue from "./DealValue";
import DealDetails from "./DealDetails";

import "./linkTable.css";
import "./newLinkRow.css"





class NewLinkRow extends Component {
    constructor(props) {
        super(props);

        this.state = {

            linkInfo: this.props.linkInfo,
            index: this.props.index,
            pl: this.props.linkInfo.Prettylink,
            al: this.props.linkInfo.TrackerUrl,
            lp: this.props.linkInfo.LandingPage ? this.props.linkInfo.LandingPage : "No Info",
            screenshot: this.props.linkInfo.Screenshot ? this.props.linkInfo.Screenshot : false,
            testResults: this.props.linkInfo.ListCheck ? this.props.linkInfo.ListCheck : false,
            internal: this.props.linkInfo.isInternalLink
        };
        this.noData = this.noData.bind(this);
    }
    noData() {
        this.setState({ hasData: false })
    }

    componentDidMount() {
        if (!this.state.testResults) {
            this.props.noData();

            if (this.state.internal) {
                this.props.validLinkCounter(4);
            }
        }
        else {
            if (this.state.testResults.TrackerIdCheck === false || this.state.testResults.dealCheck === false || this.state.testResults.countryCheck === false || this.state.testResults.AccountActive === false || this.state.testResults.serverResponseCheck === false || this.state.testResults.SubidCheck === false) {
                this.props.validLinkCounter(3);
            }
            else if (this.state.testResults.SubidCheck === null || this.state.testResults.TrackerHasSC === true || this.state.testResults.DealStatusCode === null || this.state.testResults.DealCountryList === null || this.state.testResults.DomainCountryISOCode === null || this.state.testResults.AccountActive === null) {
                this.props.validLinkCounter(2);
            }
            else {
                this.props.validLinkCounter(1)
            }
        }

    }

    render() {
        return (
            <div className='linkRow'>

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
                                plaintext={this.state.edit}
                                readOnly={this.state.edit}
                                value={this.state.lp}

                            />
                        </Col>
                    </Form.Group>
                </Form>
                <div className="middle">


                    {
                        this.state.screenshot ?
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


                    <div className="deal">
                        {this.state.linkInfo.DealDescription ?


                            <DealDetails description={this.state.linkInfo.DealDescription} /> : <Button variant="info" disabled>Deal Description</Button>}

                        {this.state.linkInfo.DealValue ? <DealValue description={this.state.linkInfo.DealValue} /> : <Button variant="info"
                            disabled
                        >Deal Value</Button>}
                    </div>
                </div >
                <TestResults Screenshot={this.state.screenshot} testResults={this.state.testResults} linkInfo={this.state.linkInfo} />

            </div >

        );
    }

}


export default NewLinkRow;

