import { Button, TextField } from "@material-ui/core";
import React, { useState } from "react";
import useForm from "../../hooks/useForm";
import { InputsContainer } from "./styles";

const AddressForm = () => {
    const [form, onChange, clear] = useForm({email: "", password: "" });

    const onSubmitForm = (event) =>{
        console.log("event", event)
        event.preventDefault();
    }

    const [text,setText] = useState('');

    return(<InputsContainer>
        <form onSubmit={onSubmitForm}>
            <h3>Meu endereço</h3>
            
            <TextField
                type="text"
                name="logradouro"
                value={text}
                // onChange={(e) => setText(e.target.value)}
                label="Logradouro"
                variant="outlined"
                fullWidth
                margin="normal"
                placeholder="Rua / Av."
                required
                InputLabelProps={{ shrink: true}}

            />
            <TextField
                type="text"
                name="numero"
                value={text}
                // onChange={(e) => setText(e.target.value)}
                label="Número"
                variant="outlined"
                fullWidth
                margin="normal"
                placeholder="Número"
                required
                InputLabelProps={{ shrink: true}}
            />
            <TextField
                type="text"
                name="complemento"
                value={text}
                // onChange={(e) => setText(e.target.value)}
                label="Complemento"
                variant="outlined"
                fullWidth
                margin="normal"
                placeholder="Apto. / Bloco"
                InputLabelProps={{ shrink: true}}
            />
            <TextField
                type="text"
                name="bairro"
                value={text}
                // onChange={(e) => setText(e.target.value)}
                label="Bairro"
                variant="outlined"
                fullWidth
                margin="normal"
                placeholder="Bairro"
                required
                InputLabelProps={{ shrink: true}}
            />
            <TextField
                type="text"
                name="cidade"
                value={text}
                // onChange={(e) => setText(e.target.value)}
                label="Cidade"
                variant="outlined"
                fullWidth
                margin="normal"
                placeholder="Cidade"
                required
                InputLabelProps={{ shrink: true}}
            />
            <TextField
                type="text"
                name="estado"
                value={text}
                // onChange={(e) => setText(e.target.value)}
                label="Estado"
                variant="outlined"
                fullWidth
                margin="normal"
                placeholder="Estado"
                required
                InputLabelProps={{ shrink: true}}
            />

            
                <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    margin="normal"
                >Salvar</Button>
        </form>
    </InputsContainer>)
}

export default AddressForm;