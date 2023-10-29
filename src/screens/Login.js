import { useState } from "react";
import { StyleSheet } from "react-native";
import { View } from "react-native";
import { Button, Text, TextInput } from "react-native-paper";
import { servicioUsuario } from "../servicios/servicioUsuario";

export const LoginScreen = ({ navigation }) => {
    const [usuario, setUsuario] = useState('');
    const [contraseña, setContraseña] = useState('');

    const iniciarSesion=async ()=>{
      await servicioUsuario.iniciar(usuario,contraseña);
      navigation.navigate("Home");
      restaurarValoresIniciales();
    }

    const restaurarValoresIniciales=()=>{
      setUsuario('');
      setContraseña('');
    }

  return (
    <View
      style={{
        ...estilosGenerales.caja_primaria,
        justifyContent: "center",
      }}
    >
      <View
        style={{
          padding: 5,
          minHeight: 300,
          minWidth: 370,
          justifyContent: "space-around",
          alignSelf: "center",
        }}
      >
        <Text style={{ fontSize: 40, alignSelf: "center" }}>Airvphm</Text>
        <TextInput
          label="Nombre de usuario"
          value={usuario}
          left={<TextInput.Icon icon="account-circle" />}
          onChangeText={(valor)=>{setUsuario(valor)}}
        />
        <TextInput
          label="Contraseña"
          value={contraseña}
          left={<TextInput.Icon icon="key" />}
          secureTextEntry={true}
          onChangeText={(valor)=>{setContraseña(valor)}}
        />
        <Button
          style={estilosGenerales.boton}
          mode="contained"
          onPress={iniciarSesion}
        >
          <Text style={{ fontSize: 20, color: "white" }}>Iniciar sesión</Text>
        </Button>
      </View>
    </View>
  );
};

const estilosGenerales = StyleSheet.create({
  caja_primaria: {
    height: "100%",
    padding: 10,
  },
  boton: {
    alignSelf: "center",
    margin: 10,
    padding: 5,
  },
});
