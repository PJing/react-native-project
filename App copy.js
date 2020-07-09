import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { NavigationContainer } from '@react-navigation/native';
import Home from './pages/home.js'
import RootPage from './pages/rootPage.js'
import Detail from './pages/detail.js'
const Stack = createStackNavigator()
export default class App extends React.Component {
  render() {
    return (
      <NavigationContainer>
        <Stack.Navigator mode="modal">
          <Stack.Screen name="RootPage" component={RootPage}
            options={{
              headerShown: false,
              title: 'My home',
              headerStyle: {
                backgroundColor: '#f4511e',
              },
              headerTintColor: '#fff',
              headerTitleStyle: {
                fontWeight: 'bold',
              },
            }} />
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="Detail" component={Detail} />
        </Stack.Navigator>
      </NavigationContainer>
    )
  }
}