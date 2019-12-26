import React, { Component } from "react";
import Accordion from "react-bootstrap/Accordion";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import Badge from "react-bootstrap/Badge";
import NewLinkRow from "./newLinkRow";
import LazyLoad from "react-lazyload";
import "./linkTable.css";


class LinkAccordian extends Component {
    constructor(props) {
        super(props);

        this.state = {
            brand: props.brandName,
            brandInfo: props.brandInfo,
            greenLinks: 0,
            yellowLinks: 0,
            redLinks: 0,
            greyLinks: 0,
            totalLinks: this.props.brandInfo.length,
            brandPic: this.props.brandInfo[0].BrandPicUrl,
        };

        this.validLinkCounter = this.validLinkCounter.bind(this);
    }

    static getDerivedStateFromProps(props, state) {

        if (props.brandInfo !== state.brandInfo) {
            if (props.brandName === state.brand && props.brandInfo.length === state.totalLinks) {
                return {
                    brand: props.brandName,
                    brandInfo: props.brandInfo,
                    brandPic: props.brandInfo[0].BrandPicUrl,
                }
            }
            else {
                return {
                    brand: props.brandName,
                    brandInfo: props.brandInfo,
                    greenLinks: 0,
                    yellowLinks: 0,
                    redLinks: 0,
                    greyLinks: 0,
                    totalLinks: props.brandInfo.length,
                    brandPic: props.brandInfo[0].BrandPicUrl,
                }
            }

        }
    }



    validLinkCounter(v) {

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

        return (

            <Accordion  >
                <Card>
                    <Card.Title>
                        <Accordion.Toggle as={Card.Title} eventKey="0">
                            <Row className="cardRow">
                                <Col className="cardCol" md={{ offset: 1 }}>
                                    <LazyLoad offset={500} height={70}>
                                        <Image src={this.state.brandPic} width="100px" />
                                    </LazyLoad>
                                </Col>
                                <Col className="brandName" md={{ span: 6 }}>
                                    {this.state.brandInfo[0].PalconBrandName}
                                </Col>

                                <Col className="tests" md={{ span: 3 }} >
                                    {this.state.greenLinks ? <Badge pill variant="success">Valid Links: {this.state.greenLinks}</Badge> : <></>}
                                    {this.state.redLinks ? <Badge pill variant="danger">Critcal Errors: {this.state.redLinks}</Badge> : <></>}
                                    {this.state.yellowLinks ? <Badge pill variant="warning">Warnings: {this.state.yellowLinks}</Badge> : <></>}
                                    {this.state.greyLinks ? <Badge pill variant="secondary">Internal Links: {this.state.greyLinks}</Badge> : <></>}

                                </Col>
                            </Row>
                        </Accordion.Toggle>
                    </Card.Title>
                    <Accordion.Collapse eventKey="0">
                        <Card.Body>


                            {this.state.brandInfo.map((linkInfo, index) => {
                                return (
                                    <>
                                        <ListGroup variant="flush">
                                            <NewLinkRow brand={this.state.brand} linkInfo={linkInfo} validLinkCounter={this.validLinkCounter.bind(this)} index={index} key={index} />
                                        </ListGroup></>
                                );
                            })}



                        </Card.Body>
                    </Accordion.Collapse>
                </Card>
            </Accordion>
        );
    }
}

export default LinkAccordian;
