import React from 'react'
import { View, StyleSheet, ImageBackground, StatusBar, ActivityIndicator, ToastAndroid } from 'react-native'
import AntDesign from "react-native-vector-icons/AntDesign"
import { Input, Button, Text, Overlay } from 'react-native-elements'
import AsyncStorage from '@react-native-community/async-storage'
import pxSize from '../../assets/js/pxSize'
import request from '../../utils/request'

export default class Sign extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      loading: false,
      loginForm: {
        mobile: '18971114460',
        password: ''
      }
    }
  }
  componentWillUnmount() {
    this.setState({
      loading: false
    })
  }
  async login() {
    // this.setState({
    //   loading: true
    // })

    const token = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiJ9.eyJzdWIiOiIyNjkwNzg4MTI0NDQxMjMxMzYiLCJpYXQiOjE1OTM1OTg2NTAsImV4cCI6MTU5NDIwMzQ1MH0.HakjkuKgf-nNlAXMQg028KTDsYOq-dKobBvmU3FejAi8O6Z-_F2uBnsA2EAwHP4WV-LzMkeiw7EZxMUh-D8zTQ'
    await AsyncStorage.setItem('token', token)
    // 获取个人信息
    request({
      url: 'app/userdetail/info/myself',
      method: 'get',
      params: {}
    }).then(async res => {
      // 储存用户信息
      await AsyncStorage.setItem('user', JSON.stringify(res.userDetail))
      this.props.navigation.replace('Index')

    }).catch(err => {

    })
    this.setState({
      loading: false
    })
  }
  // 账号
  setMobile(txt) {
    this.setState({
      loginForm: {
        ...this.state.loginForm,
        mobile: txt
      }
    })
  }
  // 密码
  setPassword(txt) {
    this.setState({
      loginForm: {
        ...this.state.loginForm,
        password: txt
      }
    })
  }
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center' }}>
        <StatusBar backgroundColor="#4866DF" />
        <ImageBackground source={require('../../assets/img/signBg.png')} style={{ width: pxSize(750), height: pxSize(450) }}>
        </ImageBackground>
        <View style={styles.container}>
          <Text h4 h4Style={{ paddingBottom: 30, color: '#555', textAlign: 'center' }}>智慧社区</Text>

          <Input
            value={this.state.loginForm.mobile}
            onChangeText={(txt) => this.setMobile(txt)}
            placeholder='请输入账号'
            inputContainerStyle={{ borderBottomColor: '#ccc' }}
            inputStyle={styles.containerStyle}
            leftIcon={
              <AntDesign
                name='user'
                size={pxSize(46)}
                color='#2089dc'
              />
            }
          />
          <Input
            secureTextEntry={true}
            value={this.state.loginForm.password}
            onChangeText={(txt) => this.setPassword(txt)}
            placeholder='请输入密码'
            inputContainerStyle={{ borderBottomColor: '#ccc' }}
            inputStyle={styles.containerStyle}
            leftIcon={
              <AntDesign
                name='lock1'
                size={pxSize(46)}
                color='#2089dc'
              />
            }
          />
          <Button
            containerStyle={{ marginTop: pxSize(40), marginBottom: pxSize(16) }}
            buttonStyle={{ width: pxSize(640), height: pxSize(90), borderRadius: pxSize(100) }}
            title="登 录"
            raised={true}
            loading={this.state.loading}
            onPress={() => this.login()}
          />
        </View>
        <View style={{ marginTop: pxSize(200) }}>
        </View>
        <Button
          type="clear"
          icon={
            <AntDesign
              name="wechat"
              size={pxSize(80)}
              color="#07c160"
            />
          }
        />
        {
          this.state.loading ? <Loading /> : null
        }
      </View>
    )
  }
}
const styles = StyleSheet.create({
  container: {
    width: pxSize(680),
    padding: pxSize(20),
    borderWidth: pxSize(1),
    borderColor: '#ccc',
    borderRadius: pxSize(20),
    marginTop: pxSize(-120),
    backgroundColor: '#fff'
  },
  containerStyle: {
    fontSize: pxSize(30),
  }
})