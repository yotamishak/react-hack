import React, { Component } from "react";

import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import GreenLight from "./GreenLight";
import RedLight from "./RedLight";
import Image from "react-bootstrap/Image"
import LinkTable from "./linkTable";
import "./siteCard.css"



class SiteCard extends Component {
    constructor(props) {
        super(props);

        this.state = {
            // Loaded:false,
            siteName: this.props.siteName,
            siteInfo: this.props.siteInfo.reduce((acc, obj) => {
                var key = obj['PalconBrandName'];
                if (!acc[key]) {
                    acc[key] = [];
                }
                acc[key].push(obj);
                return acc;
            }, {}),
            totalSite: 0,
            validSite: 0,
            siteBool: true

        };
        this.totalSiteCounter = this.totalSiteCounter.bind(this);

    }

    totalSiteCounter(v, t) {
        if (t > v) {
            this.setState((prev, props) => ({ siteBool: false }));
        }
        this.setState((prevState, props) => ({ validSite: prevState.validSite + v, totalSite: prevState.totalSite + t }));
    }


    render() {
        if (Object.keys(this.state.siteInfo).length) {
            return (

                <Card >
                    <Card.Header >

                        <Row>

                            <Col className="site_name" md={{ offset: 1, span: 8 }}>
                                {this.state.siteName}
                            </Col>

                            <Col className="tests">
                                {this.state.validSite}/{this.state.totalSite}
                            </Col>
                            <Col className="status">
                                {this.state.siteBool ? <GreenLight /> : <RedLight />}
                            </Col>
                        </Row>

                    </Card.Header>

                    <Card.Body>
                        {
                            Object.keys(this.state.siteInfo).map((brand, k) => {

                                return (

                                    <LinkTable className="LinkTable" brandName={brand} brandInfo={this.state.siteInfo[brand]} totalSiteCounter={this.totalSiteCounter} key={k} />
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
