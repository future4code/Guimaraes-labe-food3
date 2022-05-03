import React, { useState } from "react";


import { FiltroContainer } from "./styles";

const Filtro = () => {
    const [searc, setSearch] = useState([
        {id: 1, categoria: "Burger"}, 
        {id: 2, categoria: "Asiática"}, 
        {id: 3, categoria: "Massas"},
        {id: 4, categoria: "Saudável"},
        {id: 5, categoria: "Brasileira"}
    ]);

    return(<FiltroContainer className="filtro">
        {searc.map((s,index)=>{
            return(<ul>
                <li key={s.id}>{s.categoria}</li>
            </ul>)
        })}
    </FiltroContainer>)
}

export default Filtro;