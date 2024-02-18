import { StyleSheet } from "react-native";
import { Chip } from "react-native-paper";

export const BotonChip = ({texto}) => {
  return (
    <Chip
      style={chip.contenedor_principal}
      onPress={() => console.log("Pressed")}
      // selected="true" . Modificarlo con un estado cada vez que se clickea
    >
      {texto}
    </Chip>
  );
};

const chip = StyleSheet.create({
  contenedor_principal:{ maxWidth: "150px", margin: "5px" },
});