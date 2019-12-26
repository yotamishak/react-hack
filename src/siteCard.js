import React, { Component } from "react";

import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Image from "react-bootstrap/Image"
import LinkAccordian from "./linkAccordian";
import "./siteCard.css"




class SiteCard extends Component {
    constructor(props) {
        super(props);


        this.state = {
            // Loaded:false,
            siteName: this.props.siteName,
            originalSiteInfo: this.props.siteInfo,
            siteInfo: this.props.siteInfo.reduce((acc, obj) => {
                var key = obj['PalconBrandName'];
                if (!acc[key]) {
                    acc[key] = [];
                }
                acc[key].push(obj);
                return acc;
            }, {}),
            greenLinks: 0,
            yellowLinks: 0,
            redLinks: 0,
            greyLinks: 0,
            totalLinks: this.props.siteInfo.length,
            firstMount: true,
            filtered: 0,
            current: []

        };
        this.sortData = this.sortData.bind(this);

        this.updateFilter = this.updateFilter.bind(this);


    }
    componentDidMount() {

        this.sortData(this.state.originalSiteInfo);
        this.setState({ firstMount: false });
    }
    sortData(siteInfo) {
        let filteredGreen = [], filteredYellow = [], filteredRed = [], filteredGrey = [], total = [];

        for (let link of siteInfo) {
            if (!link.ListCheck || link.isInternalLink || link.isNoDealLink || link.isStopTrafficLink) {
                filteredGrey.push(link);
            }
            else {
                if (link.ListCheck.TrackerIdCheck === false || link.ListCheck.dealCheck === false || link.ListCheck.countryCheck === false || link.ListCheck.AccountActive === false || link.ListCheck.serverResponseCheck === false || link.ListCheck.SubidCheck === false) {
                    filteredRed.push(link);
                }
                else if (link.ListCheck.SubidCheck === null || link.ListCheck.TrackerHasSC === true || link.ListCheck.DealStatusCode === null || link.ListCheck.DealCountryList === null || link.ListCheck.DomainCountryISOCode === null || link.ListCheck.AccountActive === null) {
                    filteredYellow.push(link);
                }
                else {
                    filteredGreen.push(link);
                }
            }
        }
        this.setState({ greenLinks: filteredGreen.length, yellowLinks: filteredYellow.length, redLinks: filteredRed.length, greyLinks: filteredGrey.length });
        total = siteInfo.reduce((acc, obj) => {
            var key = obj['PalconBrandName'];
            if (!acc[key]) {
                acc[key] = [];
            }
            acc[key].push(obj);
            return acc;
        }, {});
        filteredGreen = filteredGreen.reduce((acc, obj) => {
            var key = obj['PalconBrandName'];
            if (!acc[key]) {
                acc[key] = [];
            }
            acc[key].push(obj);
            return acc;
        }, {});
        filteredGrey = filteredGrey.reduce((acc, obj) => {
            var key = obj['PalconBrandName'];
            if (!acc[key]) {
                acc[key] = [];
            }
            acc[key].push(obj);
            return acc;
        }, {});
        filteredYellow = filteredYellow.reduce((acc, obj) => {
            var key = obj['PalconBrandName'];
            if (!acc[key]) {
                acc[key] = [];
            }
            acc[key].push(obj);
            return acc;
        }, {});
        filteredRed = filteredRed.reduce((acc, obj) => {
            var key = obj['PalconBrandName'];
            if (!acc[key]) {
                acc[key] = [];
            }
            acc[key].push(obj);
            return acc;
        }, {});

        this.setState({ total: total, filteredRed: filteredRed, filteredGreen: filteredGreen, filteredYellow: filteredYellow, filteredGrey: filteredGrey })
    }

    updateFilter(f) {
        if (f === 0)
            this.setState(() => ({ siteInfo: this.state.total }));
        else if (f === 1)
            this.setState(() => ({ siteInfo: this.state.filteredGreen }));
        else if (f === 2)
            this.setState(() => ({ siteInfo: this.state.filteredYellow }));
        else if (f === 3)
            this.setState(() => ({ siteInfo: this.state.filteredRed }));
        else if (f === 4)
            this.setState(() => ({ siteInfo: this.state.filteredGrey }));

    }


    render() {


        if (this.state.originalSiteInfo) {
            return (

                <Card >
                    <Card.Header >

                        <Row>

                            <Col className="site_name" md={{ offset: 1, span: 6 }}>
                                {this.state.siteName}
                            </Col>

                            <Col className="status" md={{ span: 5 }}>
                                <Button variant="info" onClick={() => { this.updateFilter(0) }} >Total Links:{this.state.totalLinks}</Button>
                                <Button variant="success" onClick={() => { this.updateFilter(1) }}>Valid Links:{this.state.greenLinks}</Button>
                                <Button variant="danger" onClick={() => { this.updateFilter(3) }}>Critcal Errors: {this.state.redLinks}</Button>
                                <Button variant="warning" onClick={() => { this.updateFilter(2) }}>Warnings: {this.state.yellowLinks}</Button>
                                <Button variant="secondary" onClick={() => { this.updateFilter(4) }} >Internal Links: {this.state.greyLinks}</Button>
                            </Col>
                        </Row>

                    </Card.Header>

                    <Card.Body>
                        {
                            Object.keys(this.state.siteInfo).sort().map((brand, k) => {

                                return (

                                    <LinkAccordian className="LinkTable" brandName={brand} brandInfo={this.state.siteInfo[brand]} key={k} />
                                );
                            })
                        }
                    </Card.Body>

                </Card>

            );


        }
        else {
            return (
                <div className="NoInfo">
                    <Image src={`${process.env.PUBLIC_URL}/shrug.jpeg`} width="700px" />
                    Sorry, We don't seem to have any information regarding this site.
                    <br />
                    Contact support for more information...
                </div>

            )
        }
    }
}


export default SiteCard;
