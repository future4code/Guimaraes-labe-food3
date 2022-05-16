import React, { useEffect, useState } from 'react';
import {  Historico, HistoricoH1, ContainerPedidos, ProfileContainer } from './ProfileStyles';
import { FourFoodFooter } from './styles';
import Footer from '../../components/Footer/Footer';
import { goToAddress, goBack } from '../../routes/coordinator';
import { useNavigate } from 'react-router-dom';
import axios from "axios";
import { BASE_URL } from "../../constant/urls";
import CircularProgress from '@material-ui/core/CircularProgress'
import Arrow from '../../components/Arrow/Arrow';
import Header from '../../components/Header/Header';

const Profile = () => {

    const navigate = useNavigate()


    const [infos, setInfos] = useState([]);
    const [orders, setOrders] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {

        const requestOrders = async () => {
            setLoading(true)

            const headers = {
                headers: {
                    auth: localStorage.getItem("token"),
                },
            };
            try {
                const { data } = await axios.get(`${BASE_URL}/orders/history`, headers)
                setOrders(data.orders);
                setLoading(false)
            } catch (error) {
                console.log(error)
                    ;
            }
        };
        requestOrders();
    }, [])

    useEffect(() => {

        const requestInfos = async () => {
            setLoading(true)

            const headers = {
                headers: {
                    auth: localStorage.getItem("token"),
                },
            };
            try {
                const { data } = await axios.get(`${BASE_URL}/profile`, headers)
                setInfos(data.user);
                setLoading(false)
            } catch (error) {
                console.log(error)
                    ;
            }
        };
        requestInfos();
    }, [])
    const logout = () => {
        localStorage.removeItem("token");
        navigate("/");
      };

    const convertMonth = (month) => {
        switch (month) {
            case 1:
                return "Janeiro"
            case 2:
                return "Fevereiro"
            case 3:
                return "Março"
            case 4:
                return "Abril"
            case 5:
                return "Maio"
            case 6:
                return "Junho"
            case 7:
                return "Julho"
            case 8:
                return "Agosto"
            case 9:
                return "Setembro"
            case 10:
                return "Outubro"
            case 11:
                return "Novembro"
            case 12:
                return "Dezembro"
            default:
                return "Error"
        }
    }

    const convertDate = (dateOfOrder) => {
        const date = new Date(dateOfOrder)
        return `${date.getDate()} de ${convertMonth(date.getMonth() + 1)} de ${date.getFullYear()}`
    }

    const orderList = orders && orders.map((item, index) => {
        const date = convertDate(item.createdAt)
        return (
            <div class="card" style={{ width: "15rem" }} key={index}>
                <ul class="list-group list-group-flush">
                    <li class="list-group-item">{item.restaurantName} </li>
                    <li class="list-group-item">{item.totalPrice}</li>
                    <li class="list-group-item">{date}</li>
                </ul>
            </div>
        )
    }
)
    return (
        <>
            <ProfileContainer >
                <Arrow onClick={() => goBack(navigate)} showTitle={true} title={' Meu perfil'} />
                <Header />
                {infos && <>
                    <div className="container py-5">
                        <div className="row py-4">
                            <div class="card">
                                <h3 class="card-header">Nome: {infos.name}</h3>
                                <div class="card-body">
                                    <h5 class="card-title">E-mail{infos.email}</h5>
                                    <h5 class="card-title"> CPF: {infos.cpf}</h5>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="card">
                        <h3 class="card-header">Endereço cadastrado</h3>
                        <div class="card-body">
                            <h5 class="card-title">{infos.address}</h5>
                            <button type="button" onClick={() => goToAddress(navigate)}>Editar Endereço</button>
                        </div>
                    </div>
                </>
                }
                <Historico>
                    <HistoricoH1>Histórico de pedidos</HistoricoH1>
                </Historico>
                <ContainerPedidos>
                    <>
                        {loading && <CircularProgress />}
                        {!loading && orders && orders.length > 0 && orderList}
                        {!loading && orders && orders.length === 0 && (
                            <h2> Você não tem nenhum pedido</h2>
                        )}
                    </>
                </ContainerPedidos>
                <FourFoodFooter>
                    <Footer />
                </FourFoodFooter>
                <button type="button" onClick={logout}>Logout</button>
            </ProfileContainer>
        </>



    );
}
export default Profile;