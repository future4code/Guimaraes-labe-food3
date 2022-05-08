import React, { useContext, useEffect }  from 'react';
import { Header, Profiles, ProfileH1, Endereco, EnderecoH1, EnderecoH1C, Edit, EditAdress } from './ProfileStyles';
import { EditIco } from '../../components/Edit/Edit';
import { Historico, HistoricoH1, ContainerPedidos, ContainerPedidosH2, Data, ContainerPedidosH3, ProfileContainer,} from './ProfileStyles';
import Footer from '../../components/Footer/Footer';
import { goTOEditProfile, goToAddress } from '../../routes/coordinator';
import { useNavigate } from 'react-router-dom';
import { GlobalStateContext } from '../../Context/GlobalStateContext';

const Profile = () => {
    const { states, setters } =  useContext(GlobalStateContext);
    
    const navigate = useNavigate();
console.log("dados usuario", states)
        return (
            states.infoUser && 
        <ProfileContainer>
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
                <EnderecoH1C>{states.infoUser.data.address}</EnderecoH1C>
                <EditAdress onClick={() => goToAddress (navigate)}> <EditIco /></EditAdress>
            </Endereco>
            <Historico>
                <HistoricoH1>Histórico de pedidos</HistoricoH1>
            </Historico>
                <ContainerPedidos>
                    
                        <ContainerPedidosH2>Local pedido</ContainerPedidosH2>
                        <Data> 01 Janeiro 2020</Data>
                        <ContainerPedidosH3>Subtotal: R$67,00</ContainerPedidosH3>
                    
                </ContainerPedidos>
                <footer>
            <Footer/>
            </footer>
        </ProfileContainer>
        );
    }
export default Profile;
