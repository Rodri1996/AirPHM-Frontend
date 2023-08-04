import * as React from "react";
import { StatusBar, StyleSheet, View, useWindowDimensions } from "react-native";
import { Text } from "react-native-paper";
import { SceneMap, TabView } from "react-native-tab-view";
import CardHospesaje from "./cardHospesaje";
import { ScrollView } from "react-native-gesture-handler";

const primeraRuta = () => (
  <ScrollView>
    <View style={{
        flex:1,
        backgroundColor:'red',
        alignItems:'center',
    }}>
        <CardHospesaje></CardHospesaje>
    </View>
  </ScrollView>
);

const segundaRuta = () => (
    <View style={[styles.container, { backgroundColor: 'red' }]}><Text>Amigos</Text></View>
);

const terceraRuta = () => (
    <View style={[styles.container, { backgroundColor: 'red' }]}><Text>Comentarios</Text></View>
);

const cuartaRuta = () => (
    <View style={[styles.container, { backgroundColor: 'green', }]}><Text>Publicaciones</Text></View>
);

const renderScene = SceneMap({
  reservas: primeraRuta,
  amigos: segundaRuta,
  comentarios: terceraRuta,
  publicaciones: cuartaRuta,
});

export const Tabs = () => {
  const layout = useWindowDimensions();

  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: "reservas", title: "Reservas" },
    { key: "amigos", title: "Amigos" },
    { key: "comentarios", title: "Comentarios" },
    { key: "publicaciones", title: "Publicaciones" },
  ]);

  return (
    <TabView
      navigationState={{ index, routes }}
      renderScene={renderScene}
      onIndexChange={setIndex}
      initialLayout={{ width: layout.width }}
    />
  );
};
const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    tabBar: {
      flexDirection: 'row',
      paddingTop: StatusBar.currentHeight,
      
    },
    tabItem: {
      flex: 1,
      alignItems: 'center',
      padding: 16,
    },
  });
  