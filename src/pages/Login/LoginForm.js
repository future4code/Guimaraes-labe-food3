import { Button, TextField } from "@material-ui/core";
import React from "react";
import useForm from "../../hooks/useForm";
import { InputsContainer } from "./styles";
import { login } from "../../Services/auth"
import { useNavigate} from 'react-router-dom'
import { goToFutureEats } from "../../routes/coordinator";

const LoginForm = () => {

    const [form, onChange, clear] = useForm({ email: "", password: "" });
    const navegate = useNavigate();

    const onSubmitForm = async (event) => {
        event.preventDefault();

        let data = {
            email: form.email,
            password: form.password
        }

        let retorno = await login(data);

        if (retorno.data.status === 200) {
            localStorage.setItem('token', retorno.data.token)
            goToFutureEats(navegate);
        }
    }

    return (<InputsContainer>
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
                required
                InputLabelProps={{ shrink: true }}
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
                InputLabelProps={{ shrink: true }}
                type="password"
            />

            <Button
                type="submit"
                fullWidth
                variant="contained"
                margin="normal"
            >Entrar</Button>
        </form>
    </InputsContainer>)
}

export default LoginForm;