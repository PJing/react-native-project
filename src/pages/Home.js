import React from 'react'
import { View, Text, StyleSheet, Image, ScrollView, Alert, TouchableOpacity } from 'react-native'
import AsyncStorage from '@react-native-community/async-storage'
import pxSize from '../assets/js/pxSize'
import {WToast} from 'react-native-smart-tip'

export default class Home extends React.Component {
  state = {
    tabList: [
      {
        source: require('../assets/img/mall.png'),
        name: '社区商城',
        width: 365
      },
      {
        source: require('../assets/img/usercenter.png'),
        name: '个人中心',
        width: 365,
        pathName: 'User'
      },
      {
        source: require('../assets/img/workspace_item1.png'),
        name: '健康打卡',
        width: 365
      },
      {
        source: require('../assets/img/workspace_item2.png'),
        name: '亲友信息',
        width: 365
      },
      {
        source: require('../assets/img/home_icon8.png'),
        name: '核酸上报',
        width: 365
      },
      {
        source: require('../assets/img/home_icon9.png'),
        name: '抗体上报',
        width: 365
      },
      {
        source: require('../assets/img/workspace_item3.png'),
        name: '代登记信息',
        width: 730
      },
      {
        source: require('../assets/img/jb.png'),
        name: '举报',
        width: 730,
        pathName: 'Report'
      }
    ]
  }
  componentDidMount() {
    // WToast.show({data: 'hello world',position: WToast.position.CENTER})
  }
  UNSAFE_componentWillMount() {
    // 判断有没有登录（本地storage里面有没有token）
    this.checkToken()
    // AsyncStorage.clear()
  }
  // 判断是否登录
  async checkToken() {
    try {
      const token = await AsyncStorage.getItem('token')
      if (!token) {
        this.props.navigation.replace('Sign')
      }
      return token
    } catch {
      this.props.navigation.replace('Sign')
    }
  }
  pageJump(pathName) {
    this.props.navigation.navigate(pathName)
  }
  render() {
    return (
      <ScrollView>
        <Text style={styles.h1} onPress={() => this.pageJump('User')}>智慧社区</Text>
        <View style={{ flex: 1, flexWrap: 'wrap', flexDirection: 'row', padding: pxSize(10), alignItems: 'center', justifyContent: "flex-start" }}>
          {
            this.state.tabList.map(item => (
              <View key={item.name} style={{ padding: pxSize(10) }}>
                <TouchableOpacity onPress={() => this.pageJump(item.pathName)}>
                  <Image
                    source={item.source}
                    style={{ width: pxSize(item.width - 20), height: pxSize(260), borderRadius: 10 }}
                  />
                </TouchableOpacity>
              </View>
            ))
          }
        </View>
      </ScrollView>
    )
  }
}
const styles = StyleSheet.create({
  h1: {
    color: '#666',
    fontSize: pxSize(36),
    textAlign: 'center',
    paddingTop: pxSize(40),
    paddingBottom: pxSize(20)
  }
})