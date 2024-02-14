import { useState } from "react";
import { StyleSheet } from "react-native";
import { View } from "react-native";
import { Button, Text, TextInput } from "react-native-paper";
import { servicioUsuario } from "../servicios/servicioUsuario";

export const LoginScreen = () => {
  return (
    <View
      style={{
        // backgroundColor: "red",
        height: "100%",
        padding: "10px",
        justifyContent: "center",
      }}
    >
      <View
        style={{
          // backgroundColor: "green",
          justifyContent: "space-evenly",
          maxHeight: "400px",
          height: "100%",
        }}
      >
        <Text variant="displayLarge" style={{textAlign:"center"}}>Inicio de sesión</Text>
        <TextInput
          label="Usuario"
          // value={text}
          //onChangeText={text => setText(text)}
        />
        <TextInput
          label="Contraseña"
          // value={text}
          //onChangeText={text => setText(text)}
        />
        <Button mode="contained" onPress={() => console.log("Pressed")} style={{alignSelf:"center",padding:"5px", backgroundColor:"#3e8bdf"}}>
          <Text variant="headlineLarge">
          Iniciar sesión
          </Text>
        </Button>
      </View>
    </View>
  );
};
