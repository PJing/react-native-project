import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { NavigationContainer } from '@react-navigation/native'
import Index from "./src/pages/index"
import User from "./src/pages/user/user"
import UserInfo from "./src/pages/user/userInfo"
import EditUserInfo from "./src/pages/user/editUserInfo"
import EditDwelling from "./src/pages/user/editDwelling"
import EditCompany from "./src/pages/user/editCompany"
import Report from "./src/pages/report/report"
import Sign from "./src/pages/sign/sign"
const Stack = createStackNavigator()
export default class App extends React.Component {
  render() {
    return (
      <NavigationContainer>
        <Stack.Navigator mode="modal">
          {/* 首页 */}
          <Stack.Screen name="Index" component={Index}
            options={{
              headerShown: false
            }} />
          {/* 个人中心 */}
          <Stack.Screen name="User" component={User}
            options={{
              headerTitle: "个人中心",
              headerTitleAlign: 'center',
              headerTransparent: true
            }} />
          {/* 个人资料 */}
          <Stack.Screen name="UserInfo" component={UserInfo}
            options={{
              headerTitle: "个人资料",
              headerTitleAlign: 'center'
            }} />
          {/* 编辑个人资料 */}
          <Stack.Screen name="EditUserInfo" component={EditUserInfo}
            options={{
              headerTitle: "编辑个人资料",
              headerTitleAlign: 'center'
            }} />
          {/* 修改小区信息 */}
          <Stack.Screen name="EditDwelling" component={EditDwelling}
            options={{
              headerTitle: "修改小区信息",
              headerTitleAlign: 'center'
            }} />
          {/* 修改单位信息 */}
          <Stack.Screen name="EditCompany" component={EditCompany}
            options={{
              headerTitle: "修改单位信息",
              headerTitleAlign: 'center'
            }} />
          {/* 举报 */}
          <Stack.Screen name="Report" component={Report}
            options={{
              headerTitle: "举报",
              headerTitleAlign: 'center'
            }} />
          {/* 登录 */}
          <Stack.Screen name="Sign" component={Sign}
            options={{
              headerShown: false,
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    )
  }
}