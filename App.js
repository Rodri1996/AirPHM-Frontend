import { createStackNavigator } from "@react-navigation/stack";
import "react-native-gesture-handler";
import { HomeScreen } from "./src/screens/Home";
import { NavigationContainer } from "@react-navigation/native";
import { DetailsScreen } from "./src/screens/Details";
import { PerfilScreen } from "./src/screens/Perfil";

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Detalle" component={DetailsScreen} options={{ headerShown: false }}/>
        <Stack.Screen name="Perfil" component={PerfilScreen} options={{ headerShown: false }}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
