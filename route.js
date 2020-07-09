import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

import List from './pages/list.js'
import Home from './pages/home.js'
import Detail from './pages/Detail.js'

function MyStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="List" component={List} />
      <Stack.Screen name="Detail" component={Detail} />
    </Stack.Navigator>
  );
}