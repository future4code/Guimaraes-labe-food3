import { Button, TextField } from "@material-ui/core";
import React, { useContext, useEffect } from "react";
import useForm from "../../hooks/useForm";
import { InputsContainer } from "./styles";
import { login } from "../../Services/auth"
import { useNavigate} from 'react-router-dom'
import { goToAddress, goToFourFood } from "../../routes/coordinator";
import { ToastContainer, toast } from 'react-toastify';
import { message } from "../../utils/message";
import 'react-toastify/dist/ReactToastify.css';
import { GlobalStateContext } from "../../Context/GlobalStateContext";

const LoginForm = () => {

    const [form, onChange, clear] = useForm({ email: "", password: "" });
    const { states, setters } =  useContext(GlobalStateContext); 
    const navigate = useNavigate();

    const onSubmitForm = async (event) => {
        event.preventDefault();

        let data = {
            email: form.email,
            password: form.password
        }

        let retorno = await login(data);
    

        if (retorno.data.status === 200) {
            setters.setInfoUser(retorno.data);
            localStorage.setItem('token', retorno.data.token)
            window.alert("Seja Bem-Vindo")
            if(retorno.data.hasAddress === undefined)  {
                goToAddress(navigate)
            }else{
                goToFourFood(navigate);  
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
            >Entrar</Button>

            <ToastContainer />

        </form>
       
    </InputsContainer>)
}

export default LoginForm;