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
    <View style={{ height: "100%", justifyContent:'space-between'}}>
      <NavBar></NavBar>
      <View>
        <Avatar.Image
          size={124}
          source={{
            uri: "https://tntsports.com.ar/__export/1621696001935/sites/tntsports/img/2021/05/22/lionel_messi_10_seleccion_argentina_nueva_camiseta.jpg",
          }}
        />
        <Text>Lionel Andres Messi</Text>
      </View>
      <Tabs></Tabs>
    </View>
  );
};
