import React from "react";


import { Button, TextField } from "@material-ui/core";
import Header from "../../components/Header/Header";

import {
    LoginContainer,
    InputsContainer,
    SignUpButtonContainer
} from './styles'

const SignUp = () => {

    // const [form, onChange, clear] = useForm({email: "", password: "" });

    return(
        <LoginContainer className="login-container">
            <Header />
            <InputsContainer>
                <form>

                    <h3>Cadastro</h3>

                    <TextField
                        name="email"
                        // value={form.email}
                        // onChange={onChange}
                        label="E-mail"
                        variant="outlined"
                        fullWidth
                        margin="normal"
                        placeholder="email@email.com"
                    />

                     <TextField
                        name="password"
                        // value={form.password}
                        // onChange={onChange}
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
                    type="submit"
                    fullWidth
                    variant="text"
                    margin="normal"
                    style={{ textTransform: 'none' }}
                >Não possui cadastro? Clique aqui.</Button>
            </SignUpButtonContainer>

        </LoginContainer>
    )
}

export default SignUp;