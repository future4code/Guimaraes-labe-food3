import React, { useEffect, useState } from "react";

import { FiltroContainer } from "./styles";

const Filtro = () => {
    const [search, setSearch] = useState([
        {id: 1, categoria: "Burger"}, 
        {id: 2, categoria: "Asiática"}, 
        {id: 3, categoria: "Massas"},
        {id: 4, categoria: "Saudável"},
        {id: 5, categoria: "Brasileira"},
        {id: 1, categoria: "Burger"}, 
        {id: 2, categoria: "Asiática"}, 
        {id: 3, categoria: "Massas"},
        {id: 4, categoria: "Saudável"},
        {id: 5, categoria: "Brasileira"}
    ]);

  /*   useEffect(()=>{
        category();
    },[])
 */
    const category = async () =>{
        const infoUser = JSON.parse(localStorage.getItem('infoUser'));
        const token = infoUser.token;
        console.log("Token", infoUser);
      /*   let data = await getRestaurant(token); */
    }

    return(<FiltroContainer className="filtro">
        {search.map((s,index)=>{
            return(<ul>
                <li key={s.id}>{s.categoria}</li>
            </ul>)
        })}
    </FiltroContainer>)
}

export default Filtro;