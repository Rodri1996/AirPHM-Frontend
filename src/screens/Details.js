import { ScrollView } from "react-native";
import { Button, Card, Text, TextInput } from "react-native-paper";
import CardComentario from "../components/CardComentario";
import { View } from "react-native";
import { Reserva } from "../components/Reserva";
import NavBar from "../components/NavBar";
import { useRoute } from "@react-navigation/native";
import { useEffect } from "react";
import { servicioHospedaje } from "../servicios/servicioHospedaje";
import { useState } from "react";

export const DetailsScreen = ({ navigation }) => {
  const route = useRoute();
  const { unHospedaje } = route.params;
  const [detalle, setDetalle] = useState("");

  useEffect(() => {
    const id = unHospedaje.id;
    const cargarDetalles = async () => {
      let detalle = await servicioHospedaje.traerDetallesHospedaje(id);
      setDetalle(detalle);
    };
    cargarDetalles();
    console.info(detalle);
  }, []);

  return (
    <ScrollView>
      <NavBar></NavBar>
      <View style={{ padding: 10 }}>
        <Text variant="titleLarge">{unHospedaje.nombre}</Text>
        <View
          style={{
            flexDirection: "row",
            flexWrap: "wrap",
          }}
        >
          <View
            style={{
              minHeight: 250,
              flex: 1,
              flexDirection: "column",
              // justifyContent: "space-evenly",
              minWidth: "50%",
              flexGrow: 5,
              padding: 10,
            }}
          >
            <View
              style={{
                flex: 1,
                flexDirection: "row",
                flexWrap: "wrap",
                justifyContent: "space-around",
                padding: 10,
                maxHeight: 80,
              }}
            >
              <Text variant="titleSmall" style={{ marginRight: 20 }}>
                {unHospedaje.puntaje} puntos - {detalle.opiniones} opiniones
              </Text>
              <Text variant="titleSmall" style={{ marginRight: 20 }}>
                {unHospedaje.ubicacion} - {detalle.paisDestino}
              </Text>
              {detalle.tieneServcLimpieza && (
                <Text variant="titleSmall" style={{ marginRight: 20 }}>
                  Con servicio de limpieza
                </Text>
              )}
            </View>
            <Card.Cover
              source={{ uri: unHospedaje.imagen }}
              style={{ width: 370, alignSelf: "center" }}
            />
          </View>
          <View
            style={{
              minHeight: 320,
              flexGrow: 1,
              minWidth: "50%",
              // padding: 10,
            }}
          >
            <View
              style={{
                minHeight: 320,
                padding: 5,
                width: 380,
                alignSelf: "center",
              }}
            >
              <Card.Content
                style={{
                  flex: 1,
                  flexDirection: "column",
                  justifyContent: "space-evenly",
                  // maxWidth:380,
                }}
              >
                <Text variant="titleSmall">
                  Costo por noche: ${unHospedaje.costoPorNoche}
                </Text>
                <Text variant="titleSmall">
                  Costo total: ${unHospedaje.costoPorNoche}
                </Text>
                <Text variant="titleSmall">
                  {detalle.huespedes} huespedes - {detalle.habitaciones}{" "}
                  dormitorio - {detalle.baños} baños
                </Text>
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
          </View>
        </View>
        <View
          style={{
            minHeight: 300,
            padding: 10,
            flex: 1,
            flexDirection: "column",
            justifyContent: "space-evenly",
          }}
        >
          <Text variant="titleSmall">Descripcion</Text>
          <Text variant="bodySmall">{unHospedaje.descripcion}</Text>
          <Text variant="titleSmall">El alojamiento</Text>
          <Text variant="bodySmall">{unHospedaje.detalle}</Text>
          <Text variant="titleSmall">
            Otros aspectos a tener en cuentaOtros aspectos a tener en cuenta
          </Text>
          <Text variant="bodySmall">{unHospedaje.aspectos}</Text>
        </View>
        <Text variant="titleSmall">Comentarios</Text>
        <ScrollView horizontal contentContainerStyle={{ marginLeft: 15 }}>
          <CardComentario
            image={
              "https://cdn.pixabay.com/photo/2020/07/14/13/07/icon-5404125_1280.png"
            }
            title={"Rodrigo Manuel Nieto"}
            subtitle={"11 de agosto 2023"}
            description={
              "Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas"
            }
            score={4}
            component={"detalle"}
          ></CardComentario>
        </ScrollView>
      </View>
    </ScrollView>
  );
};

const descripcionLargo =
  "Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper.";
const descripcionCorta =
  "Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.";
