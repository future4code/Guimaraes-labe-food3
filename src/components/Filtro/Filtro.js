import React, { useEffect, useState } from "react";
import { getRestaurant } from '../../Services/services';

import { FiltroContainer } from "./styles";

const Filtro = () => {
    const [search, setSearch] = useState([
        {id: 1, categoria: "Burger"}, 
        {id: 2, categoria: "Asiática"}, 
        {id: 3, categoria: "Massas"},
        {id: 4, categoria: "Saudável"},
        {id: 5, categoria: "Brasileira"}
    ]);

    useEffect(()=>{
        category();
    },[])

    const category = async () =>{
        const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6Ijh5UUlkMXZkOGJYUm5vVThaMmpVIiwibmFtZSI6IkthcmVuIiwiZW1haWwiOiJrYXJlbjFAZ21haWwuY29tIiwiY3BmIjoiMjIyMjIyMjIyMjEiLCJoYXNBZGRyZXNzIjp0cnVlLCJhZGRyZXNzIjoiQXZlbmlkYSBub3ZhIGNhbnRhcmVpcmEsIDYwLCBBcGFydGFtZW50byAyIC0gVHV0dXJ1dmkiLCJpYXQiOjE2NTE4NzU2NTl9.FXduGWICA0t7tyHLXsz_EyAQ6zzaFH2P3GnkgEID5T0';
        let data = await getRestaurant(token);
/*         console.log(data)  */
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