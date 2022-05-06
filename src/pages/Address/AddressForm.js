import { Button, TextField } from "@material-ui/core";
import React, { useContext, useEffect, useState } from "react";
import { GlobalStateContext } from "../../Context/GlobalStateContext";
import useForm from "../../hooks/useForm";
import { InputsContainer } from "./styles";
import { toast, ToastContainer } from 'react-toastify'
import { message } from "../../utils/message";
import { address } from  "../../Services/services"

const AddressForm = () => {
    const [form, onChange, clear] = useForm({
        logradouro: "",
        numero: "",
        complemento: "",
        bairro: "",
        cidade: "",
        estado: ""
    });

    const { states, setters } = useContext(GlobalStateContext);
    const [countShowMessage, setCountShowMessage] = useState(0); 

    const onSubmitForm = (event) =>{
        event.preventDefault();

        const data = {
            street: form.logradouro,
            number: form.numero,
            neighbourhood: form.bairro,
            city: form.cidade,
            state: form.estado,
            complement: form.complemento
        }

    }

    const [text,setText] = useState('');

    const messageUser = () => {
        toast.success(message[2]);
        setCountShowMessage(0)
    }

    useEffect(()=>{
        console.log("states.hasAddress", states.hasAddress)
        if(!states.hasAddress){
            setCountShowMessage(1)
        }
    },[])

    return(<InputsContainer>

            {countShowMessage === 1?  messageUser() : '' }
            
            <ToastContainer />

            <form onSubmit={onSubmitForm}>
            <h3>Meu endereço</h3>
            <TextField
                type="text"
                name="logradouro"
                value={form.logradouro}
                onChange={onChange}
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
                value={form.numero}
                onChange={onChange}
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
                value={form.complemento}
                onChange={onChange}
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
                value={form.bairro}
                onChange={onChange}
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
                value={form.cidade}
                onChange={onChange}
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
                value={form.estado}
                onChange={onChange}
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