import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import AntDesign from "react-native-vector-icons/AntDesign"
import Home from './home.js'
import List from './list.js'



const Tab = createBottomTabNavigator();

export default function RootPage() {
  return (
    <Tab.Navigator initialRouteName="List"
      tabBarOptions={{
        activeTintColor: 'tomato',
        inactiveTintColor: 'gray',
      }}
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName
          if (route.name === 'Home') {
            iconName = focused ? 'android1' : 'android'
          } else if (route.name === 'List') {
            iconName = focused ? 'apple1' : 'apple-o'
          }
          return <AntDesign name={iconName} size={size} color={color} />;
        }
      })}>
      <Tab.Screen name="Home" component={Home}
        options={{
          tabBarLabel: '首页'
        }} />
      <Tab.Screen name="List" component={List}
        options={{
          tabBarLabel: '列表'
        }} />
    </Tab.Navigator>
  );
}