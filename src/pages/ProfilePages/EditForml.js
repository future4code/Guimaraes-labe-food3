import React from 'react';
import Arrow from '../components/Arrow/Arrow';
import { TextField, Button } from '@mui/material';
import useForm from '../hooks/useForm';
import { InputsContainer } from "./styles";

const EditPerfil = () => {
      const [form, onChange,] = useForm({email: "", nome: "", cpf: ""});

    const onSubmitForm = (event) =>{
        console.log("event", event)
        event.preventDefault();
    }


    return(<InputsContainer>
        <form onSubmit={onSubmitForm}>
            <h3>Editar</h3>

            <TextField
                name="nome"
                value={form.name}
                onChange={onChange}
                label="Nome"
                variant="outlined"
                fullWidth
                placeholder='Nome'
                margin="normal"
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

            <Button
                type="submit"
                fullWidth
                variant="contained"
                margin="normal"
            >Enviar</Button>
        </form>
    </InputsContainer>)
}
export default EditPerfil;