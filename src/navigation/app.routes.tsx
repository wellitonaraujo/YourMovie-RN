import {createStackNavigator} from '@react-navigation/stack';
import 'react-native-gesture-handler';
import Home from '../screens/Home';
import Movie from '../screens/Movie';
import Person from '../screens/Person';
import {RootStackParamList} from './types';

const Stack = createStackNavigator<RootStackParamList>();

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

      <Stack.Screen
        options={{
          headerShown: false,
        }}
        name="Person"
        component={Person}
      />
    </Stack.Navigator>
  );
}
