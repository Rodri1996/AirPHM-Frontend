import * as React from "react";
import { StyleSheet } from "react-native";
import { Avatar, Button, Card, Text } from "react-native-paper";
// import {AiOutlineStar} from 'react-icons/ai';

const CardHospesaje = ({ navigation, operacion }) => {
  

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
        <Text variant="titleLarge">Departamento en centro turistico</Text>
        <Text variant="bodyMedium">
          Cuenta con dos baños,living luminoso y una cochera
        </Text>
        <Text variant="titleSmall">Av Siempre Viva 1234</Text>
      </Card.Content>
      <Card.Cover
        source={{ uri: "https://picsum.photos/700" }}
        style={{ width: 370, alignSelf: "center" }}
      />
      <Card.Content>
        <Text variant="titleSmall">Costo por noche: $2550.44</Text>
        <Text variant="titleSmall">Costo total: $10.000.00</Text>
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
