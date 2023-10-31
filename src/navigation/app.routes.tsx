import {createStackNavigator} from '@react-navigation/stack';
import 'react-native-gesture-handler';
import Home from '../screens/Home';
import Movie from '../screens/Movie';

const Stack = createStackNavigator();

export default function AppRoutes() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        options={{
          headerShown: false,
        }}
        name="Home"
        component={Home}
      />

      <Stack.Screen
        options={{
          headerShown: false,
        }}
        name="Movie"
        component={Movie}
      />
    </Stack.Navigator>
  );
}
