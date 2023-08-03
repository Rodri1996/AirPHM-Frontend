import { View } from "react-native";
import { Button, Card, Text, TextInput } from "react-native-paper";

export const Reserva = () => {
  return (
    <View style={{ minHeight: 320, padding: 5, width:380,alignSelf:"center", }}>
      <Card.Content
        style={{
          flex: 1,
          flexDirection: "column",
          justifyContent: "space-evenly",
          // maxWidth:380,
        }}
      >
        <Text variant="titleSmall">Costo por noche: $2550.44</Text>
        <Text variant="titleSmall">Costo total: $10.000.00</Text>
        <Text variant="titleSmall">4 huespedes - 1 dormitorio - 1 baño</Text>
        <TextInput label="Fecha desde"></TextInput>
        <TextInput label="Fecha hasta"></TextInput>
        <TextInput label="Cantidad de pasajeros"></TextInput>
      </Card.Content>
      <Card.Actions>
        <Button mode="outlined" onPress={() => console.log("Pressed")}>
          Cancelar
        </Button>
        <Button mode="contained" onPress={() => console.log("Pressed")}>
          Reservar
        </Button>
      </Card.Actions>
    </View>
  );
};
