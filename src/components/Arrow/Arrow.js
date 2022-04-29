import React from "react";

import { ArrowBackIos } from "@material-ui/icons"
import { ArrowContainer } from "./styles"

const Arrow = ({ onClick }) => {
    return(<ArrowContainer className="arrow-container" onClick={onClick}>
        <ArrowBackIos 
            className="arrow-back-ios"
        />
    </ArrowContainer>
        )
}
export default Arrow;