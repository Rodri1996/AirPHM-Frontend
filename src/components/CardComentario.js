import * as React from "react";
import { View } from "react-native";
import { Avatar, Button, Card, Text } from "react-native-paper";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

export const CardComentario = ({
  image,
  title,
  subtitle,
  description,
  score,
  component,
}) => {
  const renderEstilosAdicionales = () => {
    if (component == "amigos") {
      return amigosPlus();
    }
    if (component == "comentarios") {
      return comentariosPlus();
    }
    if (component == "detalle") {
      return detallePlus();
    }
  };

  const amigosPlus = () => (
    <Button icon={"delete"} onPress={() => console.log("Pressed")}>
      Eliminar
    </Button>
  );

  const comentariosPlus = () => (
    <View>
      <Button icon={"delete"} onPress={() => console.log("Pressed")}>
        Eliminar
      </Button>
      {/* <View> */}
      <Text style={{ textAlign: "center", fontSize: 20, paddingRight: 10 }}>
        {score}
        <Icon
          name="star"
          size={25}
          color="red" // Ajusta el color según tus preferencias
        />
      </Text>
      {/* </View> */}
    </View>
  );

  const detallePlus = () => (
    <Text style={{ textAlign: "center", fontSize: 20, paddingRight: 10 }}>
      {score}
      <Icon
        name="star"
        size={25}
        color="red" // Ajusta el color según tus preferencias
      />
    </Text>
  );

  return (
    <Card
      style={{
        padding: 10,
        maxWidth: 360,
        margin: 10,
        backgroundColor: "beige",
      }}
    >
      <View style={{ flex: 1, flexDirection: "row" }}>
        <Avatar.Image size={48} source={{ uri: image }} />
        <Card.Content style={{ width: 200 }}>
          <Text variant="titleLarge">{title}</Text>
          <Text variant="bodyMedium">{subtitle}</Text>
        </Card.Content>
        {renderEstilosAdicionales()}
      </View>
      <Text variant="bodySmall" style={{ marginTop: 5 }}>
        {description}
      </Text>
    </Card>
  );
};

export default CardComentario;
