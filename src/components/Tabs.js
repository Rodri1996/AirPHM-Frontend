import * as React from "react";
import { StatusBar, StyleSheet, View, useWindowDimensions } from "react-native";
import { Button, Text } from "react-native-paper";
import { SceneMap, TabBar, TabView } from "react-native-tab-view";
import CardHospesaje from "./cardHospesaje";
import { ScrollView } from "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/native";
import { CardAmigo } from "./CardAmigo";
import CardComentario from "./CardComentario";

export const Tabs = () => {
  const navigation = useNavigation();
  const reservas = () => (
    <ScrollView>
      <View
        style={{
          flex: 1,
          alignItems: "center",
        }}
      >
        <CardHospesaje
          navigation={navigation}
          operacion="Calificar"
        ></CardHospesaje>
      </View>
    </ScrollView>
  );

  const amigos = () => (
    <ScrollView>
      <View
        style={{
          flex: 1,
          flexDirection: "row",
          flexWrap: "wrap",
          justifyContent: "center",
        }}
      >
        <CardComentario
          image={
            "https://cdn.pixabay.com/photo/2020/07/14/13/07/icon-5404125_1280.png"
          }
          title={"Pepe Argento"}
          subtitle={"Brasil"}
          component={"amigos"}
        ></CardComentario>
      </View>
    </ScrollView>
  );

  const comentarios = () => (
    <ScrollView>
      <View
        style={{
          flex: 1,
          flexDirection: "row",
          flexWrap: "wrap",
          justifyContent: "center",
        }}
      >
        <CardComentario
          image={
            "https://cdn.pixabay.com/photo/2020/07/14/13/07/icon-5404125_1280.png"
          }
          title={"a Rodrigo Manuel Nieto"}
          subtitle={"21 de octube 2022"}
          description={"Me encanto!!!"}
          score={3}
          component={"comentarios"}
        ></CardComentario>
        <CardComentario
          image={
            "https://cdn.pixabay.com/photo/2020/07/14/13/07/icon-5404125_1280.png"
          }
          title={"a Pepe Argento"}
          subtitle={"11 de octube 2021"}
          description={
            "Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas"
          }
          component={"comentarios"}
        ></CardComentario>
      </View>
    </ScrollView>
  );

  const saludo = () => {
    console.log("HOLA,VENGO DEL TAB");
  };
  const publicaciones = () => (
    <ScrollView>
      <View
        style={{
          flex: 1,
          alignItems: "center",
        }}
      >
        <Button
          icon="pencil"
          mode="contained"
          onPress={() => console.log("Pressed")}
        >
          Publicar
        </Button>
        <CardHospesaje navigation={navigation}></CardHospesaje>
        <CardHospesaje navigation={navigation}></CardHospesaje>
      </View>
    </ScrollView>
  );

  const renderScene = SceneMap({
    reservas: reservas,
    amigos: amigos,
    comentarios: comentarios,
    publicaciones: publicaciones,
  });

  const layout = useWindowDimensions();

  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: "reservas", title: "Reservas" },
    { key: "amigos", title: "Amigos" },
    { key: "comentarios", title: "Comentarios" },
    { key: "publicaciones", title: "Publicaciones" },
  ]);

  const renderTabBar = (props) => (
    <TabBar
      {...props}
      indicatorStyle={{ backgroundColor: "yellow" }}
      style={{ backgroundColor: "pink" }}
      activeColor="yellow"
      scrollEnabled={true}
    />
  );

  return (
    <TabView
      navigationState={{ index, routes }}
      renderScene={renderScene}
      onIndexChange={setIndex}
      initialLayout={{ width: layout.width }}
      renderTabBar={renderTabBar}
      sceneContainerStyle={{ padding: 10, backgroundColor: "grey" }}
    />
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  tabBar: {
    flexDirection: "row",
    paddingTop: StatusBar.currentHeight,
  },
  tabItem: {
    flex: 1,
    alignItems: "center",
    padding: 16,
  },
});
