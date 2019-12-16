import React from "react";
import Image from "react-bootstrap/Image";
import OverlayTrigger from 'react-bootstrap/OverlayTrigger'
import Popover from 'react-bootstrap/Popover'
import "./linkTable.css"


function popover(text) {
    return (
        <Popover id="popover-basic">
            <Popover.Content>
                {text}
            </Popover.Content>
        </Popover>
    );
}

export default function InfoIcon({ title, text }) {
    return (
        <OverlayTrigger trigger="hover" placement="auto" overlay={popover(text)}>
            <Image className="infoIcon" width="15px" src={
                `${process.env.PUBLIC_URL}/icon1.jpg`
            }
            />
        </OverlayTrigger>
    );
}


