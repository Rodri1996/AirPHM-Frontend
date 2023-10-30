import axios from "axios";
import { REST_SERVER_URL } from "./constante";

class ServicioHospedaje{
    async traerHospedajes(
        unDestino,unaFechaDesde,unaFechaHasta,pasajeros,unPuntaje
    ){
        let hospedajesEncontrados = await axios.get(
            `${REST_SERVER_URL}/hospedajes/tarjetas`,
            {
              params: { 
                destino: unDestino, 
                puntaje: 0.0,
                pasajeros: pasajeros,
                fechaDesde: unaFechaDesde,
                fechaHasta: unaFechaHasta
            },
            }
          );
        return hospedajesEncontrados.data;
        }
}

export const servicioHospedaje = new ServicioHospedaje();