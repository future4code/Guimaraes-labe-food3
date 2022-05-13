import React from "react";

import { ArrowBackIos } from "@material-ui/icons"
import { ArrowContainer } from "./styles"

const Arrow = ({ onClick, showTitle, title }) => {
    return(<ArrowContainer className="arrow-container" onClick={onClick}>
        <ArrowBackIos 
            className="arrow-back-ios"
        />
        {showTitle? <span>{title}</span> : '' }
    </ArrowContainer>
        )
}

export default Arrow;