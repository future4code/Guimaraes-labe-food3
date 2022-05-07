import React, { useContext, useEffect }  from 'react';
import { Header, Profiles, ProfileH1, Endereco, EnderecoH1, EnderecoH1C, Edit, EditAdress } from './ProfileStyles';
import { EditIco } from '../../components/Edit/Edit'
import { Historico, HistoricoH1, ContainerPedidos, ContainerPedidosH2, Data, ContainerPedidosH3 } from './ProfileStyles';
import Footer from '../../components/Footer/Footer';
import { GlobalStateContext } from '../../Context/GlobalStateContext';



const Profile = () => {

    const { states, setters } =  useContext(GlobalStateContext);

        return (
            states.infoUser && 
        <div>
            <Header>
                Meu perfil
            </Header>   
            <Profiles>
                <ProfileH1>{states.infoUser.data.name}</ProfileH1>
                <ProfileH1>{states.infoUser.data.email}</ProfileH1>
                <ProfileH1>{states.infoUser.data.cpf}</ProfileH1>
                <Edit> <EditIco /></Edit>
            </Profiles>
            <Endereco>
                <EnderecoH1C>Endereço cadastrado</EnderecoH1C>
                <EnderecoH1>{states.infoUser.data.address}</EnderecoH1>
                <EditAdress> <EditIco /></EditAdress>
            </Endereco>
            <Historico>
                <HistoricoH1>Histórico de pedidos</HistoricoH1>
            </Historico>
                <ContainerPedidos>
                    <div>
                        <ContainerPedidosH2>Local pedido</ContainerPedidosH2>
                        <Data> 01 Janeiro 2020</Data>
                        <ContainerPedidosH3>Subtotal: R$67,00</ContainerPedidosH3>
                    </div>
                </ContainerPedidos>
            <Footer/>
        </div>
        );
    }
export default Profile