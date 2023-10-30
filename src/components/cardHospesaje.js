import * as React from "react";
import { StyleSheet } from "react-native";
import { Avatar, Button, Card, Text } from "react-native-paper";
// import {AiOutlineStar} from 'react-icons/ai';

export const CardHospesaje = ({ 
  navigation, 
  operacion,
  unHospedaje
}) => {
  

  const renderVerDetalle = () => (
    <Button
      style={styles.btn_search_home}
      icon="magnify"
      mode="outlined"
      onPress={() => {
        navigation.navigate("Detalle");
      }}
    >
      {operacion}
    </Button>
  );

  const calificar=()=>(
    <Button
      style={styles.btn_search_home}
      mode="outlined"
      onPress={() => {
        console.log("califico")
      }}
    >
      {operacion}
    </Button>
  )

  const renderizarBoton = () => {
    if (operacion == "Ver el detalle") {
      return renderVerDetalle();
    }
    if (operacion == "Calificar") {
      return calificar();
    }
  };

  return (
    <Card style={styles.card}>
      <Card.Content>
        {/* <AiOutlineStar/> */}
        <Text variant="titleLarge">{unHospedaje.nombre}</Text>
        <Text variant="bodyMedium">
          {unHospedaje.descripcion}
        </Text>
        <Text variant="titleSmall">{unHospedaje.ubicacion}</Text>
      </Card.Content>
      <Card.Cover
        source={{ uri: unHospedaje.imagen }}
        style={{ width: 370, alignSelf: "center" }}
      />
      <Card.Content>
        <Text variant="titleSmall">Costo por noche: ${unHospedaje.costoPorNoche}</Text>
        <Text variant="titleSmall">Costo total: ${unHospedaje.costoTotal}</Text>
      </Card.Content>
      <Card.Actions>{renderizarBoton()}</Card.Actions>
    </Card>
  );
};

export default CardHospesaje;

const styles = StyleSheet.create({
  card: {
    margin: 10,
    maxWidth: 500,
    minWidth: 373,
  },
});
