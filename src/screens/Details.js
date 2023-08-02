import { ScrollView } from "react-native";
import { Card, Text } from "react-native-paper";
import CardComentario from "../components/CardComentario";
import { View } from "react-native";
import { Reserva } from "../components/Reserva";

export const DetailsScreen = ({ navigation }) => {
  return (
    <ScrollView>
      <View style={{ padding: 10 }}>
        <Text variant="titleLarge">
          Piso de diseño moderno en el centro de la ciudad
        </Text>
        <View style={{
          minHeight: 250,
          flex:1,
          flexDirection: "column",
          justifyContent: "space-evenly",
        }}>
          <Text variant="titleSmall">4.5 puntos - 15 opiniones</Text>
          <Text variant="titleSmall">Av. Siempre Viva 1234 - Ucrania</Text>
          <Card.Cover
            source={{ uri: "https://picsum.photos/700" }}
            style={{ width: 370, alignSelf: "center" }}
          />
        </View>
        <View style={{
          minHeight: 320,
        }}>
          <Text variant="titleSmall">Con servicio de limpieza</Text>
          <Reserva />
        </View>
         <View style={{minHeight:300,padding:10,flex:1,flexDirection:"column",justifyContent:'space-evenly'}}>
          <Text variant="titleSmall">Descripcion</Text>
          <Text variant="bodySmall">{descripcionLargo}</Text>
          <Text variant="titleSmall">El alojamiento</Text>
          <Text variant="bodySmall">{descripcionLargo}</Text>
          <Text variant="titleSmall">Otros aspectos a tener en cuentaOtros aspectos a tener en cuenta
          </Text>
          <Text variant="bodySmall">{descripcionCorta}</Text>
        </View>
         <Text variant="titleSmall">Comentarios</Text>
        <ScrollView horizontal>
            <CardComentario></CardComentario>
            <CardComentario></CardComentario>
            <CardComentario></CardComentario>
        </ScrollView>
      </View>
    </ScrollView>
  );
};

const descripcionLargo =
  "Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper.";
const descripcionCorta =
  "Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.";
