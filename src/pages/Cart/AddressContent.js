import {TextField } from "@material-ui/core";
import React from "react";
import { AddressContentContentContainer } from "./styles";



const AddressContent = () => {

    return (<AddressContentContentContainer>
            <TextField
                type="text"
                name="Endereco de Entrega"
                value=""
                // onChange={(e) => setText(e.target.value)}
                label="Endereço de Entrega"
                variant="outlined"
                fullWidth
                margin="normal"
                placeholder="Rua / Av."
                required
                InputLabelProps={{ shrink: true}}
            />
    </AddressContentContentContainer>)
}

export default AddressContent