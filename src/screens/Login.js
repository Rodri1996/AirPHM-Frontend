import { useState } from "react";
import { StyleSheet } from "react-native";
import { View } from "react-native";
import { Button, Text, TextInput } from "react-native-paper";
import { servicioUsuario } from "../servicios/servicioUsuario";
import { ESTILOS_COMUNES } from "../estilosComunes";

export const LoginScreen = () => {
  return (
    <View
      style={StyleSheet.compose(
        ESTILOS_COMUNES.contenedor_primario,
        login.contenedor_primario
      )}
    >
      <View style={login.caja_secundaria}>
        <Text variant="displayLarge" style={login.titulo}>
          Inicio de sesión
        </Text>
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
        <Button
          mode="contained"
          onPress={() => console.log("Pressed")}
          style={login.boton_iniciar}
        >
          <Text variant="headlineLarge">Iniciar sesión</Text>
        </Button>
      </View>
    </View>
  );
};

const login = StyleSheet.create({
  contenedor_primario: {
    justifyContent: "center",
  },
  caja_secundaria: {
    justifyContent: "space-evenly",
    maxHeight: "400px",
    height: "100%",
  },
  boton_iniciar: {
    alignSelf: "center",
    padding: "5px",
    backgroundColor: "#3e8bdf",
  },
  titulo: { textAlign: "center" },
});
