import React from "react";

import {
    HeaderContainer
} from './styles'

const Header = () => {
    return(<HeaderContainer className='main-container'>
    <div className='main'>
     
     <div className="main-title">
        <h3>Future</h3>
     </div>
     
     <div className="main-subtitle">
        <span>Eats</span>
     </div>      

    </div>
    </HeaderContainer>)
}

export default Header;