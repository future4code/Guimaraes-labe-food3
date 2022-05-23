import React from "react";
import { useNavigate} from 'react-router-dom'
import { Button } from "@material-ui/core";
import Header from "../../components/Header/Header";
import useProtectedPage from "../../components/Hooks/useProtectPage";

import {
    LoginContainer,
    SignUpButtonContainer
} from './styles'
import { goToSignUp } from "../../routes/coordinator";
import LoginForm from "./LoginForm";

const Login = () => {
    useProtectedPage()
    const navigate = useNavigate();
    return(
        <LoginContainer className="login-container">
            <Header heigth={'3em'} />            
            <LoginForm />
            <SignUpButtonContainer>
                <Button
                    onClick={() =>  goToSignUp(navigate) }
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