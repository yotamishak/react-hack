import React, { Component } from "react";

import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Image from "react-bootstrap/Image"
import LinkAccordian from "./linkAccordian";
import "./siteCard.css"



// const defineFlag = function (res) {


//     if (res.TrackerIdCheck === false || res.dealCheck === false || res.countryCheck === false || res.AccountActive === false || res.serverResponseCheck === false || res.SubidCheck === false) {
//         return 3;
//     }
//     else if (res.SubidCheck === null || res.TrackerHasSC === true || res.DealStatusCode === null || res.DealCountryList === null || res.DomainCountryISOCode === null || res.AccountActive === null) {
//         return 2;
//     }
//     else {
//         return 1;
//     }
// };



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
            siteBool: true,
            filtered: null

        };
        this.totalSiteCounter = this.totalSiteCounter.bind(this);
        // this.filterBy = this.filterBy.bind(this);
        // this.defineFlag = this.defineFlag.bind(this);


    }
    // filterBy(f) {
    //     let filtered = [];
    //     if (f === 0) {
    //         filtered = this.state.originalSiteInfo
    //     }
    //     else {
    //         filtered = this.state.originalSiteInfo.filter(link => {
    //             if (link.isInternalLink) {
    //                 if (f === 4)
    //                     return link;
    //             }
    //             else if (defineFlag(link.ListCheck) === f) {
    //                 return link;
    //             }
    //         });
    //     }

    //     if (filtered) {
    //         filtered = filtered.reduce((acc, obj) => {
    //             var key = obj['PalconBrandName'];
    //             if (!acc[key]) {
    //                 acc[key] = [];
    //             }
    //             acc[key].push(obj);
    //             return acc;
    //         }, {});
    //         this.setState((prevState) => ({ siteInfo: filtered, filtered: true }));
    //         console.log(filtered);
    //     }
    // }


    totalSiteCounter(v) {
        if (v === 1) {
            this.setState((prevState, props) => ({ greenLinks: prevState.greenLinks + 1 }));


        }
        else if (v === 2) {
            this.setState((prevState, props) => ({ yellowLinks: prevState.yellowLinks + 1 }));

        }
        else if (v === 3) {
            this.setState((prevState, props) => ({ redLinks: prevState.redLinks + 1 }));

        }
        else {
            this.setState((prevState, props) => ({ greyLinks: prevState.greyLinks + 1 }));
        }
    }

    render() {

        if (Object.keys(this.state.siteInfo).length) {
            return (

                <Card >
                    <Card.Header >

                        <Row>

                            <Col className="site_name" md={{ offset: 1, span: 6 }}>
                                {this.state.siteName}
                            </Col>

                            <Col className="status" md={{ span: 5 }}>
                                <Button variant="info" >Total Links:{this.state.totalLinks}</Button>
                                <Button variant="success" >Valid Links:{this.state.greenLinks}</Button>
                                <Button variant="danger" >Critcal Errors: {this.state.redLinks}</Button>
                                <Button variant="warning" >Warnings: {this.state.yellowLinks}</Button>
                                <Button variant="secondary" >Internal Links: {this.state.greyLinks}</Button>
                            </Col>
                        </Row>

                    </Card.Header>

                    <Card.Body>
                        {
                            Object.keys(this.state.siteInfo).sort().map((brand, k) => {

                                return (

                                    <LinkAccordian className="LinkTable" brandName={brand} brandInfo={this.state.siteInfo[brand]} filter={this.state.filtered} totalSiteCounter={this.totalSiteCounter} key={k} />
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
