import { Button, TextField } from "@material-ui/core";
import React, { useContext, useEffect, useState} from "react";
import useForm from "../../hooks/useForm";
import { InputsContainer } from "./styles";
import { login } from "../../Services/auth"
import { useNavigate} from 'react-router-dom'
import { goToAddress, goToFourFood } from "../../routes/coordinator";
import { ToastContainer, toast } from 'react-toastify';
import { message } from "../../utils/message";
import 'react-toastify/dist/ReactToastify.css';
import { GlobalStateContext } from "../../Context/GlobalState/GlobalStateContext";
import CircularProgress from '@material-ui/core/CircularProgress'

const LoginForm = () => {

    const [form, onChange, clear] = useForm({ email: "", password: "" });
    const { states, setters } =  useContext(GlobalStateContext); 
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState();
    const navigate = useNavigate();

    const onSubmitForm = (event) => {
        setLoading(true)
        event.preventDefault();

        let payload = {
            email: form.email,
            password: form.password
        }

        auth(payload);
      
    }

    const auth = async (payload) => {
        let retorno = await login(payload);

        if (retorno.data.status === 200) {

            localStorage.setItem('token', retorno.data.token)

                window.alert("Seja Bem-Vindo")
                 
            setLoading(false)
            goToFourFood(navigate);
            if(retorno.data.data.hasAddress === false)  {
                goToAddress(navigate)
            }
        }
        
        if(retorno.data.status === 401){
            toast.error(retorno.data.error);
        }

        if(retorno.data.status === 404){
            toast.error(retorno.data.error);
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
            >
                 {loading ? <CircularProgress color={'inherit'} size={24}/>: <>Entrar</>}

            </Button>

            <ToastContainer />

        </form>
       
    </InputsContainer>)
}

export default LoginForm;