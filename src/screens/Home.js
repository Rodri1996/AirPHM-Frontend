import { View } from "react-native";
import { StyleSheet } from "react-native";
import { Appbar, Button, IconButton, TextInput } from "react-native-paper";
import CardHospesaje from "../components/cardHospesaje";
import { ScrollView } from "react-native-gesture-handler";
import { useState } from "react";
import { servicioHospedaje } from "../servicios/servicioHospedaje";

export const HomeScreen = ({navigation}) => {

  const [hospedajes,setHospedajes]=useState([]);
  const [destino,setDestino]=useState("");
  const [fechaDesde,setFechaDesde]=useState("");
  const [fechaHasta,setFechaHasta]=useState("");
  const [pasajeros,setPasajeros]=useState(0);
  const [puntaje,setPuntaje]=useState(0);

  const detalle=()=>(
    <Button
      style={styles.btn_search_home}
      icon="magnify"
      mode="outlined"
      onPress={() => {
        navigation.navigate("Detalle");
      }}
    >
      Detalle
    </Button>
  )

      const buscarHospedajes=async ()=>{
        let hospedajesEncontrados = await servicioHospedaje.traerHospedajes(
          destino,fechaDesde,fechaHasta,pasajeros,puntaje
        );
        setHospedajes(hospedajesEncontrados);
      }

  return (
    <View style={styles.bx_pry_home}>
      <View style={styles.bx_inputs_home}>
        <TextInput style={styles.input_home} label={"Destino"}
          value={destino} 
          onChangeText={(value)=>setDestino(value)}
        ></TextInput>
        <TextInput style={styles.input_home} label={"Fecha desde"}
          value={fechaDesde}
          onChangeText={(value)=>setFechaDesde(value)}
        ></TextInput>
        <TextInput style={styles.input_home} label={"Fecha hasta"}
          value={fechaHasta}
          onChangeText={(value)=>setFechaHasta(value)}
        ></TextInput>
        <TextInput style={styles.input_home} label={"Pasajeros"}
          value={pasajeros}
          keyboardType="number-pad"
          onChangeText={(value)=>setPasajeros(value)}
        ></TextInput>
      </View>
       <Button
        style={styles.btn_search_home}
        icon="magnify"
        mode="contained"
        onPress={buscarHospedajes}
      >
        Buscar
      </Button>
      <ScrollView>
        <View style={styles.bx_cards_home}>
        { hospedajes.map((hospedaje)=>
          <CardHospesaje 
            key={hospedaje.id}
            navigation={navigation} 
            operacion="Ver el detalle"
            unHospedaje={hospedaje}
            ></CardHospesaje>)
        }
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  bx_pry_home: {
    height: "100%",
  },
  bx_cards_home: {
    height: "100%",
    flex:1,
    flexDirection:'row',
    flexWrap:'wrap',
    justifyContent:'center',
  },
  btn_search_home: {
    alignSelf: "center",
    margin: 10,
  },
  bx_inputs_home:{
    flexDirection:'row',
    flexWrap:'wrap',
    justifyContent:'center',
  },
  input_home:{
    width:300,margin:5,
  },
});
