import { Button, TextField } from "@material-ui/core";
import React from "react";
import useForm from "../../hooks/useForm";
import { InputsContainer } from "./styles";

const LoginForm = () => {
    
    const [form, onChange, clear] = useForm({email: "", password: "" });

    const onSubmitForm = (event) =>{
        console.log("event", event)
        event.preventDefault();
    }


    return(<InputsContainer>
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