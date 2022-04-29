import React from "react";
import { useNavigate } from  'react-router-dom'
import { Button, TextField } from "@material-ui/core";
import Header from "../../components/Header/Header";

import {
    LoginContainer,
    SignUpButtonContainer
} from './styles'
import { goToSignUp } from "../../routes/coordinator";
import LoginForm from "./LoginForm";
import Arrow from "../../components/Arrow/Arrow";

const Login = () => {
    const navegate = useNavigate();

    return(
        <LoginContainer className="login-container">
            <Header heigth={'3em'} />            
            <LoginForm />
            <SignUpButtonContainer>
                <Button
                    onClick={() =>  goToSignUp(navegate) }
                    type="submit"
                    fullWidth
                    variant="text"
                    margin="normal"
                    style={{ textTransform: 'none' }}                    
                >
                    Não possui cadastro? Clique aqui.
                </Button>
            </SignUpButtonContainer>
        </LoginContainer>
    )
}

export default Login;