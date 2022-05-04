import { Button, TextField } from "@material-ui/core";
import React, { useState } from "react";
import useForm from "../../hooks/useForm";
import { InputsContainer } from "./styles";
import { signup } from "../../Services/auth"
import { useNavigate} from 'react-router-dom'

const SignUpForm = () => {
    const navegate = useNavigate();

    const [form, onChange, clear] = useForm({
        name: "", 
        email: "", 
        cpf: "",
        password: "",
        confirmarSenha: ""
    });

    const [text,setText] = useState('');

    const onSubmitForm = async (event) =>{
        event.preventDefault();

        let user = {
            name: form.name,
            email: form.email,
            cpf: form.cpf,
            password: form.password
        }

        let retorno = await signup(user);

        if (retorno.data.status === 200) {
            localStorage.setItem('token', retorno.data.token)
            navegate('/futureeats');
        }

    }



    return(<InputsContainer>
        <form onSubmit={onSubmitForm}>
            <h3>Cadastrar</h3>

            <TextField
                type="text"
                name="name"
                value={form.name}
                onChange={onChange}
                label="Nome"
                variant="outlined"
                fullWidth
                margin="normal"
                placeholder="Nome e sobrenome"
                required
                InputLabelProps={{ shrink: true}}
            />

            <TextField
                name="email"
                value={form.email}
                onChange={onChange}
                label="E-mail"
                variant="outlined"
                fullWidth
                margin="normal"
                placeholder="email@email.com"
                required
                InputLabelProps={{ shrink: true}}
            />
            <TextField
                name="cpf"
                value={form.cpf}
                onChange={onChange}
                label="CPF"
                variant="outlined"
                fullWidth
                margin="normal"
                placeholder="000.000.000-00"
                required
                InputLabelProps={{ shrink: true}}
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
                required
                InputLabelProps={{ shrink: true}}
            />

            <TextField
                name="confirmarSenha"
                value={form.confirmarSenha}
                onChange={onChange}
                label="Confirmar"
                variant="outlined"
                fullWidth
                margin="normal"
                placeholder="Confirme a senha anterior"
                required
                InputLabelProps={{ shrink: true}}
            />


            <Button
                type="submit"
                fullWidth
                variant="contained"
                margin="normal"
                style={{ textTransform: 'none' }}
            >
                Criar
            </Button>
        </form>
    </InputsContainer>)
}

export default SignUpForm;