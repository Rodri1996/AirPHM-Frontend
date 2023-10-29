import { REST_SERVER_URL } from "./constante";
import axios from "axios";

class ServicioUsuario {

  constructor(){
    this.idUsuarioActivo=0;
  }

  async iniciar(usuario, contraseña) {
    const usuarioRegistrado = await axios.get(
      `${REST_SERVER_URL}/usuarios/validar`,
      {
        params: { nombreUsuario: usuario, contraseña: contraseña },
      }
    );
    this.idUsuarioActivo = usuarioRegistrado.data.id;
  }
}

export const servicioUsuario = new ServicioUsuario();
