import * as React from "react";
import { StyleSheet, View } from "react-native";
import {
  Appbar,
  Button,
  Card,
  Chip,
  Searchbar,
  Text,
  TouchableRipple,
} from "react-native-paper";

export const HomeScreen = () => {
  const [searchQuery, setSearchQuery] = React.useState("");
  const handleHomePress = () => {
    console.log("Home clicked");
  };
  const irAPerfil = () => {
    console.log("clicked");
  };
  const cerrarSesion = () => {
    console.log("clicked");
  };
  return (
    <View
      style={{
        // backgroundColor: "red",
        height: "100%",
      }}
    >
      <Appbar.Header>
        <Appbar.BackAction />
        <Appbar.Content title="App" />
        <TouchableRipple onPress={handleHomePress}>
          <Appbar.Action icon="home" />
        </TouchableRipple>
        <TouchableRipple onPress={irAPerfil}>
          <Appbar.Action icon="account-circle" />
        </TouchableRipple>
        <TouchableRipple onPress={cerrarSesion}>
          <Appbar.Action icon="logout" />
        </TouchableRipple>
      </Appbar.Header>
      <View style={{ padding: "10px" }}>
        <Searchbar
          placeholder="Destino"
          style={styles.buscador}
          icon="map"
          // onChangeText={setSearchQuery}
          // value={searchQuery}
        />
        <Searchbar
          placeholder="Desde"
          style={styles.buscador}
          icon="calendar"
          // onChangeText={setSearchQuery}
          // value={searchQuery}
        />
        <Searchbar
          placeholder="Hasta"
          style={styles.buscador}
          icon="calendar"
          // onChangeText={setSearchQuery}
          // value={searchQuery}
        />
        <Searchbar
          placeholder="Pasajeros"
          style={styles.buscador}
          icon="account-multiple"
          // onChangeText={setSearchQuery}
          // value={searchQuery}
        />
        <View style={{ flexDirection: "row", flexWrap: "wrap" }}>
          <Chip
            style={{ maxWidth: "150px",margin:"5px" }}
            onPress={() => console.log("Pressed")}
            // selected="true" . Modificarlo con un estado cada vez que se clickea
          >
            5 puntos
          </Chip>
          <Chip
            style={{ maxWidth: "150px",margin:"5px" }}
            onPress={() => console.log("Pressed")}
            // selected="true" . Modificarlo con un estado cada vez que se clickea
          >
            4 puntos o más
          </Chip>
          <Chip
            style={{ maxWidth: "150px",margin:"5px" }}
            onPress={() => console.log("Pressed")}
            // selected="true" . Modificarlo con un estado cada vez que se clickea
          >
            3 puntos o más
          </Chip>
          <Chip
            style={{ maxWidth: "150px",margin:"5px" }}
            onPress={() => console.log("Pressed")}
            // selected="true" . Modificarlo con un estado cada vez que se clickea
          >
            2 puntos o más
          </Chip>
          <Chip
            style={{ maxWidth: "150px",margin:"5px" }}
            onPress={() => console.log("Pressed")}
            // selected="true" . Modificarlo con un estado cada vez que se clickea
          >
            Traer a todos
          </Chip>
        </View>
        <Button
          icon="magnify"
          mode="contained"
          onPress={() => console.log("Pressed")}
          style={{ alignSelf: "center" }}
        >
          Buscar
        </Button>

        <Card style={{ marginTop: "5px" }}>
          <Card.Content>
            <Text variant="titleLarge">Titulo</Text>
            <Text variant="bodyMedium">Descripcion</Text>
            <Text variant="bodyMedium">Ubicacion</Text>
            <View
              style={{ flexDirection: "row", justifyContent: "space-around" }}
            >
              <Text variant="bodyMedium">$10.000000000000</Text>
              <Text variant="bodyMedium">$30.0000000000</Text>
            </View>
          </Card.Content>
          <Card.Cover source={{ uri: "https://picsum.photos/700" }} />
          <Card.Actions>
            <Button
              style={{ alignSelf: "center" }}
              mode="contained"
              onPress={() => console.log("Pressed")}
            >
              Ver el detalle
            </Button>
          </Card.Actions>
        </Card>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  buscador: {
    margin: 5,
  },
});
