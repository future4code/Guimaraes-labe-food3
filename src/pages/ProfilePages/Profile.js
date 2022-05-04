import React from 'react';
import { Header, Profiles, ProfileH1, Endereco, EnderecoH1, EnderecoH1C, Edit, EditAdress } from './ProfileStyles';
import { EditIco } from '../components/Edit/Edit';
import { Historico, HistoricoH1, ContainerPedidos, ContainerPedidosH2, Data, ContainerPedidosH3 } from './ProfileStyles';
import Footer from '../components/Footer/Footer';

export default class Profile extends React.Component {
    render() {
        return (
        <div>
            <Header>
                Meu perfil
            </Header>   
            <Profiles>
                <ProfileH1>Meu nome</ProfileH1>
                <ProfileH1>meuemail@gmail.com</ProfileH1>
                <ProfileH1>431688898-40</ProfileH1>
                <Edit> <EditIco /></Edit>
            </Profiles>
            <Endereco>
                <EnderecoH1C>Endereço cadastrado</EnderecoH1C>
                <EnderecoH1>Rua x, nº x, bairro x, cidade x, estado x</EnderecoH1>
                <EditAdress> <EditIco /></EditAdress>
            </Endereco>
            <Historico>
                <HistoricoH1>Hustórico de pedidos</HistoricoH1>
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
    }
