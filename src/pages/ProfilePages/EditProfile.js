import React from "react";
import EditPerfil from "./EditForml";
import Arrow from '../components/Arrow/Arrow';
import {Geral, Perfil} from "./styles";


export default class EditProfile extends React.Component {
  render() {
    return (
      <Geral>
        <Arrow onClick={this.props.onClick} />
        <Perfil>
        <EditPerfil />
        </Perfil>
      </Geral>
    );
  }
}