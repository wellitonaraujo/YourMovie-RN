import {createStackNavigator} from '@react-navigation/stack';
import 'react-native-gesture-handler';
import Home from '../screens/Home';

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
    </Stack.Navigator>
  );
}
