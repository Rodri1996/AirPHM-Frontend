
import { createStackNavigator } from '@react-navigation/stack';
import 'react-native-gesture-handler';
import { HomeScreen } from './src/screens/Home';
import { NavigationContainer } from '@react-navigation/native';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
        <Stack.Navigator>
        <Stack.Screen
            name="Home"
            component={HomeScreen}
          />
        </Stack.Navigator>
    </NavigationContainer>
  );
}
