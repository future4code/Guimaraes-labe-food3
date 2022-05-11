import React, { useContext, useEffect, useState } from 'react';
import { Header, Profiles, ProfileH1, Endereco, EnderecoH1, EnderecoH1C, Edit, EditAdress } from './ProfileStyles';
import { EditIco } from '../../components/Edit/Edit';
import { Historico, HistoricoH1, ContainerPedidos, ContainerPedidosH2, Data, ContainerPedidosH3, ProfileContainer, } from './ProfileStyles';
import Footer from '../../components/Footer/Footer';
import { goTOEditProfile, goToAddress } from '../../routes/coordinator';
import { useNavigate } from 'react-router-dom';
import { GlobalStateContext } from '../../Context/GlobalStateContext';
import axios from "axios";
import { BASE_URL } from "../../constant/urls";
import CircularProgress from '@material-ui/core/CircularProgress'
import { useRequestOrders } from '../../Services/services';


const Profile = () => {
    // const { states, setters } = useContext(GlobalStateContext);
    const infoUser = JSON.parse(localStorage.getItem('infoUser'))

    const [orders, loading, error] = useRequestOrders(`${BASE_URL}/orders/history`, []);

    const navigate = useNavigate();

    const ordersList = () => {
        {
            orders && orders.map(() => {
                return (<>
                    <ContainerPedidosH2>Local pedido</ContainerPedidosH2>
                    <Data> 01 Janeiro 2020</Data>
                    <ContainerPedidosH3>Subtotal: R$67,00</ContainerPedidosH3>
                </>
                )
            })
        }
    }

    return (
        infoUser &&
        <ProfileContainer>
            <Header>
                Meu perfil
            </Header>
            <Profiles>
                <ProfileH1>{infoUser.data.name}</ProfileH1>
                <ProfileH1>{infoUser.data.email}</ProfileH1>
                <ProfileH1>{infoUser.data.cpf}</ProfileH1>
                <EditAdress onClick={() => goTOEditProfile(navigate)}> <EditIco /></EditAdress>
            </Profiles>
            <Endereco>
                <EnderecoH1C>Endereço cadastrado</EnderecoH1C>
                <EnderecoH1C>{infoUser.data.address}</EnderecoH1C>
                <EditAdress onClick={() => goToAddress(navigate)}> <EditIco /></EditAdress>
            </Endereco>
            <Historico>
                <HistoricoH1>Histórico de pedidos</HistoricoH1>
            </Historico>
            <ContainerPedidos>
                <>
                    {loading && <CircularProgress />}
                    {!loading && orders && orders.length > 0 && ordersList}
                    {!loading && orders && orders.length === 0 && ( 
                        <h2> Você não tem nenhum pedido</h2>
                    )}
                </>
            </ContainerPedidos>
            <footer>
                <Footer />
            </footer>
        </ProfileContainer>
    );
}
export default Profile;
