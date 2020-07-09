import React from 'react'
import { StatusBar } from 'react-native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Home from './Home'
import Info from './Info'
import AntDesign from "react-native-vector-icons/AntDesign"

const Tab = createBottomTabNavigator()

class Index extends React.Component {
  render() {
    return (
      <>
        <StatusBar backgroundColor="#eee" barStyle="dark-content"></StatusBar>
        <Tab.Navigator
          screenOptions={({ route }) => ({
            tabBarIcon: ({ focused, color, size }) => {
              let iconName;

              if (route.name === 'Home') {
                iconName = 'home';
              } else if (route.name === 'Info') {
                iconName = 'user'
              }

              return <AntDesign name={iconName} size={size} color={color} />;
            },
          })}>
          <Tab.Screen name="Home" component={Home} options={{
            tabBarLabel: '智慧社区'
          }}></Tab.Screen>
          <Tab.Screen name="Info" component={Info} options={{
            tabBarLabel: '个人信息'
          }}></Tab.Screen>
        </Tab.Navigator>
      </>
    )
  }
}
export default Index