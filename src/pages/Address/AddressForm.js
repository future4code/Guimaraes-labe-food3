import { Button, TextField } from "@material-ui/core";
import React, { useContext, useEffect, useState } from "react";
import { GlobalStateContext } from "../../Context/GlobalStateContext";
import useForm from "../../hooks/useForm";
import { InputsContainer } from "./styles";
import { toast, ToastContainer } from 'react-toastify'
import { message } from "../../utils/message";
import { address } from  "../../Services/services"
import { goToFourFood} from "../../routes/coordinator";
import { useNavigate} from 'react-router-dom'
import axios from "axios";
import { BASE_URL } from "../../constant/urls";


const AddressForm = () => {
 
    const navigate = useNavigate();

    const { states, setters } = useContext(GlobalStateContext);
    const [countShowMessage, setCountShowMessage] = useState(0); 

    const token = states.infoUser.token 
    const headers = { headers: { auth: token,
        'Content-Type': 'application/json' 
    }};


    const [form, onChange, clear] = useForm({
        logradouro: "",
        numero: "",
        complemento: "",
        bairro: "",
        cidade: "",
        estado: ""
    });

  
    console.log("token recebido", token)

    const onSubmitForm = async (event) =>{
        event.preventDefault();

        const body = {
            street: form.logradouro,
            number: form.numero,
            neighbourhood: form.bairro,
            city: form.cidade,
            state: form.estado,
            complement: form.complemento
        }

        try{
            const response = await axios.put(`${BASE_URL}/address`, body, headers)
            console.log("resposta endereco Api", response)
            localStorage.setItem('token', response.data.token)
            setters.setTokenUser( response.data.token)
            window.alert("Cadastro Efetuado com Sucesso")
            goToFourFood(navigate)
        }catch(error){
            console.log("resposta endereco Api", error) 
        
        }

        clear({
            street: '',
            number: '',
            neighbourhood: '',
            city: '',
            state: '',
            complement:''
        })
    };

console.log("endereco",states.infoUser.token )
    
    const messageUser = () => {
        toast.success(message[2]);
        setCountShowMessage(0)
    }

 /*    useEffect(()=>{
        console.log("states.hasAddress", states.hasAddress)
        if(!states.hasAddress){
            setCountShowMessage(1)
        }
    },[]) */

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