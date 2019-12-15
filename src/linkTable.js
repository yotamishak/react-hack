import React, { Component } from "react";
import Accordion from "react-bootstrap/Accordion";
import Card from "react-bootstrap/Card";
import Table from "react-bootstrap/Table";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import LinkRow from "./linkRow";
import LazyLoad from "react-lazyload";
import "./linkTable.css";
import GreenLight from "./GreenLight";
import RedLight from "./RedLight";

class LinkTable extends Component {
  constructor(props) {
    super(props);

    this.state = {
      brand: this.props.brandName,
      brandInfo: this.props.brandInfo,
      validLinks: 0,
      totalLinks: 0,
      validBool: true,
      brandPic: this.props.brandInfo[0].BrandPicUrl,
      hasData: true
    };
    this.validLinkCounter = this.validLinkCounter.bind(this);
    this.noData = this.noData.bind(this);
  }
  noData() {
    this.setState({ hasData: false })
  }

  validLinkCounter(v) {

    if (v) {
      this.setState((prevState, props) => ({ validLinks: prevState.validLinks + 1, totalLinks: prevState.totalLinks + 1 }));
      this.props.totalSiteCounter(1, 1);

    }
    else {
      this.setState((prevState, props) => ({ totalLinks: prevState.totalLinks + 1, validBool: false }));
      this.props.totalSiteCounter(0, 1);

    }
  }

  render() {
    return (

      <Accordion >
        <Card>
          <Card.Header>
            <Accordion.Toggle as={Card.Header} eventKey="0">
              <Row>
                <Col>
                  <LazyLoad offset={100} height={70}>
                    <Image src={this.state.brandPic} width="100px" />
                  </LazyLoad>
                </Col>
                <Col className="brandName" md={{ span: 7 }}>
                  {this.state.brandInfo[0].PalconBrandName}
                </Col>

                <Col className="tests">
                  {this.state.validLinks}/{this.state.totalLinks}
                </Col>
                <Col className="status">
                  {this.state.validBool ? <GreenLight /> : <RedLight />}
                </Col>
              </Row>
            </Accordion.Toggle>
          </Card.Header>
          <Accordion.Collapse eventKey="0">
            <Card.Body>
              <Table className="LinkTable" striped bordered size="sm">

                {this.state.brandInfo.map((linkInfo, index) => {
                  return (
                    <LinkRow brand={this.state.brand} linkInfo={linkInfo} index={index} key={index} noData={this.noData.bind(this)} linkValidator={this.validLinkCounter.bind(this)} />
                  );
                })}


              </Table>
            </Card.Body>
          </Accordion.Collapse>
        </Card>
      </Accordion>
    );
  }
}

export default LinkTable;
