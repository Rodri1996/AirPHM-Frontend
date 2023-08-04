import { ScrollView } from "react-native-gesture-handler";
import NavBar from "../components/NavBar";
import { View } from "react-native";
import { StyleSheet } from "react-native";
import * as React from "react";
import { Avatar } from "react-native-paper";
import { Text } from "react-native-paper";
import { Appbar, Button, IconButton, TextInput } from "react-native-paper";
import { Tabs } from "../components/Tabs";
export const PerfilScreen = () => {
  return (
    <ScrollView contentContainerStyle={{height:"100%"}}>
      <NavBar></NavBar>
      <View style={perfil.user_box}>
        <Avatar.Image
          size={156}
          source={{
            uri: "https://tntsports.com.ar/__export/1621696001935/sites/tntsports/img/2021/05/22/lionel_messi_10_seleccion_argentina_nueva_camiseta.jpg",
          }}
        />
        <Text>Lionel Andres Messi</Text>
        <TextInput
          style={perfil.input}
          label={"Fecha de nacimiento"}
        ></TextInput>
        <TextInput style={perfil.input} label={"Pais de origen"}></TextInput>
        <Text>Edad: 36 años</Text>
        <Text>Credito: $100,00</Text>
        <Button
          mode="contained"
          onPress={() => console.log("Pressed")}
        >
          Suma credito
        </Button>
      </View>
      <Tabs></Tabs>
    </ScrollView>
  );
};

const perfil = StyleSheet.create({
  input: {
    minWidth: 250,
  },
  user_box: {
    minHeight: 400,
    padding: 10,
    alignItems: "center",
    justifyContent: "space-evenly",
  },
});
