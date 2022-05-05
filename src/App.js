import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { goToLogin } from './routes/coordinator';

import {
  InitialContainer 
} from './styles';

const App = () => {
  const navegate = useNavigate();

  useEffect(()=>{
    setTimeout(()=>{
      goToLogin(navegate)
    },3000)
  },[])

  return (<InitialContainer className='main-container'>
    <div className='main'>
      <h3>Future</h3>
      <span>Eats</span>
    </div>
    </InitialContainer>);
}

export default App;
