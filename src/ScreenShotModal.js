import React from "react";
import Modal from "react-bootstrap/Modal";
import Image from "react-bootstrap/Image";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card"
import "./newLinkRow.css"

import { useState } from "react";

export default function ScreenShot({ src, title, description }) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Card className="screenShot" style={{ width: '120px' }}>
        <Card.Header className="screenShotHeader">
          Screenshot</Card.Header>
        <Card.Img className="screenShotThumbnail" src={src} onClick={handleShow} />
      </Card>
      <Modal show={show} onHide={handleClose} centered size="lg">
        <Modal.Header closeButton>
          <Modal.Title>{title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Image src={src} width="100%" />
          <h3>Meta Description</h3>
          {description}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
