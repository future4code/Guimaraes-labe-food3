import React from "react";
import { useNavigate } from  'react-router-dom'
import { Button, TextField } from "@material-ui/core";
import Header from "../../components/Header/Header";
import useForm from "../../hooks/useForm";

import {
    LoginContainer,
    InputsContainer,
    SignUpButtonContainer
} from './styles'
import { goToSignUp } from "../../routes/coordinator";

const Login = () => {
    const navegate = useNavigate();
    const [form, onChange, clear] = useForm({email: "", password: "" });

    const onSubmitForm = (event) =>{
        console.log("event", event)
        event.preventDefault();
    }

    return(
        <LoginContainer className="login-container">
            <Header />
            <InputsContainer>
                <form onSubmit={onSubmitForm}>
                    <h3>Entrar</h3>

                    <TextField
                        name="email"
                        value={form.email}
                        onChange={onChange}
                        label="E-mail"
                        variant="outlined"
                        fullWidth
                        margin="normal"
                        placeholder="email@email.com"
                    />

                     <TextField
                        name="password"
                        value={form.password}
                        onChange={onChange}
                        label="Senha"
                        variant="outlined"
                        fullWidth
                        margin="normal"
                        placeholder="Mínimo 6 caracteres"
                    />

                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        margin="normal"
                    >Entrar</Button>
                </form>
            </InputsContainer>

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