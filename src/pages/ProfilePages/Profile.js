import React from 'react';
import { Header, Profiles, ProfileH1, Endereco, EnderecoH1, EnderecoH1C, Edit, EditAdress } from './ProfileStyles';
import { EditIco } from '../../components/Edit/Edit';
import { Historico, HistoricoH1, ContainerPedidos, ContainerPedidosH2, Data, ContainerPedidosH3, ProfileContainer,} from './ProfileStyles';
import Footer from '../../components/Footer/Footer';
import { goTOEditProfile, goToAddress } from '../../routes/coordinator';
import { useNavigate } from 'react-router-dom';

const Profile = () => {
         const navegate = useNavigate();
        return (
        <ProfileContainer>
            <Header>
                Meu perfil
            </Header>   
            <Profiles>
                <ProfileH1>Meu nome</ProfileH1>
                <ProfileH1>meuemail@gmail.com</ProfileH1>
                <ProfileH1>431688898-40</ProfileH1>
                <Edit onClick={() => goTOEditProfile (navegate)}> <EditIco /></Edit>
            </Profiles>
            <Endereco>
                <EnderecoH1C>Endereço cadastrado</EnderecoH1C>
                <EnderecoH1>Rua x, nº x, bairro x, cidade x, estado x</EnderecoH1>
                <EditAdress onClick={() => goToAddress (navegate)}> <EditIco /></EditAdress>
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