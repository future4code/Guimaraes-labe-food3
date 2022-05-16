import React, { useEffect, useState } from 'react';
import { HeaderStyle, Historico, HistoricoH1, ContainerPedidos, ProfileContainer } from './ProfileStyles';
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

    const infoUser = JSON.parse(localStorage.getItem('infoUser'))

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
                setOrders(data);
                setLoading(false)
            } catch (error) {
                console.log(error)
                    ;
            }
        };
        requestOrders();
    }, [])


    console.log('pedidos', orders)


    const navigate = useNavigate();

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

    const convertDate = (order) => {
        const date = new Date(order)
        return `${date.getDate()} de ${convertMonth(date.getMonth() + 1)} de ${date.getFullYear()}`
    }
    const ordersList = async () => {
        orders &&
            orders.map((item, index) => {
                const date = convertDate(item.createdAt)
                return (<div class="card" style="width: 18rem;" key={index}
                >
                    <ul class="list-group list-group-flush">
                        <li class="list-group-item">{item.restaurantName}</li>
                        <li class="list-group-item">{item.totalPrice}</li>
                        <li class="list-group-item">data={date}</li>
                    </ul>
                </div>)
            });
    }


    return (
        infoUser && <>
            <ProfileContainer >
            <Arrow onClick={() => goBack(navigate)} showTitle={true} title={' Meu perfil'} />
            <Header />
                <div className="container py-5">
                    <div className="row py-4">
                <div class="card">
                    <h3 class="card-header">Nome: {infoUser.data.name.toUpperCase()}</h3>
                    <div class="card-body">
                        <h5 class="card-title">E-mail{infoUser.data.email}</h5>
                        <h5 class="card-title"> CPF: {infoUser.data.cpf}</h5>
                    </div>
                </div>

                    </div>
                </div>
                <div class="card">
                    <h3 class="card-header">Endereço cadastrado</h3>
                    <div class="card-body">
                        <h5 class="card-title">{infoUser.data.address}</h5>
                        <button type="button"  onClick={() => goToAddress(navigate)}>Editar Endereço</button>
                    </div>
                </div>
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
                <FourFoodFooter>
                    <Footer />
                </FourFoodFooter>
            </ProfileContainer>
        </>



    );
}
export default Profile;
