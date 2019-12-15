import React from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Tooltip from "react-bootstrap/Tooltip";
import Image from "react-bootstrap/Image";
import OverlayTrigger from "react-bootstrap/OverlayTrigger"

import "./linkTable.css"
import { useState } from "react";

export default function DealValue({ title, description }) {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    function renderTooltip(props) {
        return <Tooltip {...props}>Deal Value</Tooltip>
    }

    return (
        <div>
            <OverlayTrigger trigger="hover" placement="auto" overlay={renderTooltip}>
                <Image className="revShare" width="20px" src={
                    `${process.env.PUBLIC_URL}/dollar_icon.jpg`} onClick={handleShow}
                />
            </OverlayTrigger>

            <Modal show={show} onHide={handleClose} centered size="lg">
                <Modal.Header closeButton>
                    <Modal.Title>Deal Value</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    {description}
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
          </Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
}


