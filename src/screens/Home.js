import * as React from "react";
import { StyleSheet, View } from "react-native";
import { Button, Searchbar } from "react-native-paper";
import { BotonChip } from "../components/Chip";
import NavBar from "../components/NavBar";
import { ESTILOS_COMUNES } from "../estilosComunes";
import CardHospesaje from "../components/cardHospesaje";

export const HomeScreen = () => {
  const [searchQuery, setSearchQuery] = React.useState("");

  return (
    <>
      <NavBar></NavBar>
      <View style={StyleSheet.compose(ESTILOS_COMUNES.contenedor_primario)}>
        <View>
          <Searchbar
            placeholder="Destino"
            style={home.buscador}
            icon="map"
            // onChangeText={setSearchQuery}
            // value={searchQuery}
          />
          <Searchbar
            placeholder="Desde"
            style={home.buscador}
            icon="calendar"
            // onChangeText={setSearchQuery}
            // value={searchQuery}
          />
          <Searchbar
            placeholder="Hasta"
            style={home.buscador}
            icon="calendar"
            // onChangeText={setSearchQuery}
            // value={searchQuery}
          />
          <Searchbar
            placeholder="Pasajeros"
            style={home.buscador}
            icon="account-multiple"
            // onChangeText={setSearchQuery}
            // value={searchQuery}
          />
          <View style={home.caja_chips}>
            <BotonChip texto="5 puntos"></BotonChip>
            <BotonChip texto="4 puntos o mas"></BotonChip>
            <BotonChip texto="3 puntos o mas"></BotonChip>
            <BotonChip texto="2 puntos o mas"></BotonChip>
            <BotonChip texto="Traer a todos"></BotonChip>
          </View>
          <Button
            icon="magnify"
            mode="contained"
            onPress={() => console.log("Pressed")}
            style={home.boton_busqueda}
          >
            Buscar
          </Button>
          <CardHospesaje></CardHospesaje>
        </View>
      </View>
    </>
  );
};

const home = StyleSheet.create({
  buscador: {
    margin: 5,
  },
  caja_chips: { flexDirection: "row", flexWrap: "wrap" },
  boton_busqueda:{
    alignSelf: "center",
  }
});
