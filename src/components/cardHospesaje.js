import * as React from "react";
import { StyleSheet, View } from "react-native";
import { Button, Card, Text } from "react-native-paper";

export const CardHospesaje = () => {
  return (
    <Card style={cardHospesaje.contenedor_primario}>
      <Card.Content>
        <Text variant="titleLarge">Titulo</Text>
        <Text variant="bodyMedium">Descripcion</Text>
        <Text variant="bodyMedium">Ubicacion</Text>
        <View style={cardHospesaje.precios}>
          <Text variant="bodyMedium">$10.000000000000</Text>
          <Text variant="bodyMedium">$30.0000000000</Text>
        </View>
      </Card.Content>
      <Card.Cover source={{ uri: "https://picsum.photos/700" }} />
      <Card.Actions>
        <Button mode="contained" onPress={() => console.log("Pressed")}>
          Ver el detalle
        </Button>
      </Card.Actions>
    </Card>
  );
};

const cardHospesaje = StyleSheet.create({
  contenedor_primario: { marginTop: "5px" },
  precios: { flexDirection: "row", justifyContent: "space-around" },
});

export default CardHospesaje;
