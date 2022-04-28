import React, { useState } from "react";


import { Button, TextField } from "@material-ui/core";
import Header from "../../components/Header/Header";

import {
    LoginContainer,
    InputsContainer,
    SignUpButtonContainer
} from './styles'
import { useNavigate } from "react-router-dom";
import useForm from "../../hooks/useForm";

const SignUp = () => {

    const navegate = useNavigate();
    const [form, onChange, clear] = useForm({
        name: "", 
        email: "", 
        cpf: "",
        password: "",
        confirmarSenha: ""
    });

    const [text,setText] = useState('');

    const onSubmitForm = (event) =>{
        console.log("event", event)
        event.preventDefault();
    }

    return(
        <LoginContainer className="login-container">

            <Header />
            <InputsContainer>
                <form onSubmit={onSubmitForm}>
                    <h3>Cadastrar</h3>

                    <TextField
                        type="text"
                        name="name"
                        value={text}
                        onChange={(e) => setText(e.target.value)}
                        label="Nome*"
                        variant="outlined"
                        fullWidth
                        margin="normal"
                        placeholder="Nome e sobrenome"
                    />
                    <TextField
                        name="email"
                        value={form.email}
                        onChange={onChange}
                        label="E-mail*"
                        variant="outlined"
                        fullWidth
                        margin="normal"
                        placeholder="email@email.com"
                    />
                    <TextField
                        name="cpf"
                        value={form.cpf}
                        onChange={onChange}
                        label="CPF*"
                        variant="outlined"
                        fullWidth
                        margin="normal"
                        placeholder="000.000.000-00"
                    />

                     <TextField
                        name="password"
                        value={form.password}
                        onChange={onChange}
                        label="Senha*"
                        variant="outlined"
                        fullWidth
                        margin="normal"
                        placeholder="Mínimo 6 caracteres"
                    />

                    <TextField
                        name="confirmarSenha"
                        value={form.confirmarSenha}
                        onChange={onChange}
                        label="Confirmar*"
                        variant="outlined"
                        fullWidth
                        margin="normal"
                        placeholder="Confirme a senha anterior"
                    />


                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        margin="normal"
                    >Criar</Button>
                </form>
            </InputsContainer>
        </LoginContainer>
    )
}

export default SignUp;