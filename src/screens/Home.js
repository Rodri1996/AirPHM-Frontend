import { View } from "react-native";
import { StyleSheet } from "react-native";
import { Appbar, Button, IconButton, TextInput } from "react-native-paper";
import CardHospesaje from "../components/cardHospesaje";
import { ScrollView } from "react-native-gesture-handler";

export const HomeScreen = ({navigation}) => {
  return (
    <View style={styles.bx_pry_home}>
      <View style={styles.bx_inputs_home}>
        <TextInput style={styles.input_home} label={"Destino"}></TextInput>
        <TextInput style={styles.input_home} label={"Fecha desde"}></TextInput>
        <TextInput style={styles.input_home} label={"Fecha hasta"}></TextInput>
        <TextInput style={styles.input_home} label={"Pasajeros"}></TextInput>
      </View>
       <Button
        style={styles.btn_search_home}
        icon="magnify"
        mode="contained"
        onPress={() => console.log("Pressed")}
      >
        Buscar
      </Button>
      <ScrollView>
        <View style={styles.bx_cards_home}>
          <CardHospesaje navigation={navigation}></CardHospesaje>
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
